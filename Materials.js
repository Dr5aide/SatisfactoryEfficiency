// Refering to Update 8
function getIDbyMaterialName(nameToLookUp) {
    for (let i = 0; i < materials.length; i++) {
        if (materials[i].name === nameToLookUp) {
            return i;
        }
    }
    throw new Error('MaterialName not found: ' + nameToLookUp);
}

function getAvailableMaterialsIndeces() {
    var availableMaterialIndeces = [];
    for (let i = 1; i < materials.length; i++) {
        if (materials[i].tier <= unlockedTiers) {
            availableMaterialIndeces.push(i);
        }
    }
    return availableMaterialIndeces;
}

function getAvailableResourceIndeces() {
    var availableResourceIndeces = [];
    for (let i = 1; i < materials.length; i++) {
        if (materials[i].tier <= unlockedTiers && materials[i].isResource) {
            availableResourceIndeces.push(i);
        }
    }
    return availableResourceIndeces;
}

const materials =
    [
        // Just for additional information
        {
            name: "MJ of Power",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 0
        },
        // Ores
        {
            name: "Limestone",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 12 Normal: 47 Pure: 27
            relativeNodeAmount: 107,
            // based on https://www.reddit.com/r/SatisfactoryGame/comments/poc898/alternate_recipes_indepth_analysis_an_objective/
            relativeNeed: 0.3
        },
        {
            name: "Iron Ore",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 33 Normal: 41 Pure: 46
            relativeNodeAmount: 149.5,
            relativeNeed: 1
        },
        {
            name: "Copper Ore",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 9 Normal: 28 Pure: 12
            relativeNodeAmount: 56.5,
            relativeNeed: 1
        },
        {
            name: "Caterium Ore",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 8 Pure: 8
            relativeNodeAmount: 24,
            relativeNeed: 0.2
        },
        {
            name: "Coal",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 6 Normal: 29 Pure: 15
            relativeNodeAmount: 62,
            relativeNeed: 0.5
        },
        {
            name: "Raw Quartz",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 11 Pure: 5
            relativeNodeAmount: 21,
            relativeNeed: 0.08
        },
        {
            name: "Sulfur",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 7 Pure: 3
            relativeNodeAmount: 14.5,
            relativeNeed: 0.04
        },
        {
            name: "Bauxite",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 5 Normal: 6 Pure: 6
            relativeNodeAmount: 20.5,
            relativeNeed: 0.15
        },
        {
            name: "S.A.M. Ore",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 8 Normal: 5 Pure: 0
            relativeNodeAmount: 9,
            relativeNeed: 0
        },
        {
            name: "Uranium",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 3 Pure: 0
            relativeNodeAmount: 3.5,
            relativeNeed: 0.03
        },
        // Ingots
        {
            name: "Iron Ingot",
            tier: 0,
            isResource: false
        },
        {
            name: "Copper Ingot",
            tier: 0,
            isResource: false
        },
        {
            name: "Caterium Ingot",
            tier: 0,
            isResource: false
        },
        {
            name: "Steel Ingot",
            tier: 3,
            isResource: false
        },
        {
            name: "Aluminum Ingot",
            tier: 7,
            isResource: false
        },
        // Minerals
        {
            name: "Concrete",
            tier: 0,
            isResource: false
        },
        {
            name: "Quartz Crystal",
            tier: 0,
            isResource: false
        },
        {
            name: "Silica",
            tier: 0,
            isResource: false
        },
        {
            name: "Copper Powder",
            tier: 8,
            isResource: false
        },
        {
            name: "Polymer Resin",
            tier: 5,
            isResource: false
        },
        {
            name: "Petroleum Coke",
            tier: 5,
            isResource: false
        },
        {
            name: "Aluminum Scrap",
            tier: 7,
            isResource: false
        },
        {
            name: "Compacted Coal",
            tier: 0,
            isResource: false
        },
        // Fluids
        {
            name: "Water",
            tier: 3,
            isResource: true,
            megawattSecondToExtract: 10,
            //Dummy
            relativeNodeAmount: 10000,
            relativeNeed: 1
        },
        {
            name: "Crude Oil",
            tier: 5,
            isResource: true,
            megawattSecondToExtract: 20,
            //Impure: 10 Normal: 12 Pure: 8
            relativeNodeAmount: 33,
            relativeNeed: 0.5
        },
        {
            name: "Heavy Oil Residue",
            tier: 5,
            isResource: false
        },
        {
            name: "Fuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Liquid Biofuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Turbofuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Alumina Solution",
            tier: 7,
            isResource: false
        },
        {
            name: "Sulfuric Acid",
            tier: 7,
            isResource: false
        },
        {
            name: "Heavy Oil Residue",
            tier: 5,
            isResource: false
        },
        {
            name: "Nitric Acid",
            tier: 8,
            isResource: false
        },
        // Gases
        {
            name: "Nitrogen Gas",
            tier: 8,
            isResource: true,
            // megawatt (150) / output (1)
            megawattSecondToExtract: 150,
            //Impure: 2 Normal: 7 Pure: 36
            relativeNodeAmount: 80,
            relativeNeed: 0.15
        },
        // Standard Parts
        {
            name: "Iron Rod",
            tier: 0,
            isResource: false
        },
        {
            name: "Screw",
            tier: 0,
            isResource: false
        },
        {
            name: "Iron Plate",
            tier: 0,
            isResource: false
        },
        {
            name: "Reinforced Iron Plate",
            tier: 0,
            isResource: false
        },
        {
            name: "Copper Sheet",
            tier: 2,
            isResource: false
        },
        {
            name: "Alclad Aluminum Sheet",
            tier: 7,
            isResource: false
        },
        {
            name: "Aluminum Casing",
            tier: 7,
            isResource: false
        },
        {
            name: "Steel Pipe",
            tier: 3,
            isResource: false
        },
        {
            name: "Steel Beam",
            tier: 3,
            isResource: false
        },
        {
            name: "Encased Industrial Beam",
            tier: 4,
            isResource: false
        },
        {
            name: "Modular Frame",
            tier: 2,
            isResource: false
        },
        {
            name: "Heavy Modular Frame",
            tier: 4,
            isResource: false
        },
        {
            name: "Fused Modular Frame",
            tier: 8,
            isResource: false
        },
        {
            name: "Fabric",
            tier: 0,
            isResource: false
        },
        {
            name: "Plastic",
            tier: 5,
            isResource: false
        },
        {
            name: "Rubber",
            tier: 5,
            isResource: false
        },
        // Industrial Parts
        {
            name: "Rotor",
            tier: 2,
            isResource: false
        },
        {
            name: "Stator",
            tier: 4,
            isResource: false
        },
        {
            name: "Battery",
            tier: 7,
            isResource: false
        },
        {
            name: "Motor",
            tier: 4,
            isResource: false
        },
        {
            name: "Heat Sink",
            tier: 8,
            isResource: false
        },
        {
            name: "Cooling System",
            tier: 8,
            isResource: false
        },
        {
            name: "Turbo Motor",
            tier: 8,
            isResource: false
        },
        //Electronics
        {
            name: "Wire",
            tier: 0,
            isResource: false
        },
        {
            name: "Cable",
            tier: 0,
            isResource: false
        },
        {
            name: "Quickwire",
            tier: 0,
            isResource: false
        },
        {
            name: "Circuit Board",
            tier: 5,
            isResource: false
        },
        {
            name: "AI Limiter",
            tier: 7,
            isResource: false
        },
        {
            name: "High-Speed Connector",
            tier: 7,
            isResource: false
        },
        // Communications
        {
            name: "Computer",
            tier: 5,
            isResource: false
        },
        {
            name: "Supercomputer",
            tier: 7,
            isResource: false
        },
        {
            name: "Quantum Computer",
            tier: 9,
            isResource: false
        },
        {
            name: "Radio Control Unit",
            tier: 7,
            isResource: false
        },
        {
            name: "Crystal Oscillator",
            tier: 0,
            isResource: false
        },
        {
            name: "Superposition Oscillator",
            tier: 9,
            isResource: false
        },
        // Containers
        {
            name: "Empty Canister",
            tier: 5,
            isResource: false
        },
        {
            name: "Empty Fluid Tank",
            tier: 8,
            isResource: false
        },
        {
            name: "Pressure Conversion Cube",
            tier: 8,
            isResource: false
        },
        {
            name: "Packaged Water",
            tier: 5,
            isResource: false
        },
        {
            name: "Packaged Alumina Solution",
            tier: 7,
            isResource: false
        },
        {
            name: "Packaged Sulfuric Acid",
            tier: 7,
            isResource: false
        },
        {
            name: "Packaged Nitric Acid",
            tier: 8,
            isResource: false
        },
        {
            name: "Packaged Nitrogen Gas",
            tier: 8,
            isResource: false
        },
        //Fuels
        {
            name: "Leaves",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Mycelia",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Flower Petals",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Wood",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Biomass",
            tier: 0,
            isResource: false
        },
        {
            name: "Compacted Coal",
            tier: 0,
            isResource: false
        },
        {
            name: "Packaged Oil",
            tier: 5,
            isResource: false
        },
        {
            name: "Packaged Heavy Oil Residue",
            tier: 5,
            isResource: false
        },
        {
            name: "Solid Biofuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Packaged Fuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Packaged Liquid Biofuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Packaged Turbofuel",
            tier: 5,
            isResource: false
        },
        {
            name: "Uranium Fuel Rod",
            tier: 8,
            isResource: false
        },
        {
            name: "Plutonium Fuel Rod",
            tier: 8,
            isResource: false
        },
        // Consumed
        {
            name: "Black Powder",
            tier: 0,
            isResource: false
        },
        {
            name: "Smokeless Powder",
            tier: 5,
            isResource: false
        },
        {
            name: "Gas Filter",
            tier: 7,
            isResource: false
        },
        {
            name: "Color Cartridge",
            tier: 2,
            isResource: false
        },
        {
            name: "Beacon",
            tier: 1,
            isResource: false
        },
        {
            name: "Iodine Infused Filter",
            tier: 7,
            isResource: false
        },
        // Ammos
        {
            name: "Iron Rebar",
            tier: 0,
            isResource: false
        },
        {
            name: "Stun Rebar",
            tier: 2,
            isResource: false
        },
        {
            name: "Shatter Rebar",
            tier: 2,
            isResource: false
        },
        {
            name: "Explosive Rebar",
            tier: 5,
            isResource: false
        },
        {
            name: "Rifle Ammo",
            tier: 5,
            isResource: false
        },
        {
            name: "Homing Rifle Ammo",
            tier: 5,
            isResource: false
        },
        {
            name: "Turbo Rifle Ammo",
            tier: 5,
            isResource: false
        },
        {
            name: "Nobelisk",
            tier: 3,
            isResource: false
        },
        {
            name: "Gas Nobelisk",
            tier: 3,
            isResource: false
        },
        {
            name: "Pulse Nobelisk",
            tier: 5,
            isResource: false
        },
        {
            name: "Cluster Nobelisk",
            tier: 5,
            isResource: false
        },
        {
            name: "Nuke Nobelisk",
            tier: 8,
            isResource: false
        },
        // Nuclear
        {
            name: "Electromagnetic Control Rod",
            tier: 8,
            isResource: false
        },
        {
            name: "Encased Uranium Cell",
            tier: 8,
            isResource: false
        },
        {
            name: "Non-fissile Uranium",
            tier: 8,
            isResource: false
        },
        {
            name: "Plutonium Pellet",
            tier: 8,
            isResource: false
        },
        {
            name: "Encased Plutonium Cell",
            tier: 8,
            isResource: false
        },
        // Waste
        {
            name: "Uranium Waste",
            tier: 8,
            isResource: false
        },
        {
            name: "Plutonium Waste",
            tier: 8,
            isResource: false
        },
        // Special
        {
            name: "Blue Power Slug",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Yellow Power Slug",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.5,
            relativeNeed: 1
        },
        {
            name: "Purple Power Slug",
            tier: 0,
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.2,
            relativeNeed: 1
        },
        {
            name: "Power Shard",
            tier: 0,
            isResource: false
        },
        {
            name: "FICSIT Coupon",
            tier: 2,
            isResource: false
        },
        {
            name: "Smart Plating",
            tier: 2,
            isResource: false
        },
        {
            name: "Versatile Framework",
            tier: 3,
            isResource: false
        },
        {
            name: "Automated Wiring",
            tier: 4,
            isResource: false
        },
        {
            name: "Modular Engine",
            tier: 5,
            isResource: false
        },
        {
            name: "Adaptive Control Unit",
            tier: 5,
            isResource: false
        },
        {
            name: "Assembly Director System",
            tier: 7,
            isResource: false
        },
        {
            name: "Magnetic Field Generator",
            tier: 8,
            isResource: false
        },
        {
            name: "Thermal Propulsion Rocket",
            tier: 8,
            isResource: false
        },
        {
            name: "Nuclear Pasta",
            tier: 8,
            isResource: false
        }
    ]