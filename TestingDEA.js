function executeOrderDEA() {

    //
    var productIndex = getMaterialIndexByName("Reinforced Iron Plate")
    // look up all recipes
    var potentialRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].output.length; j++) {
            if (recipes[i].output[j] == productIndex) {
                potentialRecipes.push({
                    index: i,
                    name: recipes[i].name
                });
                break;
            }
        }
    }
    // calculate cost per recipe
    var costForRecipe = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        costForRecipe[i] = calculateResourceCostPerRecipe(potentialRecipes[i].index, true, [], false);
    }
    // transform resourceCost for complete resource list
    var costForRecipeSorted = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        var iCostForRecipeSorted = [];
        middleLoop:
        for (let j = 0; j < (availableResources.length - 8); j++) { // -8 because the rest is plants and stuff
            for (let k = 0; k < costForRecipe[i].length; k++) {
                iCostPerRecipe = costForRecipe[i];
                if (availableResources[j] == iCostPerRecipe[k].materialIndex) {
                    iCostForRecipeSorted.push(iCostPerRecipe[k].quantity);
                    continue middleLoop;
                }

            }
            iCostForRecipeSorted.push(0);
        }
        costForRecipeSorted.push(iCostForRecipeSorted);
    }
    // calculate recipe crafts per minute
    var craftsPerMinute = [];
    for (let i = 0; i < potentialRecipes.length; i++) {
        craftsPerMinute[i] = 60 / recipes[potentialRecipes[i].index].craftingTime_s;
    }
    // calculate cost per minute
    var resourceCostPerMinute = [];
    for (let i = 0; i < costForRecipeSorted.length; i++) {
        var iCostPerMinute = [];
        var iCostForRecipeSorted = costForRecipeSorted[i];
        for (let j = 0; j < iCostForRecipeSorted.length; j++) {
            iCostPerMinute[j] = iCostForRecipeSorted[j] * craftsPerMinute[i];
        }
        resourceCostPerMinute.push(iCostPerMinute);
    }
    // Resource names
    var resourceNames = []
    for (let i = 0; i < availableResources.length - 8; i++) { // -8 because the rest is plants and stuff
        resourceNames.push(materials[availableResources[i]].name);
    }
    // package the array arrays
    var rows = []
    //var row = ["Recipe ID", "Recipe Name", "Machine"];
    var row = ["Recipe Name"];
    row = row.concat(resourceNames);
    row = row.concat(["Output"]);
    rows.push(row);
    for (let i = 0; i < potentialRecipes.length; i++) {
        var iRecipeName = recipes[potentialRecipes[i].index].name;
        //var iMachineName = machines[recipes[potentialRecipes[i].index].machine].name;
        var iOutputQuantity = 0;
        for (let j = 0; j < recipes[potentialRecipes[i].index].output; j++) {
            if (recipes[potentialRecipes[i].index].output[j] == productIndex) {
                iOutputQuantity = recipes[potentialRecipes[i].index].outputQuantity[j];
            }
        }
        // temporyRecipeID, recipeName, machineUsed, inputResource1, ..., inputResourceN, output
        //var row = [i, iRecipeName, iMachineName];
        var row = [iRecipeName];
        row = row.concat(resourceCostPerMinute[i]);
        row = row.concat([iOutputQuantity]);
        rows.push(row);
    }
    console.log("CSV rows:");
    console.log(rows);
    // create .csv
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function (rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    // export .csv
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}