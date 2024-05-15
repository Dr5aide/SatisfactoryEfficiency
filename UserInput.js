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
var selectableMaterials = getAvailableMaterialsIndeces();
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
    unlockedTiers = document.getElementById("unlockedTiers").value;
    selectedEnergySourceIndex = document.getElementById("energySource").value;
    wantedMaterial = document.getElementById("wantedMaterial").value;
    amountOfWantedMaterialPerMinute = document.getElementById("wantedMaterialAmount").value;
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
    for (let i = 0; i < selectableMaterials.length; i++) {
        var option = document.createElement("option");
        option.value = selectableMaterials[i];
        option.text = materials[selectableMaterials[i]].name;
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
    console.log('Instantiating resource value');
    table.innerHTML = ""; //clear the table

    var i = 0;

    for (let i = 0; i < availableResources.length; i++) {
        let row = table.insertRow();

        let resource = row.insertCell(0);
        resource.innerHTML = materials[availableResources[i]].name;
        resource.contentEditable = false;

        let value = row.insertCell(1);
        value.innerHTML = resourceValues[i].value;
        value.contentEditable = true;
        value.setAttribute("onfocusout", "updateRow(" + i + ");");
        value.setAttribute("onKeyPress", "onEnter(event," + i + ")");
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