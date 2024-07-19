const resourceValueMultiplier = 1000;
//##
var unlockedTiers = 8;
//
var selectedEnergySourceIndex = 2;
var selectableEnergySourceIndeces = getAvailableEnergySourceIndeces();
var selectableEnergySourceNames = getAvailableEnergySourceNames();
//
var wantedMaterial;
var amountOfWantedMaterialPerMinute;
var selectableProducts = getAvailableProductsIndeces();
//
var resourceValues = getDefaultResourceValue();
var availableResources = getAvailableResourceIndeces();
var neededResourcesAmounts = [];
//
var selectedDefaultRecipeEfficiencyLevel = 1;
const selectableDefaultRecipeEfficiencies = [1, 2, 3];
//##
// ToDo
var upcyclingPolymerResin = false;
var upcyclingHeavyOilResidue = false;

function updateTierDependentVariables() {
    unlockedTiers = parseInt(document.getElementById("unlockedTiers").value);
    // since more crafting recipes may have been unlocked selectedEfficiencyIndexPerMaterial would be desynched
    selectedEfficiencyIndexPerMaterial = [];
    selectableProducts = getAvailableProductsIndeces();
    selectableEnergySourceIndeces = getAvailableEnergySourceIndeces();
    selectableEnergySourceNames = getAvailableEnergySourceNames();
    //
    loadSelectOptions();
    loadPreSets();
}

function updateVariablesFromInput() {
    console.log('Updating Input');
    selectedEnergySourceIndex = parseInt(document.getElementById("energySource").value);
    wantedMaterial = parseInt(document.getElementById("wantedMaterial").value);
    amountOfWantedMaterialPerMinute = parseInt(document.getElementById("wantedMaterialAmount").value);
    //
    var table = document.getElementById("resourceValueTable");
    for (let i = 0; i < availableResources.length; i++) {
        iResourceIndex = getMaterialIndexByName(table.rows[i].cells[0].innerHTML);
        iResourceValue = table.rows[i].cells[1].children[0].value;
        resourceValues[i] = {
            materialIndex: iResourceIndex,
            value: iResourceValue
        }
    }
    //
    fillCraftingTree();
}

var selectedEfficiencyIndexPerMaterial = [];
function getEfficiencyIndexPerMaterial(materialIndex) {
    for (let i = 0; i < selectedEfficiencyIndexPerMaterial.length; i++) {
        if (selectedEfficiencyIndexPerMaterial[i].materialIndex == materialIndex) {
            return selectedEfficiencyIndexPerMaterial[i].efficiencyIndex;
        }
    }
    return 0;
}
function updateSelectedEfficiencyIndexFor(materialIndex, selectElement) {
    var materialIndexAlreadyAdded = false;
    for (let i = 0; i < selectedEfficiencyIndexPerMaterial.length; i++) {
        if (selectedEfficiencyIndexPerMaterial[i].materialIndex == materialIndex) {
            selectedEfficiencyIndexPerMaterial[i].efficiencyIndex = parseInt(selectElement.value);
            materialIndexAlreadyAdded = true;
        }
    }
    //
    if (!materialIndexAlreadyAdded) {
        selectedEfficiencyIndexPerMaterial.push({
            materialIndex: materialIndex,
            efficiencyIndex: parseInt(selectElement.value)
        });
    }
    //
    fillCraftingTree()
}

function fillCraftingTree() {
    // clear cache
    highestRecipeCallStack = 0;
    recipeCacheForMaterial = [];
    neededResourcesAmounts = [];
    // clear out
    var table = document.getElementById("craftingTreeTable");
    table.innerHTML = '';
    // calculate once to fill cache
    calculateResourceCostPerMaterial(wantedMaterial, true, false);  // withPowerCalc <= true, add recipes to energy calc log, not material calc log <= false
    //
    let row = table.insertRow();
    for (let i = 0; i <= highestRecipeCallStack; i++) {
        let cell = row.insertCell(i);
    }
    //
    recipeStack = [];
    addMaterialToCraftingTreeColumn(0, wantedMaterial, amountOfWantedMaterialPerMinute)
    //
    fillNeededResourcesTable();
    //
    console.log('RecipeCache:');
    console.log(recipeCacheForMaterial);
}

function addMaterialToCraftingTreeColumn(columnIndex, materialIndexToCraft, amountPerMinute) {
    if (materials[materialIndexToCraft].isResource) {
        var resourceQuantityToAdd = [{
            name: materials[materialIndexToCraft].name,
            materialIndex: materialIndexToCraft,
            quantity: amountPerMinute
        }]
        neededResourcesAmounts = addCosts(neededResourcesAmounts, resourceQuantityToAdd);
        return;
    }
    //
    var table = document.getElementById("craftingTreeTable");
    if (!table.rows[0].cells[columnIndex]) {
        return;
    }
    //
    var offset = 0;
    for (let j = 1; j < table.rows.length; j++) {
        if (table.rows[j].cells[columnIndex].innerHTML) {
            offset = j + 2;
        }
    }
    //
    var recipeCacheObject = lookUpRecipeCacheObjectForMaterialNumber(materialIndexToCraft);
    var recipeIndexArray = recipeCacheObject.recipeIndeces;
    var recipeValueCostArray = recipeCacheObject.valueCost;
    var recipeIndex = recipeIndexArray[getEfficiencyIndexPerMaterial(materialIndexToCraft)];
    var recipe = recipes[recipeIndex];
    //
    var craftsPerMinute;
    for (let i = 0; i < recipe.output.length; i++) {
        if (recipe.output[i] == materialIndexToCraft) {
            craftsPerMinute = amountPerMinute / recipe.outputQuantity[i];
        }
    }
    //
    if (!table.rows[offset]) {
        for (let j = 0; j < 3; j++) {
            let row = table.insertRow();
            for (let k = 0; k <= highestRecipeCallStack; k++) {
                row.insertCell(k);
            }
        }
    }
    // Title
    var titleCell = table.rows[offset].cells[columnIndex];
    //
    var selectElement = document.createElement("select");
    selectElement.type = "number";
    selectElement.class = "form-control";
    //
    titleCell.appendChild(selectElement);
    // populate new options
    for (let i = 0; i < recipeIndexArray.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        var valueCost = Math.round(recipeValueCostArray[i] * 100) / 100;
        var relativeValueEfficiency = Math.round(recipeValueCostArray[0] / recipeValueCostArray[i] * 1000) / 10;
        option.text = recipes[recipeIndexArray[i]].name + " (" + valueCost + " | " + relativeValueEfficiency + "%)";
        // then append it to the select element
        selectElement.appendChild(option);
    }
    //
    selectElement.value = getEfficiencyIndexPerMaterial(materialIndexToCraft);
    selectElement.onchange = function () { updateSelectedEfficiencyIndexFor(materialIndexToCraft, selectElement); };
    //
    // Output
    var detailsAboutCraftingStep = '<b>Output</b>: ';
    for (let j = 0; j < recipe.output.length; j++) {
        var outputAmount = Math.round(recipe.outputQuantity[j] * craftsPerMinute * 100) / 100;
        detailsAboutCraftingStep = detailsAboutCraftingStep + outputAmount + '/min ' + materials[recipe.output[j]].name + ', ';
    }
    detailsAboutCraftingStep = detailsAboutCraftingStep + '\n';
    // Input
    ///////////////
    // check for circular reference
    var circularReferenceDetected = false;
    var outputToRemoveCircularReference = [];
    var inputToRemoveCircularReference = [];
    var recipeStack = craftingRecipeStack;
    if (!(recipeStack[currentRecipeCallStackSize] === undefined || recipeStack[currentRecipeCallStackSize - 1] === undefined)) {
        var materialInRecipeStack = false;
        for (let i = 0; i < recipes[recipeStack[currentRecipeCallStackSize - 1].recipeIndex].output.length; i++) {
            if (recipes[recipeStack[currentRecipeCallStackSize - 1].recipeIndex].output[i] == materialIndexToCraft) {
                materialInRecipeStack = true;
            }
        }
        if (recipeStack[currentRecipeCallStackSize].recipeCallStackSize > recipeStack[currentRecipeCallStackSize - 1].recipeCallStackSize && materialInRecipeStack) {
            outputToRemoveCircularReference = lookUpInputOverlapForCostArray(recipeStack[currentRecipeCallStackSize - 1].recipeIndex, {
                materialIndex: recipes[recipeStack[currentRecipeCallStackSize].recipeIndex].input,
                quantity: recipes[recipeStack[currentRecipeCallStackSize].recipeIndex].inputQuantity
            });
            inputToRemoveCircularReference = lookUpOutputOverlapForCostArray(recipeStack[currentRecipeCallStackSize - 1].recipeIndex, {
                materialIndex: recipes[recipeStack[currentRecipeCallStackSize].recipeIndex].output,
                quantity: recipes[recipeStack[currentRecipeCallStackSize].recipeIndex].outputQuantity
            });
            if (outputToRemoveCircularReference.length > 0 && inputToRemoveCircularReference.length > 0) {
                circularReferenceDetected = true;
            }
        }
    }
    //Fallback if check for circular reference breaks apart
    if (inputToRemoveCircularReference.length == 0) {
        outputToRemoveCircularReference = [];
    }
    //
    var costPerRecipe = calculateCostPerRecipe(recipeIndex, inputToRemoveCircularReference);
    //
    addRecipeIndexToRecipeStack(recipeIndex, false); //addToEnergyRecipeStack <= false
    ///////////////
    detailsAboutCraftingStep = detailsAboutCraftingStep + '<b>Input</b>: ';
    for (let j = 0; j < costPerRecipe.length; j++) {
        var jAmountPerMinute = Math.round(costPerRecipe[j].quantity * craftsPerMinute * 100) / 100;
        detailsAboutCraftingStep = detailsAboutCraftingStep + jAmountPerMinute + '/min ' + materials[costPerRecipe[j].materialIndex].name + ', ';
        /*if (materials[costPerRecipe[j].materialIndex].isResource) {
            continue;
        }*/
        // increment currentRecipeCallStackSize
        currentRecipeCallStackSize++;
        addMaterialToCraftingTreeColumn(columnIndex + 1, costPerRecipe[j].materialIndex, jAmountPerMinute);
        // decrement currentRecipeCallStackSize
        currentRecipeCallStackSize--;
    }
    detailsAboutCraftingStep = detailsAboutCraftingStep + '\n';
    // Machines
    var numberOfMachines = Math.round(craftsPerMinute / (60 / recipe.craftingTime_s) * 100) / 100;
    detailsAboutCraftingStep = detailsAboutCraftingStep + '<b>Machines</b>: ';
    detailsAboutCraftingStep = detailsAboutCraftingStep + numberOfMachines + 'x ' + machines[recipe.machine].name;
    detailsAboutCraftingStep = detailsAboutCraftingStep + '\n';
    // Power
    var power_mw = Math.round(numberOfMachines * machines[recipe.machine].powerConsumption_mw * 100) / 100;
    detailsAboutCraftingStep = detailsAboutCraftingStep + '<b>Power</b>: ';
    detailsAboutCraftingStep = detailsAboutCraftingStep + power_mw + 'MW ';
    detailsAboutCraftingStep = detailsAboutCraftingStep + '\n';
    //
    let row;
    if (!table.rows[offset + 1]) {
        row = table.insertRow();
        for (let k = 0; k <= highestRecipeCallStack; k++) {
            row.insertCell(k);
        }
    }
    table.rows[offset + 1].cells[columnIndex].innerHTML = detailsAboutCraftingStep;
}

function instantiateElements() {
    loadSelectOptions();
    loadPreSets();
    loadResourceValueTable();
    instantiateNeededResourcesTable();
}

function loadSelectOptions() {
    // Materials
    //remove old options
    var selectElement = document.getElementById('wantedMaterial');
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
    // populate new options
    for (let i = 0; i < selectableProducts.length; i++) {
        var option = document.createElement("option");
        option.value = selectableProducts[i];
        option.text = materials[selectableProducts[i]].name;
        // then append it to the select element
        selectElement.appendChild(option);
    }
    // Energy Sources
    // remove old options 
    var selectElement = document.getElementById('energySource');
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
    //
    for (let i = 0; i < selectableEnergySourceIndeces.length; i++) {
        var option = document.createElement("option");
        option.value = selectableEnergySourceIndeces[i];
        option.text = selectableEnergySourceNames[i];
        // then append it to the select element
        selectElement.appendChild(option);
    }
}

function loadPreSets() {
    if (unlockedTiers > 2) {
        var selectElement = document.getElementById('energySource');
        selectElement.value = "2";
    }
    for (let i = 0; i < selectableProducts.length; i++) {
        if (selectableProducts[i] == wantedMaterial) {
            var wantedMaterialSelect = document.getElementById('wantedMaterial');
            wantedMaterialSelect.value = wantedMaterial;
        }
    }
}

function loadResourceValueTable() {
    var table = document.getElementById("resourceValueTable");
    table.innerHTML = ""; //clear the table
    for (let i = 0; i < availableResources.length; i++) {
        let row = table.insertRow();

        let resource = row.insertCell(0);
        resource.innerHTML = materials[availableResources[i]].name;
        resource.contentEditable = false;

        let valueCell = row.insertCell(1);
        var input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "100000000";
        input.step = "any";
        input.style = "width: 84px"
        input.value = Math.round(resourceValues[i].value * 100) / 100;
        valueCell.appendChild(input);
    }
}

function getDefaultResourceValue() {
    var resourceValueArray = [];
    var availableResources = getAvailableResourceIndeces();
    for (let i = 0; i < availableResources.length; i++) {
        index = availableResources[i];
        iValue = resourceValueMultiplier * materials[index].relativeNeed / materials[index].relativeNodeAmount;
        resourceValueArray.push(
            {
                name: materials[index].name,
                materialIndex: index,
                value: iValue
            }
        );
    }
    return resourceValueArray;
}

function getResourceValueForResourceIndex(wantedMaterialIndex) {
    for (let i = 0; i < resourceValues.length; i++) {
        if (resourceValues[i].materialIndex == wantedMaterialIndex) {
            return resourceValues[i].value;
        }
    }
    //Fallback
    return 0;
}

function instantiateNeededResourcesTable() {
    var table = document.getElementById("neededResourcesTable");
    table.innerHTML = "";
    for (let i = 0; i < availableResources.length; i++) {
        let row = table.insertRow();
        let resourceName = row.insertCell(0);
        resourceName.innerHTML = materials[availableResources[i]].name;
        resourceName.contentEditable = false;
        let amount = row.insertCell(1);
        amount.innerHTML = 0;
        amount.contentEditable = false;
    }
}

function fillNeededResourcesTable() {
    instantiateNeededResourcesTable();
    //
    var table = document.getElementById("neededResourcesTable");
    for (let i = 0; i < neededResourcesAmounts.length; i++) {
        for (let j = 0; j < availableResources.length; j++) {
            if (neededResourcesAmounts[i].materialIndex == availableResources[j]) {
                let amountCell = table.rows[j].cells[1];
                amountCell.innerHTML = (Math.round(neededResourcesAmounts[i].quantity * 100) / 100) + "/min";
            }
        }
    }
}