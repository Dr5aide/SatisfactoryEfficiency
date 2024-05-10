function calculateResourceCostPerMaterial(materialIndex, withPowerUsage) {
    var recipeIndex = getRecipeIndexFor(materialIndex, withPowerUsage);
    var costPerProduct = [];
    var costPerRecipe = calculateResourceCostPerRecipe(recipeIndex, withPowerUsage);
    var outputPerRecipe = recipes[recipeIndex].outputQuantity[0];
    for (let i = 0; i < costPerRecipe.length; i++) {
        costPerProduct.push({
            materialIndex: costPerRecipe[i].materialIndex,
            quantity: costPerRecipe[i].quantity / outputPerRecipe
        })
    }
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
    if (!potentialRecipeIndeces[0]) {
        throw new Error('No recipe found for materialNo: ' + materialIndex);
    }
    var recipeIndex = potentialRecipeIndeces[0];
    // returns index of the recipe used to craft
    return recipeIndex;
}

function calculateResourceCostPerRecipe(recipeIndex, withPowerUsage) {
    var cost = []
    //
    for (let i = 0; i < recipes[recipeIndex].input.length; i++) {
        var iInputType = recipes[recipeIndex].input[i];
        var iInputQuantity = recipes[recipeIndex].inputQuantity[i];
        if (materials[iInputType].isResource) {
            addCost(cost, [{
                materialIndex: iInputType,
                quantity: iInputQuantity
            }]);
            if (withPowerUsage) {
                addCost(cost, calculateEnergyCost(materials[iInputType].megawattSecondToExtract));
            }
        }
        else {
            addCost(cost, calculateResourceCostPerProduct(iInputType));
        }
    }
    //
    var megawattSecondsPerCraft = calculatePowerUsagePerRecipe(recipeIndex);
    if (withPowerUsage) {
        addCost(cost, calculateEnergyCost(megawattSecondsPerCraft));
    }
    // returns list of data objects with type and amount per 1 recipe craft
    //console.log('Cost per recipe: ');
    //console.log(cost);
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
        addCost(cost, [{
            materialIndex: energySources[energySourceIndex].input[i],
            quantity: energySources[energySourceIndex].inputPerMegawattSecond[i] * megawattSeconds
        }]);
    }
    //
    //console.log('Cost for ' + megawattSeconds + 'megawattSeconds of power: ');
    //console.log(cost);
    return cost;
};

function addCost(cost1, cost2) {
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