var energySourceIndex = 0;
var unlockedTiers = 8;
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