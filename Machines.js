// Refering to Update 8
function getMachineIndexbyName(nameToLookUp) {
    for (let i = 0; i < machines.length; i++) {
        if (machines[i].name == nameToLookUp) {
            return i;
        }
    }
    throw new Error('MachineName not found: ' + nameToLookUp);
}

const machines =
    [
        // Tier 0
        {
            name: "Smeltery",
            powerConsumption_mw: 4
        },
        {
            name: "Constructor",
            powerConsumption_mw: 4
        },
        {
            name: "Biomass Burner",
            powerConsumption_mw: 0
        },
        // Tier 2
        {
            name: "Assembler",
            powerConsumption_mw: 15
        },
        {
            name: "AWESOME Sink",
            powerConsumption_mw: 30
        },
        // Tier 3
        {
            name: "Foundry",
            powerConsumption_mw: 16
        },
        {
            name: "Coal Generator",
            powerConsumption_mw: 0
        },
        // Tier 5
        {
            name: "Manufacturer",
            powerConsumption_mw: 55
        },
        {
            name: "Refinery",
            powerConsumption_mw: 30
        },
        {
            name: "Packager",
            powerConsumption_mw: 10
        },
        // Tier 6
        {
            name: "Fuel Generator",
            powerConsumption_mw: 0
        },
        // Tier 7
        {
            name: "Blender",
            powerConsumption_mw: 75
        },
        // Tier 8
        {
            name: "Particle Accelerator (low-energy)",
            powerConsumption_mw: 500
        },
        {
            name: "Particle Accelerator (high-energy)",
            powerConsumption_mw: 1000
        },
        {
            name: "Nuclear Power Plant",
            powerConsumption_mw: 0//-2500
        },
        // Tier 9
        {
            name: "Converter",
            powerConsumption_mw: 300
        },
        {
            name: "Quantum Encoder",
            powerConsumption_mw: 2000
        }
    ]