// calculate Value of given Resources
function getResourceValueForResourceArray(resourceArray) {
    var resourceValue = 0;
    for (let i = 0; i < resourceArray.length; i++) {
        iResourceValue = getResourceValueForResourceIndex(resourceArray[i].materialIndex);
        resourceValue += iResourceValue * resourceArray[i].quantity;
    }
    return resourceValue;
}

// recipeStack for circular references
var craftingRecipeStack = [];
var energyRecipeStack = [];
var recipeLog = []; // for debugging
var currentRecipeCallStackSize = 0;
var highestRecipeCallStack = 0;
var distanceOfCircularReferenceCheck = 16; // Thats stupid long, but the calculation is doing its best to break
function addRecipeIndexToRecipeStack(recipeIndexToAdd, addToEnergyRecipeStack, materialQuantityToCalc, materialIndexToCalc) {
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    //
    var recipeStack = [];
    if (addToEnergyRecipeStack) {
        recipeStack = energyRecipeStack;
    }
    else {
        recipeStack = craftingRecipeStack;
    }
    //
    var outputIndexToCalcThis = 0;
    for (let i = 0; i < recipes[recipeIndexToAdd].output.length; i++) {
        if (materialIndexToCalc == recipes[recipeIndexToAdd].output[i]) {
            outputIndexToCalcThis = i;
        }
    }
    var recipeQuantityThis = materialQuantityToCalc / recipes[recipeIndexToAdd].outputQuantity[outputIndexToCalcThis];
    //
    recipeStack[currentRecipeCallStackSize] = {
        recipeIndex: recipeIndexToAdd,
        recipeName: recipes[recipeIndexToAdd].name,
        recipeQuantity: recipeQuantityThis,
        outputQuantity: recipes[recipeIndexToAdd].outputQuantity.map(element => element * recipeQuantityThis),
        inputQuantity: recipes[recipeIndexToAdd].inputQuantity.map(element => element * recipeQuantityThis),
        outputIndexToCalc: outputIndexToCalcThis
    };
    // For debugging
    recipeLog.push({
        recipeIndex: recipeIndexToAdd,
        recipeName: recipes[recipeIndexToAdd].name,
        recipeQuantity: recipeQuantityThis,
        outputQuantity: recipes[recipeIndexToAdd].outputQuantity.map(element => element * recipeQuantityThis),
        inputQuantity: recipes[recipeIndexToAdd].inputQuantity.map(element => element * recipeQuantityThis),
        outputIndexToCalc: outputIndexToCalcThis
    });
    //
    if (addToEnergyRecipeStack) {
        energyRecipeStack = recipeStack;
    }
    else {
        craftingRecipeStack = recipeStack;
        // update highest RecipeCallStack for number of maximaly needed crafting tree columns
        if (highestRecipeCallStack < currentRecipeCallStackSize && !addToEnergyRecipeStack) {
            highestRecipeCallStack = currentRecipeCallStackSize;
        }
    }
}

// removing input and output overlap of recipes
function lookUpOutputOverlapForCostArray(recipeIndex, costArrays) {
    var OutputOverlap = [];
    for (let i = 0; i < costArrays.materialIndex.length; i++) {
        for (let j = 0; j < recipes[recipeIndex].output.length; j++) {
            if (costArrays.materialIndex[i] == recipes[recipeIndex].output[j]) {
                var ijQuantityToAdd = 0;
                if (costArrays.quantity[i] <= recipes[recipeIndex].outputQuantity[j]) {
                    ijQuantityToAdd = costArrays.quantity[i];
                }
                else {
                    ijQuantityToAdd = recipes[recipeIndex].outputQuantity[j];
                }
                OutputOverlap.push({
                    name: materials[costArrays.materialIndex[i]].name,
                    materialIndex: costArrays.materialIndex[i],
                    quantity: ijQuantityToAdd
                });
            }
        }
    }
    return OutputOverlap;
}
function lookUpInputOverlapForCostArray(recipeIndex, costArrays) {
    var InputOverlap = [];
    for (let i = 0; i < costArrays.materialIndex.length; i++) {
        for (let j = 0; j < recipes[recipeIndex].input.length; j++) {
            if (costArrays.materialIndex[i] == recipes[recipeIndex].input[j]) {
                var ijQuantityToAdd = 0;
                if (costArrays.quantity[i] <= recipes[recipeIndex].inputQuantity[j]) {
                    ijQuantityToAdd = costArrays.quantity[i];
                }
                else {
                    ijQuantityToAdd = recipes[recipeIndex].inputQuantity[j];
                }
                InputOverlap.push({
                    name: materials[recipes[recipeIndex].input[j]].name,
                    materialIndex: recipes[recipeIndex].input[j],
                    quantity: ijQuantityToAdd
                });
            }
        }
    }
    return InputOverlap;
}
// output and input overlap with materialQuantityToCraft
function lookUpRecipeStackOutputInputOverlapBetween1And2(recipeStackIndex1, recipeStackIndex2, addToEnergyRecipeStack) {
    var recipeStack = [];
    if (addToEnergyRecipeStack) {
        recipeStack = energyRecipeStack;
    }
    else {
        recipeStack = craftingRecipeStack;
    }
    //
    var OutputOverlap = [];
    var recipeIndex1 = recipeStack[recipeStackIndex1].recipeIndex;
    var recipeIndex2 = recipeStack[recipeStackIndex2].recipeIndex;
    for (let i = 0; i < recipes[recipeIndex2].input.length; i++) {
        for (let j = 0; j < recipes[recipeIndex1].output.length; j++) {
            if (recipes[recipeIndex2].input[i] == recipes[recipeIndex1].output[j]) {
                var ijQuantityToAdd = 0;
                if (recipes[recipeIndex2].inputQuantity[i] < recipes[recipeIndex1].outputQuantity[j]) {
                    ijQuantityToAdd = recipes[recipeIndex2].inputQuantity[i];
                }
                else {
                    ijQuantityToAdd = recipes[recipeIndex1].outputQuantity[j];
                }
                OutputOverlap.push({
                    name: materials[recipes[recipeIndex1].output[j]].name,
                    materialIndex: recipes[recipeIndex1].output[j],
                    quantity: ijQuantityToAdd
                });
                break;
            }
        }
    }
    return OutputOverlap;
}
function lookUpRecipeStackInputOutputOverlapBetween1And2(recipeStackIndex1, recipeStackIndex2, addToEnergyRecipeStack) {
    return lookUpRecipeStackOutputInputOverlapBetween1And2(recipeStackIndex2, recipeStackIndex1, addToEnergyRecipeStack);
}

// Circular Reference Check
function checkForCircularReference({ materialIndexToCalc, addToEnergyRecipeStack, materialQuantityToCalc } = {}) {
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    var recipeStack = [];
    if (addToEnergyRecipeStack) {
        recipeStack = energyRecipeStack;
    }
    else {
        recipeStack = craftingRecipeStack;
    }
    // Primary Circular Reference
    var distanceChecked = 0;
    for (let i = currentRecipeCallStackSize - 1; i > 1 && distanceChecked < distanceOfCircularReferenceCheck; i--) {
        for (let j = 0; j < recipes[recipeStack[i].recipeIndex].output.length; j++) {
            if (materialIndexToCalc == recipes[recipeStack[i].recipeIndex].output[j] && recipeStack[i].outputIndexToCalc == j) {
                console.log("Found primary Output in a recipe before: " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " in recipe output of " + recipeStack[i].recipeIndex + " " + recipes[recipeStack[i].recipeIndex].name);
                var excessOutputNextRecipe = lookUpRecipeStackInputOutputOverlapBetween1And2(i, currentRecipeCallStackSize, addToEnergyRecipeStack);
                if (excessOutputNextRecipe.length > 0) {
                }
                var excessInputNextRecipe = lookUpRecipeStackOutputInputOverlapBetween1And2(i, currentRecipeCallStackSize, addToEnergyRecipeStack);
                if (excessOutputNextRecipe.length > 0) {
                }
                // The recipeQuantity is the biggest ratio of excess to the next recipes In/Outputs, so it can be calculated back to a full recipe in another methode
                var biggestRecipeQuantityForExcess = 0; // Dummy value
                for (let k = 0; k < excessOutputNextRecipe.length; k++) {
                    for (let l = 0; l < recipes[recipeStack[i].recipeIndex].outputQuantity.length; l++) {
                        if (excessOutputNextRecipe[k].materialIndex == recipes[recipeStack[i].recipeIndex].output[l]) {
                            var kRecipeQuantity = excessOutputNextRecipe[k].quantity / recipes[recipeStack[i].recipeIndex].outputQuantity[l];
                            if (biggestRecipeQuantityForExcess < kRecipeQuantity) {
                                biggestRecipeQuantityForExcess = kRecipeQuantity;
                            }
                        }
                    }
                }
                for (let k = 0; k < excessInputNextRecipe.length; k++) {
                    for (let l = 0; l < recipes[recipeStack[i].recipeIndex].inputQuantity.length; l++) {
                        if (excessInputNextRecipe[k].materialIndex == recipes[recipeStack[i].recipeIndex].input[l]) {
                            var kRecipeQuantity = excessInputNextRecipe[k].quantity / recipes[recipeStack[i].recipeIndex].inputQuantity[l];
                            if (biggestRecipeQuantityForExcess < kRecipeQuantity) {
                                biggestRecipeQuantityForExcess = kRecipeQuantity;
                            }
                        }
                    }
                }
                //
                var detectedCircularReference = {
                    recipeStackDistance: i - 1,
                    circularReferenceIsPrimary: true,
                    excessOutputNextRecipeCircularReference: excessOutputNextRecipe,
                    excessInputNextRecipeCircularReference: excessInputNextRecipe,
                    recipeQuantity: biggestRecipeQuantityForExcess
                }
                return detectedCircularReference;
            }
        }
        distanceChecked++;
    }
    // Secondary Circular Reference
    distanceChecked = 0;
    for (let i = currentRecipeCallStackSize - 1; i > 0 && distanceChecked < distanceOfCircularReferenceCheck; i--) {
        for (let j = 0; j < recipes[recipeStack[i].recipeIndex].output.length; j++) {
            if (materialIndexToCalc == recipes[recipeStack[i].recipeIndex].output[j] && recipeStack[i].outputIndexToCalc != j) {
                console.log("Found secondary Output in a recipe before: " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " in recipe output of " + recipeStack[i].recipeIndex + " " + recipes[recipeStack[i].recipeIndex].name);
                var excessOutputNextRecipe = [];
                var excessInputNextRecipe = lookUpRecipeStackOutputInputOverlapBetween1And2(i, currentRecipeCallStackSize, addToEnergyRecipeStack);
                // The primary Output is irelevant for the secondary output loop
                for (let k = 0; k < excessInputNextRecipe.length; k++) {
                    if (recipes[recipeStack[i].recipeIndex].output[recipeStack[i].outputIndexToCalc] == excessInputNextRecipe[k].materialIndex) {
                        excessInputNextRecipe.splice(k, 1);
                        break;
                    }
                }
                // The recipeQuantity is the biggest ratio of excess to the next recipes In/Outputs, so it can be calculated back to a full recipe in another methode
                var biggestRecipeQuantityForExcess = 0; // Dummy value
                for (let k = 0; k < excessInputNextRecipe.length; k++) {
                    for (let l = 0; l < recipes[recipeStack[i].recipeIndex].outputQuantity.length; l++) {
                        if (excessInputNextRecipe[k].materialIndex == recipes[recipeStack[i].recipeIndex].output[l]) {
                            var kRecipeQuantity = excessInputNextRecipe[k].quantity / recipes[recipeStack[i].recipeIndex].outputQuantity[l];
                            if (biggestRecipeQuantityForExcess < kRecipeQuantity) {
                                biggestRecipeQuantityForExcess = kRecipeQuantity;
                            }
                        }
                    }
                }
                var detectedCircularReference = {
                    recipeStackDistance: i - 1,
                    circularReferenceIsPrimary: false,
                    excessOutputNextRecipeCircularReference: excessOutputNextRecipe,
                    excessInputNextRecipeCircularReference: excessInputNextRecipe,
                    recipeQuantity: biggestRecipeQuantityForExcess
                }
                return detectedCircularReference;
            }
        }
        distanceChecked++;
    }
    // Fallback
    var detectedCircularReference = {
        recipeStackDistance: -1,
        circularReferenceIsPrimary: true,
        excessOutputNextRecipeCircularReference: [],
        excessInputNextRecipeCircularReference: []
    }
    return detectedCircularReference;
}

// Calcuate Resources per Material
function calculateResourceCostPerMaterial({ materialIndexToCalc, calculatePowerCost, addToEnergyRecipeStack, materialQuantityToCalc } = {}) {
    console.log("calculateResourceCostPerMaterial for " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " at " + currentRecipeCallStackSize);
    //
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    var costPerProduct = [];
    //
    if (materialQuantityToCalc < 0) {
        throw new Error("QuantityToCalc for " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " at " + currentRecipeCallStackSize + " is negative");
        // decrement currentRecipeCallStackSize
        //currentRecipeCallStackSize--;
        //
        //return costPerProduct;
    }
    // check for circular reference
    var circularReferenceDetected = 0; // 0 = false, while 1,2,3... are circularReference of size 2,3,4...
    var excessInputNextRecipeCircularReference = [];
    var excessOutputNextRecipeCircularReference = [];
    ///////////////
    var detectedCircularReference = checkForCircularReference({ materialIndexToCalc: materialIndexToCalc, addToEnergyRecipeStack: addToEnergyRecipeStack, materialQuantityToCalc: materialQuantityToCalc });
    circularReferenceDetected = detectedCircularReference.recipeStackDistance + 1;
    excessInputNextRecipeCircularReference = multiplyCostArrayWith(detectedCircularReference.excessInputNextRecipeCircularReference, 1 / detectedCircularReference.recipeQuantity);
    excessOutputNextRecipeCircularReference = multiplyCostArrayWith(detectedCircularReference.excessOutputNextRecipeCircularReference, 1 / detectedCircularReference.recipeQuantity);
    var circularReferenceIsPrimary = detectedCircularReference.circularReferenceIsPrimary;
    ///////////////
    var recipeStack = [];
    if (addToEnergyRecipeStack) {
        recipeStack = energyRecipeStack;
    }
    else {
        recipeStack = craftingRecipeStack;
    }
    // increment currentRecipeCallStackSize
    currentRecipeCallStackSize++;
    // Look up recipe (circular reference will take it from the log, cause the loop wouldnt end otherwise)
    var recipeIndex;
    // If direct circular reference detected, then the recipe in the log[1] is the currently needed recipe
    if (circularReferenceDetected && circularReferenceIsPrimary) {
        recipeIndex = recipeStack[circularReferenceDetected].recipeIndex;
    }
    else {
        // If there is a bigger circular reference the excessInputNextRecipeCircularReference will zero the crafting cost for the getRecipeIndex most likely (return value is -1) or else nothing special happens
        recipeIndex = getRecipeIndexFor(materialIndexToCalc, calculatePowerCost, addToEnergyRecipeStack, excessInputNextRecipeCircularReference, circularReferenceIsPrimary, materialQuantityToCalc);
        if (recipeIndex == -1) {
            console.log("No crafting needed, because this product is already a byproduct of another step.")
            // decrement currentRecipeCallStackSize
            currentRecipeCallStackSize--;
            // cost is zero because this product doesnt need to be produced anymore
            return [];
        }
    }
    //
    var outputQuantityPerRecipe;
    for (let i = 0; i < recipes[recipeIndex].output.length; i++) {
        var iMaterialIndex = recipes[recipeIndex].output[i];
        if (iMaterialIndex == materialIndexToCalc) {
            outputQuantityPerRecipe = recipes[recipeIndex].outputQuantity[i];
            break;
        }
    }
    var outputPerRecipe = [{
        name: materials[iMaterialIndex].name,
        materialIndex: iMaterialIndex,
        quantity: outputQuantityPerRecipe
    }];
    outputPerRecipe = subtractCosts(outputPerRecipe, excessInputNextRecipeCircularReference);
    //
    // circular reference that has no output like (un)packaging
    if (outputPerRecipe.length == 0 || outputPerRecipe[0].quantity == 0) {
        console.log("No output from loop detected");
        costPerProduct.push({
            name: materials[getMaterialIndexByName("NaR")].name,
            materialIndex: getMaterialIndexByName("NaR"),
            quantity: 1
        })
        // decrement currentRecipeCallStackSize
        currentRecipeCallStackSize--;
        // cost is infinite, because its not possible
        return costPerProduct;
    }
    var costPerRecipe = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, excessOutputNextRecipeCircularReference, addToEnergyRecipeStack, materialQuantityToCalc);
    //
    for (let i = 0; i < costPerRecipe.length; i++) {
        costPerProduct.push({
            name: costPerRecipe[i].name,
            materialIndex: costPerRecipe[i].materialIndex,
            quantity: costPerRecipe[i].quantity / outputPerRecipe[0].quantity
        });
    }
    // decrement currentRecipeCallStackSize
    currentRecipeCallStackSize--;
    // returns list of data objects with type and amount per 1 recipe craft
    return costPerProduct;
};

// Recipe cache for currently saved efficiency ranking
var recipeCacheForMaterial = [];
function addRecipesForMaterialToCache(recipeArrayToStore, materialToStore, valueCostArray, circularReferenceDetectedToStore) {
    for (let i = 0; i < valueCostArray.length; i++) {
        if ((valueCostArray[i] < 0)) {
            throw new Error('valueCostArray has value below zero');
        }
    }
    // Is this recipe already included?
    for (let i = 0; i < recipeCacheForMaterial.length; i++) {
        if (recipeCacheForMaterial[i].materialIndex == materialToStore && recipeCacheForMaterial[i].circularReferenceDetected == circularReferenceDetectedToStore) {
            return;
        }
    }
    // Else store it
    recipeCacheForMaterial.push({
        name: materials[materialToStore].name,
        materialIndex: materialToStore,
        recipeIndeces: recipeArrayToStore,
        valueCost: valueCostArray,
        circularReferenceDetected: circularReferenceDetectedToStore
    });
}
function lookUpCachedRecipeForMaterialNumber(materialIndex, recipeEfficiencyLevel, dontAcceptCircularReference) {
    var cacheObject = lookUpRecipeCacheObjectForMaterialNumber(materialIndex, dontAcceptCircularReference)
    if (cacheObject == -1) {
        return -1;
    }
    else {
        return cacheObject.recipeIndeces[recipeEfficiencyLevel - 1];
    }
}
function lookUpRecipeCacheObjectForMaterialNumber(materialIndex, dontAcceptCircularReference) {
    for (let i = 0; i < recipeCacheForMaterial.length; i++) {
        if (dontAcceptCircularReference) {
            if (recipeCacheForMaterial[i].materialIndex === materialIndex && !recipeCacheForMaterial[i].circularReferenceDetected) {
                return recipeCacheForMaterial[i];
            }
        }
        else {
            if (recipeCacheForMaterial[i].materialIndex === materialIndex) {
                return recipeCacheForMaterial[i];
            }
        }
    }
    return -1;
}


function getRecipeIndexFor(materialIndex, calculatePowerCost, addToEnergyRecipeStack, excessInputNextRecipeCircularReference, circularReferenceIsPrimary, materialQuantityToCalc) {
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    // look through cache
    var cachedRecipe = lookUpCachedRecipeForMaterialNumber(materialIndex, selectedDefaultRecipeEfficiencyLevel, true); //Don't include circular reference <- true
    if (cachedRecipe >= 0) {
        var arrayOfOutput = [];
        var recipe = recipes[cachedRecipe];
        for (let i = 0; i < recipe.output.length; i++) {
            arrayOfOutput.push({
                name: materials[recipe.output[i]].name,
                materialIndex: recipe.output[i],
                quantity: recipe.outputQuantity[i]
            })
        }
        if (!circularReferenceIsPrimary) {
            var costArray = subtractCosts(arrayOfOutput, excessInputNextRecipeCircularReference);
            if (costArray.length == 0 || costArray[0].quantity == 0) {
                // No recipe needed, because the product is already produced as a secondary output
                return -1;
            }
        }
        return cachedRecipe;
    }
    // look up all recipes
    var potentialRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        // secondary Output disabled because of circular reference complexity
        if (recipes[i].secondaryOutputAllowed && considerByproductAsInput) {
            for (let j = 0; j < recipes[i].output.length; j++) {
                if (recipes[i].output[j] == materialIndex && recipes[i].tier <= unlockedTiers) {
                    potentialRecipes.push({
                        index: i,
                        name: recipes[i].name
                    });
                    break;
                }
            }
        }
        else {
            if (recipes[i].output[0] == materialIndex && recipes[i].tier <= unlockedTiers) {
                potentialRecipes.push({
                    index: i,
                    name: recipes[i].name
                });
            }
        }
    }
    if (potentialRecipes.length < 1) {
        throw new Error('No recipe found for material: ' + materialIndex + ' ' + materials[materialIndex].name);
    }
    // Check for big circular reference. In that case stuff like empty canisters annihilates itself
    if (excessInputNextRecipeCircularReference.length > 0) {
        for (let i = 0; i < potentialRecipes.length; i++) {
            var arrayOfOutput = [];
            var iRecipe = recipes[potentialRecipes[i].index];
            for (let j = 0; j < iRecipe.output.length; j++) {
                arrayOfOutput.push({
                    name: materials[iRecipe.output[j]].name,
                    materialIndex: iRecipe.output[j],
                    quantity: iRecipe.outputQuantity[j]
                })
            }
            if (!circularReferenceIsPrimary) {
                var costArray = subtractCosts(arrayOfOutput, excessInputNextRecipeCircularReference);
                if (costArray.length == 0 || costArray[0].quantity == 0) {
                    // No recipe needed, because the product is already produced as a secondary output
                    return -1;
                }
            }
        }
    }
    // determine their efficiency
    var chosenRecipeIndex = potentialRecipes[0].index;
    var efficiencyRecipeIndeces = [];
    var efficiencyRecipeMaterialCost = [];
    var efficiencyRecipeValueCosts = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        iResourceCostArray = calculateResourceCostPerMaterialForRecipe(materialIndex, potentialRecipes[i].index, calculatePowerCost, addToEnergyRecipeStack, materialQuantityToCalc);
        iResourceValue = getResourceValueForResourceArray(iResourceCostArray);
        //
        var whereToAddiRecipe = efficiencyRecipeIndeces.length;
        for (let j = efficiencyRecipeIndeces.length - 1; j >= 0; j--) {
            if (efficiencyRecipeValueCosts[j] > iResourceValue) {
                whereToAddiRecipe = j;
                efficiencyRecipeIndeces[j + 1] = efficiencyRecipeIndeces[j];
                efficiencyRecipeMaterialCost[j + 1] = efficiencyRecipeMaterialCost[j];
                efficiencyRecipeValueCosts[j + 1] = efficiencyRecipeValueCosts[j];
            }
            else {
                break;
            }
        }
        efficiencyRecipeIndeces[whereToAddiRecipe] = potentialRecipes[i].index;
        efficiencyRecipeMaterialCost[whereToAddiRecipe] = iResourceCostArray;
        efficiencyRecipeValueCosts[whereToAddiRecipe] = iResourceValue;
    }
    //Store in cache, and add wether this efficiency calculatio includes a circular reference (valueCost > 10000000)
    efficiencyCalculationWasPartOfCircularReference = false;
    for (let i = 0; i < efficiencyRecipeValueCosts.length; i++) {
        if (efficiencyRecipeValueCosts[i] > 10000000) {
            efficiencyCalculationWasPartOfCircularReference = true;
        }
    }
    addRecipesForMaterialToCache(efficiencyRecipeIndeces, materialIndex, efficiencyRecipeValueCosts, efficiencyCalculationWasPartOfCircularReference);
    //determine which one should be used by default
    chosenRecipeIndex = efficiencyRecipeIndeces[selectedDefaultRecipeEfficiencyLevel - 1];
    if (!(typeof chosenRecipeIndex === 'number')) {
        throw new Error('Couldn\'t determine recipe for materialIndex ' + materialIndex + materials[materialIndex].name);
    }
    // returns index of the recipe used to craft
    return chosenRecipeIndex;
}

function calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, excessOutputNextRecipeCircularReference, addToEnergyRecipeStack, materialQuantityToCalc, materialIndexToCalc) {
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    //
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputMaterialIndex = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        // Remove input cost from circular reference
        if (excessOutputNextRecipeCircularReference) {
            if (excessOutputNextRecipeCircularReference.length > 0) {
                for (let j = 0; j < excessOutputNextRecipeCircularReference.length; j++) {
                    if (excessOutputNextRecipeCircularReference[j].materialIndex == iInputMaterialIndex) {
                        iInputQuantity -= excessOutputNextRecipeCircularReference[j].quantity;
                    }
                }
                if (iInputQuantity == 0) {
                    continue;
                }
            }
        }
        // Material if resource
        if (materials[iInputMaterialIndex].isResource) {
            // Power
            if (calculatePowerCost) {
                cost = addCosts(cost, calculateEnergyResourceCost(materials[iInputMaterialIndex].megaJouleToExtract));
            }
            else {
                var costToAdd = [{
                    name: 'MJ of Power',
                    materialIndex: getMaterialIndexByName('MJ of Power'),
                    quantity: materials[iInputMaterialIndex].megaJouleToExtract
                }]
                cost = addCosts(cost, costToAdd);
            }
            // Resource
            var costToAdd = [{
                name: materials[iInputMaterialIndex].name,
                materialIndex: iInputMaterialIndex,
                quantity: iInputQuantity
            }]
            cost = addCosts(cost, costToAdd);

        }
        // Material if product
        else {
            addRecipeIndexToRecipeStack(recipeIndex, addToEnergyRecipeStack, materialQuantityToCalc, materialIndexToCalc);
            var primaryOutputIndex = 0;
            for (let j = 0; j < recipes[recipeIndex].output.length; j++) {
                if (materialIndexToCalc == recipes[recipeIndex].output[j]) {
                    primaryOutputIndex = j;
                }
            }
            var iInputQuantityPerMaterialQuantityToCalc = iInputQuantity * materialQuantityToCalc / recipes[recipeIndex].outputQuantity[primaryOutputIndex];
            var costToAdd = calculateResourceCostPerMaterial({ materialIndexToCalc: iInputMaterialIndex, calculatePowerCost: calculatePowerCost, addToEnergyRecipeStack: addToEnergyRecipeStack, materialQuantityToCalc: iInputQuantityPerMaterialQuantityToCalc });
            for (let j = 0; j < costToAdd.length; j++) {
                costToAdd[j].quantity *= iInputQuantity;
            }
            cost = addCosts(cost, costToAdd);
        }
    }
    // Material if not resource
    var megaJoulePerCraft = calculatePowerUsagePerRecipe(recipeIndex);
    if (calculatePowerCost) {
        cost = addCosts(cost, calculateEnergyCost(megaJoulePerCraft));
    }
    // returns list of data objects with type and amount per 1 recipe craft
    return cost;
};

//copy of calculateResourceCostPerRecipe
function calculateCostPerRecipe(recipeIndex, excessOutputNextRecipeCircularReference) {
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputMaterialIndex = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        // Remove input cost from circular reference
        if (excessOutputNextRecipeCircularReference) {
            if (excessOutputNextRecipeCircularReference.length > 0) {
                for (let j = 0; j < excessOutputNextRecipeCircularReference.length; j++) {
                    if (excessOutputNextRecipeCircularReference[j].materialIndex == iInputMaterialIndex) {
                        iInputQuantity -= excessOutputNextRecipeCircularReference[j].quantity;
                    }
                }
                if (iInputQuantity == 0) {
                    continue;
                }
            }
        }
        var costToAdd = [{
            name: materials[iInputMaterialIndex].name,
            materialIndex: iInputMaterialIndex,
            quantity: iInputQuantity
        }]
        cost = addCosts(cost, costToAdd);
    }
    // returns list of data objects with type and amount per 1 recipe craft
    return cost;
};

function calculateResourceCostPerMaterialForRecipe(materialIndex, recipeIndex, calculatePowerCost, addToEnergyRecipeStack, materialQuantityToCalc) {
    if (!(materialQuantityToCalc > 0)) {
        console.log("Error: materialQuantityToCalc missing");
    }
    // Cost for whole recipe
    costArray = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, [], addToEnergyRecipeStack, materialQuantityToCalc, materialIndex); // inputToRemove <= []
    // Material output
    var outputPerRecipe;
    for (let i = 0; i < recipes[recipeIndex].output.length; i++) {
        if (recipes[recipeIndex].output[i] == materialIndex) {
            outputPerRecipe = recipes[recipeIndex].outputQuantity[i];
            break;
        }
    }
    // Divide to per material output
    for (let i = 0; i < costArray.length; i++) {
        costArray[i].quantity /= outputPerRecipe;
    }
    //
    return costArray;
}

function calculatePowerUsagePerRecipe(recipeIndex) {
    var machineIndex = recipes[recipeIndex].machine;
    var megaJoule = machines[machineIndex].powerConsumption_mw * recipes[recipeIndex].craftingTime_s;
    // returns megawatt seconds (I know thats a damn cursed unit) per 1 recipe craft
    return megaJoule;
};

var resourceCostArrayPerMegawattSecondCache = [];

function calculateEnergyResourceCost(megaJoule) {
    var costFormegaJoule = [];
    if (resourceCostArrayPerMegawattSecondCache != []) {
        costFormegaJoule = resourceCostArrayPerMegawattSecondCache;
        for (let i = 0; i < resourceCostArrayPerMegawattSecondCache.length; i++) {
            costFormegaJoule[i].quantity *= megaJoule;
        }
    }
    else {
        var materialCostArray = calculateEnergyCost(megaJoule);
        for (let i = 0; i < materialCostArray.length; i++) {
            var iMaterialIndex = materialCostArray[i].materialIndex;
            var iMaterialAmount = materialCostArray[i].quantity;
            //
            var iResourceCostPerMaterial;
            if (!(materials[iMaterialIndex].isResource)) {
                // highestCallStack is only used for crafting table, therefore not needed in power calculation
                updateHighestRecipeCallStack = false;
                iResourceCostPerMaterial = calculateResourceCostPerMaterial({ materialIndexToCalc: iMaterialIndex, calculatePowerCost: false, addToEnergyRecipeStack: true, materialQuantityToCalc: iMaterialAmount });
                updateHighestRecipeCallStack = true;
            }
            else {
                iResourceCostPerMaterial = {
                    name: materials[iMaterialIndex].name,
                    materialIndex: iMaterialIndex,
                    quantity: iMaterialAmount
                }
            }
            //
            for (let i = 0; i < iResourceCostPerMaterial.length; i++) {
                iResourceCostPerMaterial[i].quantity = iResourceCostPerMaterial[i].quantity * iMaterialAmount;
            }
            addCosts(costFormegaJoule, iResourceCostPerMaterial);
        }
        // Set a cache
        newResourceCostArrayPerMegawattSecondCache = costFormegaJoule;
        for (let i = 0; i < newResourceCostArrayPerMegawattSecondCache.length; i++) {
            newResourceCostArrayPerMegawattSecondCache[i] /= megaJoule;
        }
        resourceCostArrayPerMegawattSecondCache = newResourceCostArrayPerMegawattSecondCache;
    }
    return costFormegaJoule;
}

function calculateEnergyCost(megaJoule) {
    var cost = []
    //
    if (!considerPowerCost) {
        return cost;
    }
    //
    var MJPerBurn = energySources[selectedEnergySourceIndex].outputQuantity[0];
    //
    for (let i = 0; i < energySources[selectedEnergySourceIndex].input.length; i++) {
        cost = addCosts(cost, [{
            name: materials[energySources[selectedEnergySourceIndex].input[i]].name,
            materialIndex: energySources[selectedEnergySourceIndex].input[i],
            quantity: energySources[selectedEnergySourceIndex].inputQuantity[i] * megaJoule / MJPerBurn
        }]);
    }
    //
    return cost;
};

function addCosts(cost1, cost2) {
    for (let i = 0; i < cost2.length; i++) {
        var iCostAdded = false;
        for (let j = 0; j < cost1.length; j++) {
            if (cost1[j].materialIndex == cost2[i].materialIndex) {
                cost1[j].quantity += cost2[i].quantity;
                iCostAdded = true;
            }
        }
        if (!iCostAdded) {
            cost1.push(cost2[i]);
        }
    }
    // return combined arrays
    return cost1;
};

function subtractCosts(cost1, cost2) {
    for (let i = 0; i < cost2.length; i++) {
        for (let j = 0; j < cost1.length; j++) {
            if (cost1[j].materialIndex == cost2[i].materialIndex) {
                cost1[j].quantity -= cost2[i].quantity;
                if (cost1[j].quantity < 0) {
                    cost1[j].quantity = 0;
                }
            }
        }
    }
    // look if there is a zero now
    cost1 = removeAllZerosFromCostArray(cost1);
    // return subtracted arrays
    return cost1;
};

function removeAllZerosFromCostArray(costArray) {
    for (let i = 0; i < costArray.length; i++) {
        if (costArray[i].quantity < 0) {
            costArray[i].quantity = 0;
            throw new Error('Quantity of ' + costArray[i].materialIndex + ' ' + materials[costArray[i].materialIndex].name + ' in cost array is below zero');
        }
        if (costArray[i].quantity == 0) {
            costArray.splice(i, 1);
            removeAllZerosFromCostArray(costArray);
            break;
        }
    }
    return costArray;
};

function multiplyCostArrayWith(costArray, factor) {
    for (let i = 0; i < costArray.length; i++) {
        costArray[i].quantity *= factor;
    }
    return costArray;
};