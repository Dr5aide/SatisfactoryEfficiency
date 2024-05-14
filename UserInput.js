const resourceValueMultiplier = 1000;
//##
var unlockedTiers = 8;
const selectableUnlockedTiers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//
var selectedEnergySourceIndex = 2;
var selectableEnergySourceIndeces = getSelectableEnergySourceIndeces();
//
var resourceValues = getDefaultResourceValue();
//
var selectedDefaultRecipeEfficiency = 1;
const selectableDefaultRecipeEfficiencies = [1, 2, 3];
//##
// ToDo
var upcyclingPolymerResin = false;
var upcyclingHeavyOilResidue = false;


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

function getDefaultResourceValue() {
    var resourceValueArray = [];
    for (let i = 0; i < materials.length; i++) {
        if (materials[i].isResource) {
            iValue = resourceValueMultiplier * materials[i].relativeNeed / materials[i].relativeNodeAmount;
            resourceValueArray.push(
                {
                    name: materials[i].name,
                    materialIndex: i,
                    value: iValue
                }
            );
        }
    }
    return resourceValueArray;
}

function getResourceValueForResourceIndex(wantedMaterialIndex) {
    for (let i = 0; i < resourceValues.length; i++) {
        if (resourceValues[i].materialIndex == wantedMaterialIndex) {
            return resourceValues[i].value;
        }
    }
}