// Refering to Update 8
function getIDbyEnergySourceName(nameToLookUp) {
    for (let i = 0; i < energySources.length; i++) {
        if (energySources[i].name == nameToLookUp) {
            return i;
        }
    }
}

const energySources =
    [
        // Tier 3
        {
            name: "CoalPower",
            ownEnergyUsageFactor: 1.132,
            input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Water")],
            // Input per second / powerOutput * InefficiencyFactor (1.132 for coal):
            inputPerMegawattSecond: [0.00377, 0.01132]
        },
    ]