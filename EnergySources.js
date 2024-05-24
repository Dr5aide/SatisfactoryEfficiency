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
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [180],
            input: [getMaterialIndexByName("Biomass")],
            inputQuantity: [1],
            machine: getMachineIndexbyName("Biomass Burner"),
            // energyOutput (180) / powerOutput (30)
            burnTime: 6
        },
        // Tier 2
        {
            name: "Biomass (Solid Biofuel)",
            tier: 2,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [450],
            input: [getMaterialIndexByName("Solid Biofuel")],
            inputQuantity: [1],
            machine: getMachineIndexbyName("Biomass Burner"),
            // energyOutput (450) / powerOutput (30)
            burnTime: 15
        },
        // Tier 3
        {
            name: "Coal (Coal)",
            tier: 3,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [300],
            input: [getMaterialIndexByName("Coal"), getMaterialIndexByName("Water")],
            inputQuantity: [1, 3],
            machine: getMachineIndexbyName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 4
        },
        {
            name: "Coal (Compacted Coal)",
            tier: 3,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [630],
            input: [getMaterialIndexByName("Compacted Coal"), getMaterialIndexByName("Water")],
            inputQuantity: [1, 6.3],
            machine: getMachineIndexbyName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 8.4
        },
        {
            name: "Coal (Petroleum Coke)",
            tier: 5,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [180],
            input: [getMaterialIndexByName("Petroleum Coke"), getMaterialIndexByName("Water")],
            inputQuantity: [1, 1.8],
            machine: getMachineIndexbyName("Coal Generator"),
            // energyOutput (300) / powerOutput (75)
            burnTime: 2.4
        },
        // Tier 6
        {
            name: "Fuel (Fuel)",
            tier: 6,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [750],
            input: [getMaterialIndexByName("Fuel")],
            inputQuantity: [1],
            machine: getMachineIndexbyName("Fuel Generator"),
            // energyOutput (750) / powerOutput (150)
            burnTime: 5
        },
        {
            name: "Fuel (Liquid Biofuel)",
            tier: 6,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [750],
            input: [getMaterialIndexByName("Liquid Biofuel")],
            inputQuantity: [1],
            machine: getMachineIndexbyName("Fuel Generator"),
            // energyOutput (750) / powerOutput (150)
            burnTime: 5
        },
        {
            name: "Fuel (Turbofuel)",
            tier: 6,
            output: [getMaterialIndexByName("MJ of Power")],
            outputQuantity: [2000],
            input: [getMaterialIndexByName("Turbofuel")],
            inputQuantity: [1],
            machine: getMachineIndexbyName("Fuel Generator"),
            // energyOutput (2000) / powerOutput (150)
            burnTime: 13.33333333
        },
        // Tier 8
        {
            name: "Nuclear (Uranium Fuel Rod)",
            tier: 8,
            output: [getMaterialIndexByName("MJ of Power"), getMaterialIndexByName("Uranium Waste")],
            outputQuantity: [750000, 50],
            input: [getMaterialIndexByName("Uranium Fuel Rod"), getMaterialIndexByName("Water")],
            inputQuantity: [1, 1200],
            machine: getMachineIndexbyName("Nuclear Power Plant"),
            // energyOutput (750000) / powerOutput (2500)
            burnTime: 300
        },
        {
            name: "Nuclear (Plutonium Fuel Rod)",
            tier: 8,
            output: [getMaterialIndexByName("MJ of Power"), getMaterialIndexByName("Plutonium Waste")],
            outputQuantity: [1500000, 10],
            input: [getMaterialIndexByName("Plutonium Fuel Rod"), getMaterialIndexByName("Water")],
            inputQuantity: [1, 2400],
            machine: getMachineIndexbyName("Nuclear Power Plant"),
            // energyOutput (1500000) / powerOutput (2500)
            burnTime: 600
        },
    ]