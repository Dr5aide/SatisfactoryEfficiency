function getResourceValueForResourceArray(resourceArray) {
    var resourceValue = 0;
    for (let i = 0; i < resourceArray.length; i++) {
        //console.log('Trying to get resource value for: ' + resourceArray[i].materialIndex);
        iResourceValue = getResourceValueForResourceIndex(resourceArray[i].materialIndex);
        //console.log('Value is: ' + iResourceValue);
        resourceValue += iResourceValue * resourceArray[i].quantity;
    }
    return resourceValue;
}

// recipeLog for circular references
const recipeLogSize = 8;
var recipeLog = [];
var currentRecipeCallStackSize = 0;
var highestRecipeCallStack = 0;
function addRecipeIndexToRecipeLog(recipeIndexToAdd) {
    //console.log('RecipeIndex put to stack: ' + recipeIndexToAdd + ' ' + recipes[recipeIndexToAdd].name + ' at stackSize ' + currentRecipeCallStackSize);
    for (let i = recipeLogSize - 1; i > 0; i--) {
        recipeLog[i] = recipeLog[i - 1];
    }
    recipeLog[0] = {
        recipeIndex: recipeIndexToAdd,
        recipeCallStackSize: currentRecipeCallStackSize
    };
    //
    if (highestRecipeCallStack < currentRecipeCallStackSize) {
        highestRecipeCallStack = currentRecipeCallStackSize;
    }
}
function lookUpInputOverlapForCostArray(recipeIndex, costArrays) {
    var InputOverlap = [];
    for (let i = 0; i < costArrays.materialIndex.length; i++) {
        for (let j = 0; j < recipes[recipeIndex].output.length; j++) {
            if (costArrays.materialIndex[i] == recipes[recipeIndex].output[j]) {
                InputOverlap.push({
                    name: materials[costArrays.materialIndex[i]].name,
                    materialIndex: costArrays.materialIndex[i],
                    quantity: costArrays.quantity[i]
                });
            }
        }
    }
    return InputOverlap;
}
function lookUpOutputOverlapForCostArray(recipeIndex, costArrays) {
    var OutputOverlap = [];
    for (let i = 0; i < costArrays.materialIndex.length; i++) {
        for (let j = 0; j < recipes[recipeIndex].input.length; j++) {
            if (costArrays.materialIndex[i] == recipes[recipeIndex].input[j]) {
                OutputOverlap.push({
                    name: materials[recipes[recipeIndex].input[j]].name,
                    materialIndex: recipes[recipeIndex].input[j],
                    quantity: recipes[recipeIndex].inputQuantity[j]
                });
            }
        }
    }
    return OutputOverlap;
}

function calculateResourceCostPerMaterial(materialIndex, calculatePowerCost) {
    // check for circular reference
    var circularReferenceDetected = false;
    var outputToRemoveCircularReference = [];
    var inputToRemoveCircularReference = [];
    if (!(recipeLog[0] === undefined || recipeLog[1] === undefined || recipeLog[2] === undefined || recipeLog[3] === undefined)) {
        // RecipeLog is only updated in getRecipeIndexFor()
        var materialInRecipeLog = false;
        for (let i = 0; i < recipes[recipeLog[1].recipeIndex].output.length; i++) {
            if (recipes[recipeLog[1].recipeIndex].output[i] == materialIndex) {
                materialInRecipeLog = true;
            }
        }
        //console.log('Current recipe log and stack:')
        //console.log(recipeLog);
        //console.log(currentRecipeCallStackSize);
        var log0 = recipeLog[0].recipeIndex;
        var log1 = recipeLog[1].recipeIndex;
        var log2 = recipeLog[2].recipeIndex;
        var log3 = recipeLog[3].recipeIndex;
        if (materialInRecipeLog && log0 === log2 && log1 === log3 && recipeLog[0].recipeCallStackSize > recipeLog[2].recipeCallStackSize) {
            console.log('Recognized circular reference between recipeNo ' + recipeLog[0].recipeIndex + ' ' + recipes[recipeLog[0].recipeIndex].name + ' and recipeNo ' + recipeLog[1].recipeIndex + ' ' + recipes[recipeLog[1].recipeIndex].name);
            circularReferenceDetected = true;
            outputToRemoveCircularReference = lookUpInputOverlapForCostArray(recipeLog[1].recipeIndex, {
                materialIndex: recipes[recipeLog[0].recipeIndex].input,
                quantity: recipes[recipeLog[0].recipeIndex].inputQuantity
            });
            inputToRemoveCircularReference = lookUpOutputOverlapForCostArray(recipeLog[1].recipeIndex, {
                materialIndex: recipes[recipeLog[0].recipeIndex].output,
                quantity: recipes[recipeLog[0].recipeIndex].outputQuantity
            });
            //Fallback if breaks apart
            if (inputToRemoveCircularReference.length == 0) {
                outputToRemoveCircularReference = [];
            }
        }
    }
    // increment currentRecipeCallStackSize
    currentRecipeCallStackSize++;
    // Look up recipe (circular reference will take it from the log, cause the loop wouldnt end otherwise)
    var recipeIndex;
    if (circularReferenceDetected) {
        recipeIndex = recipeLog[1].recipeIndex;
    }
    else { recipeIndex = getRecipeIndexFor(materialIndex, calculatePowerCost); }
    //
    var costPerProduct = [];
    var costPerRecipe = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, inputToRemoveCircularReference);
    //
    var outputPerRecipe = recipes[recipeIndex].outputQuantity[0];
    outputPerRecipe = subtractCosts(outputPerRecipe, outputToRemoveCircularReference);
    for (let i = 0; i < costPerRecipe.length; i++) {
        costPerProduct.push({
            name: costPerRecipe[i].name,
            materialIndex: costPerRecipe[i].materialIndex,
            quantity: costPerRecipe[i].quantity / outputPerRecipe
        })
    }
    // decrement currentRecipeCallStackSize
    currentRecipeCallStackSize--;
    // returns list of data objects with type and amount per 1 recipe craft
    return costPerProduct;
};

var recipeCacheForMaterial = [];
function addRecipeForMaterial(recipeArrayToStore, materialToStore, valueCostArray) {
    recipeCacheForMaterial.push({
        materialIndex: materialToStore,
        recipeIndeces: recipeArrayToStore,
        valueCost: valueCostArray
    })
    // console.log('recipeCache');
    // console.log(recipeCacheForMaterial);
}
function lookUpCachedRecipeForMaterialNumber(materialIndex, recipeEfficiencyLevel) {
    for (let i = 0; i < recipeCacheForMaterial.length; i++) {
        if (recipeCacheForMaterial[i].materialIndex === materialIndex) {
            //console.log('Return recipe from cache:');
            //console.log(recipeCacheForMaterial[i].recipeIndeces[recipeEfficiencyLevel - 1]);
            return recipeCacheForMaterial[i].recipeIndeces[recipeEfficiencyLevel - 1];
        }
    }
    return -1;
}

function getRecipeIndexFor(materialIndex, calculatePowerCost) {
    // look through cache
    var cachedRecipe = lookUpCachedRecipeForMaterialNumber(materialIndex, selectedDefaultRecipeEfficiency)
    if (cachedRecipe >= 0) {
        return cachedRecipe;
    }
    // look up all recipes
    var potentialRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
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
    if (potentialRecipes.length < 1) {
        throw new Error('No recipe found for material: ' + materialIndex + ' ' + materials[materialIndex].name);
    }
    //console.log('Potential recipes: ');
    //console.log(potentialRecipes);
    // determine their efficiency
    var chosenRecipeIndex = potentialRecipes[0].index;
    var efficiencyRecipeIndeces = [];
    var efficiencyRecipeMaterialCost = [];
    var efficiencyRecipeValueCosts = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        iResourceCostArray = calculateResourceCostPerMaterialForRecipe(materialIndex, potentialRecipes[i].index, calculatePowerCost);
        iResourceValue = getResourceValueForResourceArray(iResourceCostArray)
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
    //console.log('efficiencyRecipeIndeces = ' + efficiencyRecipeIndeces);
    //console.log('efficiencyRecipeMaterialCost = ');
    //console.log(efficiencyRecipeMaterialCost);
    //console.log('efficiencyRecipeValueCosts = ' + efficiencyRecipeValueCosts);
    //Store in cache
    addRecipeForMaterial(efficiencyRecipeIndeces, materialIndex, efficiencyRecipeValueCosts);
    //determine which one should be used by default
    chosenRecipeIndex = efficiencyRecipeIndeces[selectedDefaultRecipeEfficiency - 1];
    if (!(typeof chosenRecipeIndex === 'number')) {
        throw new Error('Couldn\'t determine recipe for materialIndex ' + materialIndex + materials[materialIndex].name);
    }
    // returns index of the recipe used to craft
    return chosenRecipeIndex;
}

function calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost, inputToRemoveCircularReference) {
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
                    materialIndex: getIDbyMaterialName('MJ of Power'),
                    quantity: materials[iInputMaterialIndex].megawattSecondToExtract
                }]
                cost = addCosts(cost, costToAdd);
            }
            // Material if resource
            var costToAdd = [{
                name: materials[iInputMaterialIndex].name,
                materialIndex: iInputMaterialIndex,
                quantity: iInputQuantity
            }]
            cost = addCosts(cost, costToAdd);

        }
        else {
            addRecipeIndexToRecipeLog(recipeIndex);
            //console.log('Calculating Resource cost of ' + iInputMaterialIndex + ' ' + materials[iInputMaterialIndex].name + ' for ' + recipes[recipeIndex].name);
            var costToAdd = calculateResourceCostPerMaterial(iInputMaterialIndex, calculatePowerCost);
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
function calculateCostPerRecipe(recipeIndex, calculatePowerCost, inputToRemoveCircularReference) {
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

function calculateResourceCostPerMaterialForRecipe(materialIndex, recipeIndex, calculatePowerCost) {
    // Cost for whole recipe
    costArray = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost);
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
            iResourceCostPerMaterial = calculateResourceCostPerMaterial(iMaterialIndex, false); // can't calc power cost or else goes endless
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
    var MJPerBurn = energySources[selectedEnergySourceIndex].outputQuantity;
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