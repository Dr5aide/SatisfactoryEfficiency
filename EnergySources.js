// Refering to Update 8
function getIDbyEnergySourceName(nameToLookUp) {
    for (let i = 0; i < energySources.length; i++) {
        if (energySources[i].name == nameToLookUp) {
            return i;
        }
    }
}

function getAvailableEnergySourceIndeces() {
    var energySourceIndeces = [];
    for (let i = 0; i < energySources.length; i++) {
        if (energySources[i].tier <= unlockedTiers) {
            energySourceIndeces.push(i);
        }
    }
    return energySourceIndeces;
}
function getAvailableEnergySourceNames() {
    var energySourceNames = [];
    for (let i = 0; i < energySources.length; i++) {
        if (energySources[i].tier <= unlockedTiers) {
            energySourceNames.push(energySources[i].name);
        }
    }
    return energySourceNames;
}

const energySources =
    [
        // Tier 0
        {
            name: "Biomass (Biomass)",
            tier: 0,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [180],
            input: [getIDbyMaterialName("Biomass")],
            inputQuantity: [1],
            machine: getIDbyMachineName("Biomass Burner"),
            // energyOutput (180) / powerOutput (30)
            burnTime: 6
        },
        // Tier 2
        {
            name: "Biomass (Solid Biofuel)",
            tier: 2,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [450],
            input: [getIDbyMaterialName("Solid Biofuel")],
            inputQuantity: [1],
            machine: getIDbyMachineName("Biomass Burner"),
            // energyOutput (450) / powerOutput (30)
            burnTime: 15
        },
        // Tier 3
        {
            name: "Coal (Coal)",
            tier: 3,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [300],
            input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Water")],
            inputQuantity: [1, 3],
            machine: getIDbyMachineName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 4
        },
        {
            name: "Coal (Compacted Coal)",
            tier: 3,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [630],
            input: [getIDbyMaterialName("Compacted Coal"), getIDbyMaterialName("Water")],
            inputQuantity: [1, 6.3],
            machine: getIDbyMachineName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 8.4
        },
        {
            name: "Coal (Petroleum Coke)",
            tier: 5,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [180],
            input: [getIDbyMaterialName("Petroleum Coke"), getIDbyMaterialName("Water")],
            inputQuantity: [1, 1.8],
            machine: getIDbyMachineName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 2.4
        },
        // Tier 6
        {
            name: "Fuel (Fuel)",
            tier: 6,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [750],
            input: [getIDbyMaterialName("Fuel")],
            inputQuantity: [1],
            machine: getIDbyMachineName("Fuel Generator"),
            // energyOutput (750) / powerOutput (150)
            burnTime: 5
        },
        {
            name: "Fuel (Liquid Biofuel)",
            tier: 6,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [750],
            input: [getIDbyMaterialName("Liquid Biofuel")],
            inputQuantity: [1],
            machine: getIDbyMachineName("Fuel Generator"),
            // energyOutput (750) / powerOutput (150)
            burnTime: 5
        },
        {
            name: "Fuel (Turbofuel)",
            tier: 6,
            output: [getIDbyMaterialName("MJ of Power")],
            outputQuantity: [2000],
            input: [getIDbyMaterialName("Turbofuel")],
            inputQuantity: [1],
            machine: getIDbyMachineName("Fuel Generator"),
            // energyOutput (2000) / powerOutput (150)
            burnTime: 13.33333333
        },
        // Tier 8
        {
            name: "Nuclear (Uranium Fuel Rod)",
            tier: 8,
            output: [getIDbyMaterialName("MJ of Power"), getIDbyMaterialName("Uranium Waste")],
            outputQuantity: [750000, 50],
            input: [getIDbyMaterialName("Uranium Fuel Rod"), getIDbyMaterialName("Water")],
            inputQuantity: [1, 1200],
            machine: getIDbyMachineName("Nuclear Power Plant"),
            // energyOutput (750000) / powerOutput (2500)
            burnTime: 300
        },
        {
            name: "Nuclear (Plutonium Fuel Rod)",
            tier: 8,
            output: [getIDbyMaterialName("MJ of Power"), getIDbyMaterialName("Plutonium Waste")],
            outputQuantity: [1500000, 10],
            input: [getIDbyMaterialName("Plutonium Fuel Rod"), getIDbyMaterialName("Water")],
            inputQuantity: [1, 2400],
            machine: getIDbyMachineName("Nuclear Power Plant"),
            // energyOutput (1500000) / powerOutput (2500)
            burnTime: 600
        },
    ]