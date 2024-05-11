// Refering to Update 8
function getIDbyMachineName(nameToLookUp) {
    for (let i = 0; i < machines.length; i++) {
        if (machines[i].name == nameToLookUp) {
            return i;
        }
    }
    throw new Error('MachineName not found: ' + nameToLookUp);
}

const machines =
    [
        // Tier 1
        {
            name: "Smeltery",
            powerConsumption_mw: 4
        },
        {
            name: "Constructor",
            powerConsumption_mw: 4
        },
        {
            name: "Foundry",
            powerConsumption_mw: 16
        },
        // Tier 2
        {
            name: "Assembler",
            powerConsumption_mw: 15
        },
        // Tier 3
        {
            name: "Refinery",
            powerConsumption_mw: 30
        },
        // Tier 5
        {
            name: "Manufacturer",
            powerConsumption_mw: 55
        },
        {
            name: "Packager",
            powerConsumption_mw: 10
        },
        // Tier 7
        {
            name: "Blender",
            powerConsumption_mw: 75
        },
        // Tier 8
        {
            name: "Particle Accelerator (Plutonium Pellet)",
            powerConsumption_mw: 500
        },
        {
            name: "Particle Accelerator (Nuclear Pasta)",
            powerConsumption_mw: 1000
        }
    ]