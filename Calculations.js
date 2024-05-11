function getResourceValueForCostArray(costArray) {
    var resourceValue = 0;
    for (let i = 0; i < costArray.length; i++) {
        resourceValue += getResourceValueForResourceIndex(costArray[i].materialIndex)
    }
    return resourceValue;
}

function calculateResourceCostPerMaterial(materialIndex, calculatePowerCost) {
    var recipeIndex = getRecipeIndexFor(materialIndex, calculatePowerCost);
    var costPerProduct = [];
    var costPerRecipe = calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost);
    //
    //console.log('CostPerRecipe for ' + materials[materialIndex].name + ' is: ');
    //console.log(costPerRecipe);
    //
    var outputPerRecipe = recipes[recipeIndex].outputQuantity[0];
    for (let i = 0; i < costPerRecipe.length; i++) {
        costPerProduct.push({
            name: costPerRecipe[i].name,
            materialIndex: costPerRecipe[i].materialIndex,
            quantity: costPerRecipe[i].quantity / outputPerRecipe
        })
    }
    //
    //console.log('CostPerProduct for ' + materials[materialIndex].name + ' is: ');
    //console.log(costPerProduct);
    // returns list of data objects with type and amount per 1 recipe craft
    return costPerProduct;
};

function getRecipeIndexFor(materialIndex) {
    // always with powerUsageCost
    var potentialRecipeIndeces = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].output[0] == materialIndex) {
            potentialRecipeIndeces.push(i);
        }
    }
    // toDo
    if (potentialRecipeIndeces[0] < 0) {
        throw new Error('No recipe found for materialNo: ' + materialIndex);
    }
    var recipeIndex = potentialRecipeIndeces[0];
    // returns index of the recipe used to craft
    return recipeIndex;
}

function calculateResourceCostPerRecipe(recipeIndex, calculatePowerCost) {
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputMaterialIndex = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        console.log('Material ' + materials[iInputMaterialIndex].name + ' is needed ' + iInputQuantity + ' times for ' + recipes[recipeIndex].outputQuantity + ' ' + recipes[recipeIndex].name);
        //
        if (materials[iInputMaterialIndex].isResource) {
            // Power
            if (calculatePowerCost) {
                cost = addCosts(cost, calculateEnergyCost(materials[iInputMaterialIndex].megawattSecondToExtract));
            }
            else {
                var costToAdd = [{
                    name: 'MJ of Power',
                    materialIndex: 0,
                    quantity: materials[iInputMaterialIndex].megawattSecondToExtract
                }]
                cost = addCosts(cost, costToAdd);
            }
            // Material
            var costToAdd = [{
                name: materials[iInputMaterialIndex].name,
                materialIndex: iInputMaterialIndex,
                quantity: iInputQuantity
            }]
            cost = addCosts(cost, costToAdd);

        }
        else {
            var costToAdd = calculateResourceCostPerMaterial(iInputMaterialIndex);
            for (let i = 0; i < costToAdd.length; i++) {
                costToAdd[i].quantity *= iInputQuantity;
            }
            cost = addCosts(cost, costToAdd);
        }
    }
    //
    var megawattSecondsPerCraft = calculatePowerUsagePerRecipe(recipeIndex);
    if (calculatePowerCost) {
        cost = addCosts(cost, calculateEnergyCost(megawattSecondsPerCraft));
    }
    // returns list of data objects with type and amount per 1 recipe craft
    return cost;
};

function calculatePowerUsagePerRecipe(recipeIndex) {
    var machineIndex = recipes[recipeIndex].machine;
    var megawattSeconds = machines[machineIndex].powerConsumption_mw * recipes[recipeIndex].craftingTime_s;
    // returns megawatt seconds (I know thats a damn cursed unit) per 1 recipe craft
    //console.log('MegawattSeconds per recipe: ' + megawattSeconds);
    return megawattSeconds;
};

function calculateEnergyCost(megawattSeconds) {
    var cost = []
    //
    for (let i = 0; i < energySources[energySourceIndex].input.length; i++) {
        cost = addCosts(cost, [{
            name: materials[energySources[energySourceIndex].input[i]].name,
            materialIndex: energySources[energySourceIndex].input[i],
            quantity: energySources[energySourceIndex].inputPerMegawattSecond[i] * megawattSeconds
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
    // return combinedd arrays
    return cost1;
};