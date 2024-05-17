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
//
var selectedDefaultRecipeEfficiency = 1;
const selectableDefaultRecipeEfficiencies = [1, 2, 3];
//##
// ToDo
var upcyclingPolymerResin = false;
var upcyclingHeavyOilResidue = false;

function updateVariablesFromInput() {
    console.log('Updating Input');
    unlockedTiers = parseInt(document.getElementById("unlockedTiers").value);
    selectedEnergySourceIndex = parseInt(document.getElementById("energySource").value);
    wantedMaterial = parseInt(document.getElementById("wantedMaterial").value);
    amountOfWantedMaterialPerMinute = parseInt(document.getElementById("wantedMaterialAmount").value);
    //
    var table = document.getElementById("resourceValueTable");
    for (let i = 0; i < availableResources.length; i++) {
        iResourceIndex = getIDbyMaterialName(table.rows[i].cells[0].innerHTML);
        iResourceValue = parseInt(table.rows[i].cells[1].innerHTML);
        resourceValues[i] = {
            materialIndex: iResourceIndex,
            value: iResourceValue
        }
    }
    //
    fillCraftingTree();
}

function fillCraftingTree() {
    // clear cache
    highestRecipeCallStack = 0;
    recipeCacheForMaterial = [];
    // clear out
    var table = document.getElementById("craftingTreeTable");
    table.innerHTML = '';
    // calculate once to fill cache
    calculateResourceCostPerMaterial(wantedMaterial, true);
    //
    let row = table.insertRow();
    for (let i = 0; i <= highestRecipeCallStack; i++) {
        let cell = row.insertCell(i);
    }
    //
    recipeLog = [];
    fillCraftingTreeColumn(highestRecipeCallStack, wantedMaterial, amountOfWantedMaterialPerMinute)
}

function fillCraftingTreeColumn(columnIndex, materialIndexToCraft, amountPerMinute) {
    if (materials[materialIndexToCraft].isResource) {
        return;
    }
    //
    var table = document.getElementById("craftingTreeTable");
    var offset = 0;
    for (let j = 1; j < table.rows.length; j++) {
        if (table.rows[j].cells[columnIndex].innerHTML) {
            offset = j + 2;
        }
    }
    //
    var recipeIndex = lookUpCachedRecipeForMaterialNumber(materialIndexToCraft, selectedDefaultRecipeEfficiency);
    var recipe = recipes[recipeIndex];
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
    //
    table.rows[offset].cells[columnIndex].innerHTML = '<b>' + recipe.name + '</b>';
    // Output
    var detailsAboutCraftingStep = '<b>Output</b>: ';
    for (let j = 0; j < recipe.output.length; j++) {
        detailsAboutCraftingStep = detailsAboutCraftingStep + (recipe.outputQuantity[j] * craftsPerMinute) + '/min ' + materials[recipe.output[j]].name + ', ';
    }
    detailsAboutCraftingStep = detailsAboutCraftingStep + '\n';
    // Input
    ///////////////
    // check for circular reference
    var circularReferenceDetected = false;
    var outputToRemoveCircularReference = [];
    var inputToRemoveCircularReference = [];
    if (!(recipeLog[0] === undefined || recipeLog[1] === undefined || recipeLog[2] === undefined || recipeLog[3] === undefined)) {
        // RecipeLog is only updated in getRecipeIndexFor()
        var materialInRecipeLog = false;
        for (let i = 0; i < recipes[recipeLog[1].recipeIndex].output.length; i++) {
            if (recipes[recipeLog[1].recipeIndex].output[i] == materialIndexToCraft) {
                materialInRecipeLog = true;
            }
        }
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
    //
    var costPerRecipe = calculateCostPerRecipe(recipeIndex, false, inputToRemoveCircularReference);
    //
    addRecipeIndexToRecipeLog(recipeIndex);
    ///////////////
    detailsAboutCraftingStep = detailsAboutCraftingStep + '<b>Input</b>: ';
    for (let j = 0; j < costPerRecipe.length; j++) {
        var jAmountPerMinute = Math.round(costPerRecipe[j].quantity * craftsPerMinute * 100) / 100;
        detailsAboutCraftingStep = detailsAboutCraftingStep + jAmountPerMinute + '/min ' + materials[costPerRecipe[j].materialIndex].name + ', ';
        if (materials[costPerRecipe[j].materialIndex].isResource) {
            continue;
        }
        // increment currentRecipeCallStackSize
        currentRecipeCallStackSize++;
        fillCraftingTreeColumn(columnIndex - 1, costPerRecipe[j].materialIndex, jAmountPerMinute);
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
    loadResourceValueTable();
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

function loadResourceValueTable() {
    var table = document.getElementById("resourceValueTable");
    table.innerHTML = ""; //clear the table
    for (let i = 0; i < availableResources.length; i++) {
        let row = table.insertRow();

        let resource = row.insertCell(0);
        resource.innerHTML = materials[availableResources[i]].name;
        resource.contentEditable = false;

        let value = row.insertCell(1);
        value.innerHTML = resourceValues[i].value;
        value.contentEditable = true;
        //value.setAttribute("onfocusout", "updateVariablesFromInput();");
        //value.setAttribute("onKeyPress", "updateVariablesFromInput();");
    }
}
///////////////
function onEnter(event, i) {
    var code = 0;
    code = event.keyCode;
    if (code == 13) {

    }
}

function updateReadOnlyFields() //set the values of the read only input fields
{
    document.getElementById("calculatedNominellAirFlowPerBird").value = getCalculatedNominellAirFlowPerBird();
}

function showCurrentAdvancedSettings() //fill the advanced Settings html fields with the js object values
{
    if (dynamicInput.birdSpecies == "Broiler") {
        document.getElementById("birdSpecies").value = 1;
    }
    if (dynamicInput.birdSpecies == "Turkey") {
        document.getElementById("birdSpecies").value = 2;
    }
    document.getElementById("feedFactor").value = dynamicInput.feedFactor;
}

function saveAdvancedSettings() //write the adavanced Settings html fields into the js object
{
    if (document.getElementById("birdSpecies").value == 1) {
        dynamicInput.birdSpecies = "Broiler";
    }
    if (document.getElementById("birdSpecies").value == 2) {
        dynamicInput.birdSpecies == "Turkey";
    }
    dynamicInput.feedFactor = document.getElementById("feedFactor").value;
}
////////////////////////////////////

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