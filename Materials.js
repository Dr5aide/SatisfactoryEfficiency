// Refering to Update 8
function getIDbyMaterialName(nameToLookUp) {
    for (let i = 0; i < materials.length; i++) {
        if (materials[i].name == nameToLookUp) {
            return i;
        }
    }
    throw new Error('MaterialName not found: ' + nameToLookUp);
}
const materials =
    [
        // Just for additional information
        {
            name: "MJ of Power",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 0
        },
        // Ores
        {
            name: "Limestone",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 12 Normal: 47 Pure: 27
            relativeNodeAmount: 107,
            // based on https://www.reddit.com/r/SatisfactoryGame/comments/poc898/alternate_recipes_indepth_analysis_an_objective/
            relativeNeed: 0.3
        },
        {
            name: "Iron Ore",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 33 Normal: 41 Pure: 46
            relativeNodeAmount: 149.5,
            relativeNeed: 1
        },
        {
            name: "Copper Ore",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 9 Normal: 28 Pure: 12
            relativeNodeAmount: 56.5,
            relativeNeed: 1
        },
        {
            name: "Caterium Ore",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 8 Pure: 8
            relativeNodeAmount: 24,
            relativeNeed: 0.2
        },
        {
            name: "Coal",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 6 Normal: 29 Pure: 15
            relativeNodeAmount: 62,
            relativeNeed: 0.5
        },
        {
            name: "Raw Quartz",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 11 Pure: 5
            relativeNodeAmount: 21,
            relativeNeed: 0.08
        },
        {
            name: "Sulfur",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 7 Pure: 3
            relativeNodeAmount: 14.5,
            relativeNeed: 0.04
        },
        {
            name: "Bauxite",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 5 Normal: 6 Pure: 6
            relativeNodeAmount: 20.5,
            relativeNeed: 0.15
        },
        {
            name: "S.A.M. Ore",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 8 Normal: 5 Pure: 0
            relativeNodeAmount: 9,
            relativeNeed: 0.01
        },
        {
            name: "Uranium",
            isResource: true,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 3 Pure: 0
            relativeNodeAmount: 3.5,
            relativeNeed: 0.03
        },
        // Ingots
        {
            name: "Iron Ingot",
            isResource: false
        },
        {
            name: "Copper Ingot",
            isResource: false
        },
        {
            name: "Caterium Ingot",
            isResource: false
        },
        {
            name: "Steel Ingot",
            isResource: false
        },
        {
            name: "Aluminum Ingot",
            isResource: false
        },
        // Minerals
        {
            name: "Concrete",
            isResource: false
        },
        {
            name: "Quartz Crystal",
            isResource: false
        },
        {
            name: "Silica",
            isResource: false
        },
        {
            name: "Copper Powder",
            isResource: false
        },
        {
            name: "Polymer Resin",
            isResource: false
        },
        {
            name: "Petroleum Coke",
            isResource: false
        },
        {
            name: "Aluminum Scrap",
            isResource: false
        },
        //
        {
            name: "Compacted Coal",
            isResource: false
        },
        // Fluids
        {
            name: "Water",
            isResource: true,
            megawattSecondToExtract: 10,
            //Dummy
            relativeNodeAmount: 1000,
            relativeNeed: 1
        },
        {
            name: "Crude Oil",
            isResource: true,
            megawattSecondToExtract: 20,
            //Impure: 10 Normal: 12 Pure: 8
            relativeNodeAmount: 33,
            relativeNeed: 0.5
        },
        {
            name: "Heavy Oil Residue",
            isResource: false
        },
        {
            name: "Fuel",
            isResource: false
        },
        {
            name: "Liquid Biofuel",
            isResource: false
        },
        {
            name: "Turbofuel",
            isResource: false
        },
        {
            name: "Alumina Solution",
            isResource: false
        },
        {
            name: "Sulfuric Acid",
            isResource: false
        },
        {
            name: "Heavy Oil Residue",
            isResource: false
        },
        {
            name: "Nitric Acid",
            isResource: false
        },
        // Gases
        {
            name: "Nitrogen Gas",
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
            isResource: false
        },
        {
            name: "Screw",
            isResource: false
        },
        {
            name: "Iron Plate",
            isResource: false
        },
        {
            name: "Reinforced Iron Plate",
            isResource: false
        },
        {
            name: "Copper Sheet",
            isResource: false
        },
        {
            name: "Alclad Aluminum Sheet",
            isResource: false
        },
        {
            name: "Aluminum Casing",
            isResource: false
        },
        {
            name: "Steel Pipe",
            isResource: false
        },
        {
            name: "Steel Beam",
            isResource: false
        },
        {
            name: "Encased Industrial Beam",
            isResource: false
        },
        {
            name: "Modular Frame",
            isResource: false
        },
        {
            name: "Heavy Modular Frame",
            isResource: false
        },
        {
            name: "Fused Modular Frame",
            isResource: false
        },
        {
            name: "Fabric",
            isResource: false
        },
        {
            name: "Plastic",
            isResource: false
        },
        {
            name: "Rubber",
            isResource: false
        },
        // Industrial Parts
        {
            name: "Rotor",
            isResource: false
        },
        {
            name: "Stator",
            isResource: false
        },
        {
            name: "Battery",
            isResource: false
        },
        {
            name: "Motor",
            isResource: false
        },
        {
            name: "Heat Sink",
            isResource: false
        },
        {
            name: "Cooling System",
            isResource: false
        },
        {
            name: "Turbo Motor",
            isResource: false
        },
        //Electronics
        {
            name: "Wire",
            isResource: false
        },
        {
            name: "Cable",
            isResource: false
        },
        {
            name: "Quickwire",
            isResource: false
        },
        {
            name: "Circuit Board",
            isResource: false
        },
        {
            name: "AI Limiter",
            isResource: false
        },
        {
            name: "High-Speed Connector",
            isResource: false
        },
        // Communications
        {
            name: "Computer",
            isResource: false
        },
        {
            name: "Supercomputer",
            isResource: false
        },
        {
            name: "Quantum Computer",
            isResource: false
        },
        {
            name: "Radio Control Unit",
            isResource: false
        },
        {
            name: "Crystal Oscillator",
            isResource: false
        },
        {
            name: "Superposition Oscillator",
            isResource: false
        },
        // Containers
        {
            name: "Empty Canister",
            isResource: false
        },
        {
            name: "Empty Fluid Tank",
            isResource: false
        },
        {
            name: "Pressure Conversion Cube",
            isResource: false
        },
        {
            name: "Packaged Water",
            isResource: false
        },
        {
            name: "Packaged Alumina Solution",
            isResource: false
        },
        {
            name: "Packaged Sulfuric Acid",
            isResource: false
        },
        {
            name: "Packaged Nitric Acid",
            isResource: false
        },
        {
            name: "Packaged Nitrogen Gas",
            isResource: false
        },
        //Fuels
        {
            name: "Leaves",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Mycelia",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Flower Petals",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Wood",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 10,
            relativeNeed: 1
        },
        {
            name: "Biomass",
            isResource: false
        },
        {
            name: "Compacted Coal",
            isResource: false
        },
        {
            name: "Packaged Oil",
            isResource: false
        },
        {
            name: "Packaged Heavy Oil Residue",
            isResource: false
        },
        {
            name: "Solid Biofuel",
            isResource: false
        },
        {
            name: "Packaged Fuel",
            isResource: false
        },
        {
            name: "Packaged Liquid Biofuel",
            isResource: false
        },
        {
            name: "Packaged Turbofuel",
            isResource: false
        },
        {
            name: "Uranium Fuel Rod",
            isResource: false
        },
        {
            name: "Plutonium Fuel Rod",
            isResource: false
        },
        // Consumed
        {
            name: "Black Powder",
            isResource: false
        },
        {
            name: "Smokeless Powder",
            isResource: false
        },
        {
            name: "Gas Filter",
            isResource: false
        },
        {
            name: "Color Cartridge",
            isResource: false
        },
        {
            name: "Beacon",
            isResource: false
        },
        {
            name: "Iodine Infused Filter",
            isResource: false
        },
        // Ammos
        {
            name: "Iron Rebar",
            isResource: false
        },
        {
            name: "Stun Rebar",
            isResource: false
        },
        {
            name: "Shatter Rebar",
            isResource: false
        },
        {
            name: "Explosive Rebar",
            isResource: false
        },
        {
            name: "Rifle Ammo",
            isResource: false
        },
        {
            name: "Homing Rifle Ammo",
            isResource: false
        },
        {
            name: "Turbo Rifle Ammo",
            isResource: false
        },
        {
            name: "Nobelisk",
            isResource: false
        },
        {
            name: "Gas Nobelisk",
            isResource: false
        },
        {
            name: "Pulse Nobelisk",
            isResource: false
        },
        {
            name: "Cluster Nobelisk",
            isResource: false
        },
        {
            name: "Nuke Nobelisk",
            isResource: false
        },
        // Nuclear
        {
            name: "Electromagnetic Control Rod",
            isResource: false
        },
        {
            name: "Encased Uranium Cell",
            isResource: false
        },
        {
            name: "Non-fissile Uranium",
            isResource: false
        },
        {
            name: "Plutonium Pellet",
            isResource: false
        },
        {
            name: "Encased Plutonium Cell",
            isResource: false
        },
        // Waste
        {
            name: "Uranium Waste",
            isResource: false
        },
        {
            name: "Plutonium Waste",
            isResource: false
        },
        // Special
        {
            name: "Blue Power Slug",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Yellow Power Slug",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.5,
            relativeNeed: 1
        },
        {
            name: "Purple Power Slug",
            isResource: true,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.2,
            relativeNeed: 1
        },
        {
            name: "Power Shard",
            isResource: false
        },
        {
            name: "FICSIT Coupon",
            isResource: false
        },
        {
            name: "Smart Plating",
            isResource: false
        },
        {
            name: "Versatile Framework",
            isResource: false
        },
        {
            name: "Automated Wiring",
            isResource: false
        },
        {
            name: "Modular Engine",
            isResource: false
        },
        {
            name: "Adaptive Control Unit",
            isResource: false
        },
        {
            name: "Assembly Director System",
            isResource: false
        },
        {
            name: "Magnetic Field Generator",
            isResource: false
        },
        {
            name: "Thermal Propulsion Rocket",
            isResource: false
        },
        {
            name: "Nuclear Pasta",
            isResource: false
        }
    ]