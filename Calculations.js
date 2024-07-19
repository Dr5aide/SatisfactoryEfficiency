// calculate Value of given Resources
function getResourceValueForResourceArray(resourceArray) {
    var resourceValue = 0;
    for (let i = 0; i < resourceArray.length; i++) {
        iResourceValue = getResourceValueForResourceIndex(resourceArray[i].materialIndex);
        resourceValue += iResourceValue * resourceArray[i].quantity;
    }
    return resourceValue;
}

// recipeLog for circular references
const recipeLogSize = 16;
var craftingRecipeLog = [];
var energyRecipeLog = [];
var currentRecipeCallStackSize = 0;
var highestRecipeCallStack = 0;
function addRecipeIndexToRecipeLog(recipeIndexToAdd, addToEnergyRecipeLog) {
    var recipeLog = [];
    if (addToEnergyRecipeLog) {
        recipeLog = energyRecipeLog;
    }
    else {
        recipeLog = craftingRecipeLog;
    }
    for (let i = recipeLogSize - 1; i > 0; i--) {
        recipeLog[i] = recipeLog[i - 1];
    }
    recipeLog[0] = {
        recipeIndex: recipeIndexToAdd,
        recipeCallStackSize: currentRecipeCallStackSize
    };
    if (addToEnergyRecipeLog) {
        energyRecipeLog = recipeLog;
    }
    else {
        craftingRecipeLog = recipeLog;
        // update highest RecipeCallStack for number of maximaly needed crafting tree columns
        if (highestRecipeCallStack < currentRecipeCallStackSize && !addToEnergyRecipeLog) {
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
                if (costArrays.quantity[i] <= recipes[recipeIndex].outputQuantity[j]) {
                    ijQuantityToAdd = costArrays.quantity[i];
                }
                else {
                    ijQuantityToAdd = recipes[recipeIndex].outputQuantity[j];
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

// Calcuate Resources per Material
function calculateResourceCostPerMaterial(materialIndexToCalc, calculatePowerCost, addToEnergyRecipeLog) {
    console.log("calculateResourceCostPerMaterial for " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " at " + currentRecipeCallStackSize);
    // check for circular reference
    var circularReferenceDetected = 0; // 0 = false, while 1,2,3... are circularReference of size 2,3,4...
    var outputToRemoveCircularReference = [];
    var inputToRemoveCircularReference = [];
    var recipeLog = [];
    if (addToEnergyRecipeLog) {
        recipeLog = energyRecipeLog;
    }
    else {
        recipeLog = craftingRecipeLog;
    }
    ///////////////
    // RecipeLog is only updated in getRecipeIndexFor()
    var materialInRecipeLog = 0; // 0 = false, while 1,2,3... are material in recipe 1,2,3... before in the stack
    outerLoop:
    for (let i = 1; i < recipeLog.length; i++) {
        if (!(recipeLog[i] === undefined)) {
            // For direct circular reference primary Output is considered
            if (i == 1) {
                if (recipes[recipeLog[i].recipeIndex].output[0] == materialIndexToCalc) {
                    materialInRecipeLog = i;
                    console.log("Already produced in a recipe before: " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " in recipe output of " + recipeLog[i].recipeIndex + " " + recipes[recipeLog[i].recipeIndex].name);
                    break outerLoop;
                }
            }
            // For big circular reference only secondary Outputs will be considered
            for (let j = 1; j < recipes[recipeLog[i].recipeIndex].output.length; j++) {
                if (recipes[recipeLog[i].recipeIndex].output[j] == materialIndexToCalc) {
                    materialInRecipeLog = i;
                    console.log("Already produced in a recipe before: " + materialIndexToCalc + " " + materials[materialIndexToCalc].name + " in recipe output of " + recipeLog[i].recipeIndex + " " + recipes[recipeLog[i].recipeIndex].name);
                    break outerLoop;
                }
            }
        }
    }
    // If its a big circular reference, its most likely a secondary output like empty canisters, that loop on itself
    if (materialInRecipeLog > 1) {
        if (recipeLog[0].recipeCallStackSize > recipeLog[materialInRecipeLog].recipeCallStackSize) {
            outputToRemoveCircularReference = lookUpOutputOverlapForCostArray(recipeLog[materialInRecipeLog].recipeIndex, {
                materialIndex: [materialIndexToCalc],
                quantity: [100] //Dummy value
            });
            if (outputToRemoveCircularReference.length > 0) {
                circularReferenceDetected = materialInRecipeLog;
            }
        }
    }
    else {
        // If its a small circular reference, its a direct and complete circular reference like the recycling loop
        if (materialInRecipeLog == 1) {
            if (recipeLog[0].recipeCallStackSize > recipeLog[materialInRecipeLog].recipeCallStackSize) {
                outputToRemoveCircularReference = lookUpOutputOverlapForCostArray(recipeLog[materialInRecipeLog].recipeIndex, {
                    materialIndex: recipes[recipeLog[0].recipeIndex].input,
                    quantity: recipes[recipeLog[0].recipeIndex].inputQuantity
                });
                inputToRemoveCircularReference = lookUpInputOverlapForCostArray(recipeLog[materialInRecipeLog].recipeIndex, {
                    materialIndex: recipes[recipeLog[0].recipeIndex].output,
                    quantity: recipes[recipeLog[0].recipeIndex].outputQuantity
                });
                if (inputToRemoveCircularReference.length > 0 && outputToRemoveCircularReference.length > 0) {
                    circularReferenceDetected = materialInRecipeLog;
                }
            }
        }
    }
    ///////////////
    //Fallback if check for circular reference breaks apart
    if (inputToRemoveCircularReference.length == 0) {
        inputToRemoveCircularReference = [];
    }
    if (outputToRemoveCircularReference.length == 0) {
        outputToRemoveCircularReference = [];
    }
    // increment currentRecipeCallStackSize
    currentRecipeCallStackSize++;
    // Look up recipe (circular reference will take it from the log, cause the loop wouldnt end otherwise)
    var recipeIndex;
    // If direct circular reference detected, then the recipe in the log[1] is the currently needed recipe
    if (circularReferenceDetected == 1) {
        recipeIndex = recipeLog[circularReferenceDetected].recipeIndex;
    }
    else {
        // If there is a bigger circular reference the outputToRemoveCircularReference will zero the crafting cost for the getRecipeIndex most likely (return value is -1) or else nothing special happens
        recipeIndex = getRecipeIndexFor(materialIndexToCalc, calculatePowerCost, addToEnergyRecipeLog, outputToRemoveCircularReference);
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
    outputPerRecipe = subtractCosts(outputPerRecipe, outputToRemoveCircularReference);
    //console.log("outputPerRecipe:");
    //console.log(outputPerRecipe);
    //
    var costPerProduct = [];
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
    var costPerRecipe = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, inputToRemoveCircularReference, addToEnergyRecipeLog);
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
function addRecipeForMaterial(recipeArrayToStore, materialToStore, valueCostArray) {
    recipeCacheForMaterial.push({
        name: materials[materialToStore].name,
        materialIndex: materialToStore,
        recipeIndeces: recipeArrayToStore,
        valueCost: valueCostArray
    });
}
function lookUpCachedRecipeForMaterialNumber(materialIndex, recipeEfficiencyLevel) {
    for (let i = 0; i < recipeCacheForMaterial.length; i++) {
        if (recipeCacheForMaterial[i].materialIndex === materialIndex) {
            return recipeCacheForMaterial[i].recipeIndeces[recipeEfficiencyLevel - 1];
        }
    }
    return -1;
}
function lookUpRecipeCacheObjectForMaterialNumber(materialIndex) {
    for (let i = 0; i < recipeCacheForMaterial.length; i++) {
        if (recipeCacheForMaterial[i].materialIndex === materialIndex) {
            return recipeCacheForMaterial[i];
        }
    }
}


function getRecipeIndexFor(materialIndex, calculatePowerCost, addToEnergyRecipeLog, outputToRemoveCircularReference) {
    // look through cache
    var cachedRecipe = lookUpCachedRecipeForMaterialNumber(materialIndex, selectedDefaultRecipeEfficiencyLevel)
    if (cachedRecipe >= 0) {
        var arrayOfOutput = [];
        var recipe = recipes[cachedRecipe];
        for (let i = 0; i < recipe.output.length; i++) {
            arrayOfOutput.push({
                name: materials[recipe.output[j]].name,
                materialIndex: recipe.output[j],
                quantity: recipe.outputQuantity[j]
            })
        }
        var costArray = subtractCosts(arrayOfOutput, outputToRemoveCircularReference);
        if (costArray.length == 0 || costArray[0].quantity == 0) {
            return -1;
        }
        return cachedRecipe;
    }
    // look up all recipes
    var potentialRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        // secondary Output disabled because of circular reference complexity
        /*for (let j = 0; j < recipes[i].output.length; j++) {
            if (recipes[i].output[j] == materialIndex && recipes[i].tier <= unlockedTiers) {
                potentialRecipes.push({
                    index: i,
                    name: recipes[i].name
                });
                break;
            }
        }*/
        if (recipes[i].output[0] == materialIndex && recipes[i].tier <= unlockedTiers) {
            potentialRecipes.push({
                index: i,
                name: recipes[i].name
            });
        }
    }
    if (potentialRecipes.length < 1) {
        throw new Error('No recipe found for material: ' + materialIndex + ' ' + materials[materialIndex].name);
    }
    // Check for big circular reference. In that case stuff like empty canisters annihilates itself
    if (outputToRemoveCircularReference.length > 0) {
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
            var costArray = subtractCosts(arrayOfOutput, outputToRemoveCircularReference);
            if (costArray.length == 0 || costArray[0].quantity == 0) {
                return -1;
            }
        }
    }
    // determine their efficiency
    var chosenRecipeIndex = potentialRecipes[0].index;
    var efficiencyRecipeIndeces = [];
    var efficiencyRecipeMaterialCost = [];
    var efficiencyRecipeValueCosts = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        iResourceCostArray = calculateResourceCostPerMaterialForRecipe(materialIndex, potentialRecipes[i].index, calculatePowerCost, addToEnergyRecipeLog);
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
    //Store in cache
    addRecipeForMaterial(efficiencyRecipeIndeces, materialIndex, efficiencyRecipeValueCosts);
    //determine which one should be used by default
    chosenRecipeIndex = efficiencyRecipeIndeces[selectedDefaultRecipeEfficiencyLevel - 1];
    if (!(typeof chosenRecipeIndex === 'number')) {
        throw new Error('Couldn\'t determine recipe for materialIndex ' + materialIndex + materials[materialIndex].name);
    }
    // returns index of the recipe used to craft
    return chosenRecipeIndex;
}

function calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, inputToRemoveCircularReference, addToEnergyRecipeLog) {
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputMaterialIndex = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        // Remove input cost from circular reference
        if (inputToRemoveCircularReference) {
            if (inputToRemoveCircularReference.length > 0) {
                for (let j = 0; j < inputToRemoveCircularReference.length; j++) {
                    if (inputToRemoveCircularReference[j].materialIndex == iInputMaterialIndex) {
                        iInputQuantity -= inputToRemoveCircularReference[j].quantity;
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
                cost = addCosts(cost, calculateEnergyResourceCost(materials[iInputMaterialIndex].megawattSecondToExtract));
            }
            else {
                var costToAdd = [{
                    name: 'MJ of Power',
                    materialIndex: getMaterialIndexByName('MJ of Power'),
                    quantity: materials[iInputMaterialIndex].megawattSecondToExtract
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
        else {
            addRecipeIndexToRecipeLog(recipeIndex, addToEnergyRecipeLog);
            //console.log('Calculating Resource cost of ' + iInputMaterialIndex + ' ' + materials[iInputMaterialIndex].name + ' for ' + recipes[recipeIndex].name);
            var costToAdd = calculateResourceCostPerMaterial(iInputMaterialIndex, calculatePowerCost, addToEnergyRecipeLog);
            for (let i = 0; i < costToAdd.length; i++) {
                costToAdd[i].quantity *= iInputQuantity;
            }
            cost = addCosts(cost, costToAdd);
        }
    }
    // Material if not resource
    var megawattSecondsPerCraft = calculatePowerUsagePerRecipe(recipeIndex);
    if (calculatePowerCost) {
        cost = addCosts(cost, calculateEnergyCost(megawattSecondsPerCraft));
    }
    // returns list of data objects with type and amount per 1 recipe craft
    return cost;
};

//copy of calculateResourceCostPerRecipe
function calculateCostPerRecipe(recipeIndex, inputToRemoveCircularReference) {
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputMaterialIndex = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        // Remove input cost from circular reference
        if (inputToRemoveCircularReference) {
            if (inputToRemoveCircularReference.length > 0) {
                for (let j = 0; j < inputToRemoveCircularReference.length; j++) {
                    if (inputToRemoveCircularReference[j].materialIndex == iInputMaterialIndex) {
                        iInputQuantity -= inputToRemoveCircularReference[j].quantity;
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

function calculateResourceCostPerMaterialForRecipe(materialIndex, recipeIndex, calculatePowerCost, addToEnergyRecipeLog) {
    // Cost for whole recipe
    costArray = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, [], addToEnergyRecipeLog);
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
    var megawattSeconds = machines[machineIndex].powerConsumption_mw * recipes[recipeIndex].craftingTime_s;
    // returns megawatt seconds (I know thats a damn cursed unit) per 1 recipe craft
    return megawattSeconds;
};

function calculateEnergyResourceCost(megawattSeconds) {
    var costForMegawattSeconds = [];
    var materialCostArray = calculateEnergyCost(megawattSeconds);
    for (let i = 0; i < materialCostArray.length; i++) {
        var iMaterialIndex = materialCostArray[i].materialIndex;
        var iMaterialAmount = materialCostArray[i].quantity;
        //
        var iResourceCostPerMaterial;
        if (!(materials[iMaterialIndex].isResource)) {
            // highestCallStack is only used for crafting table, therefore not needed in power calculation
            updateHighestRecipeCallStack = false;
            iResourceCostPerMaterial = calculateResourceCostPerMaterial(iMaterialIndex, false, true); // can't calc power cost or else goes endless <= false , addToEnergyRecipeLog <= true
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
        addCosts(costForMegawattSeconds, iResourceCostPerMaterial);
    }
    return costForMegawattSeconds;
}

function calculateEnergyCost(megawattSeconds) {
    var cost = []
    //
    var MJPerBurn = energySources[selectedEnergySourceIndex].outputQuantity[0];
    //
    for (let i = 0; i < energySources[selectedEnergySourceIndex].input.length; i++) {
        cost = addCosts(cost, [{
            name: materials[energySources[selectedEnergySourceIndex].input[i]].name,
            materialIndex: energySources[selectedEnergySourceIndex].input[i],
            quantity: energySources[selectedEnergySourceIndex].inputQuantity[i] * megawattSeconds / MJPerBurn
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
        if (costArray[i].quantity == 0) {
            costArray.splice(i, 1);
            removeAllZerosFromCostArray(costArray);
            break;
        }
        if (costArray[i].quantity < 0) {
            throw new Error('Quantity in cost array is below zero');
        }
    }
    return costArray;
};