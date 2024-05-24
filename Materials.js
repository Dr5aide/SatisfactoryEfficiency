// Refering to Update 8
function getMaterialIndexByName(nameToLookUp) {
    for (let i = 0; i < materials.length; i++) {
        if (materials[i].name === nameToLookUp) {
            return i;
        }
    }
    throw new Error('MaterialName not found: ' + nameToLookUp);
}

function getAvailableProductsIndeces() {
    var availableMaterialIndeces = [];
    for (let i = 1; i < materials.length; i++) {
        if (materials[i].tier <= unlockedTiers && !materials[i].isResource) {
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
            ficsitCouponValue: 0,
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
            ficsitCouponValue: 2,
            megawattSecondToExtract: 5,
            //Impure: 12 Normal: 47 Pure: 27
            relativeNodeAmount: 107,
            // based on https://www.reddit.com/r/SatisfactoryGame/comments/poc898/alternate_recipes_indepth_analysis_an_objective/ then refined by try and error
            relativeNeed: 0.3
        },
        {
            name: "Iron Ore",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 1,
            megawattSecondToExtract: 5,
            //Impure: 33 Normal: 41 Pure: 46
            relativeNodeAmount: 149.5,
            relativeNeed: 1
        },
        {
            name: "Copper Ore",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 3,
            megawattSecondToExtract: 5,
            //Impure: 9 Normal: 28 Pure: 12
            relativeNodeAmount: 56.5,
            relativeNeed: 0.75
        },
        {
            name: "Caterium Ore",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 7,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 8 Pure: 8
            relativeNodeAmount: 24,
            relativeNeed: 0.3
        },
        {
            name: "Coal",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 3,
            megawattSecondToExtract: 5,
            //Impure: 6 Normal: 29 Pure: 15
            relativeNodeAmount: 62,
            relativeNeed: 0.5
        },
        {
            name: "Raw Quartz",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 15,
            megawattSecondToExtract: 5,
            //Impure: 0 Normal: 11 Pure: 5
            relativeNodeAmount: 21,
            relativeNeed: 0.1
        },
        {
            name: "Sulfur",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 11,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 7 Pure: 3
            relativeNodeAmount: 14.5,
            relativeNeed: 0.16
        },
        {
            name: "Bauxite",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 8,
            megawattSecondToExtract: 5,
            //Impure: 5 Normal: 6 Pure: 6
            relativeNodeAmount: 20.5,
            relativeNeed: 0.15
        },
        {
            name: "S.A.M. Ore",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 5,
            //Impure: 8 Normal: 5 Pure: 0
            relativeNodeAmount: 9,
            relativeNeed: 0
        },
        {
            name: "Uranium",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 35,
            megawattSecondToExtract: 5,
            //Impure: 1 Normal: 3 Pure: 0
            relativeNodeAmount: 3.5,
            relativeNeed: 0.03
        },
        // Ingots
        {
            name: "Iron Ingot",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 2
        },
        {
            name: "Copper Ingot",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 6
        },
        {
            name: "Caterium Ingot",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 42
        },
        {
            name: "Steel Ingot",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 8
        },
        {
            name: "Aluminum Ingot",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 131
        },
        // Minerals
        {
            name: "Concrete",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 12
        },
        {
            name: "Quartz Crystal",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 50
        },
        {
            name: "Silica",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 20
        },
        {
            name: "Copper Powder",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 72
        },
        {
            name: "Polymer Resin",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 12
        },
        {
            name: "Petroleum Coke",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 20
        },
        {
            name: "Aluminum Scrap",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 27
        },
        {
            name: "Compacted Coal",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 28
        },
        // Fluids
        {
            name: "Water",
            tier: 3,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 10,
            //Dummy
            relativeNodeAmount: 10000,
            relativeNeed: 1
        },
        {
            name: "Crude Oil",
            tier: 5,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 20,
            //Impure: 10 Normal: 12 Pure: 8
            relativeNodeAmount: 33,
            relativeNeed: 0.5
        },
        {
            name: "Heavy Oil Residue",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Fuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Liquid Biofuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Turbofuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Alumina Solution",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Sulfuric Acid",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Heavy Oil Residue",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Nitric Acid",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
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
            isResource: false,
            ficsitCouponValue: 4
        },
        {
            name: "Screw",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 2
        },
        {
            name: "Iron Plate",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 6
        },
        {
            name: "Reinforced Iron Plate",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 120
        },
        {
            name: "Copper Sheet",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 24
        },
        {
            name: "Alclad Aluminum Sheet",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 266
        },
        {
            name: "Aluminum Casing",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 393
        },
        {
            name: "Steel Pipe",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 24
        },
        {
            name: "Steel Beam",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 64
        },
        {
            name: "Encased Industrial Beam",
            tier: 4,
            isResource: false,
            ficsitCouponValue: 632
        },
        {
            name: "Modular Frame",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 408
        },
        {
            name: "Heavy Modular Frame",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 11520
        },
        {
            name: "Fused Modular Frame",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 62840
        },
        {
            name: "Fabric",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 140
        },
        {
            name: "Plastic",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 75
        },
        {
            name: "Rubber",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 60
        },
        // Industrial Parts
        {
            name: "Rotor",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 140
        },
        {
            name: "Stator",
            tier: 4,
            isResource: false,
            ficsitCouponValue: 240
        },
        {
            name: "Battery",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 465
        },
        {
            name: "Motor",
            tier: 4,
            isResource: false,
            ficsitCouponValue: 1520
        },
        {
            name: "Heat Sink",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 2804
        },
        {
            name: "Cooling System",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 12006
        },
        {
            name: "Turbo Motor",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 242720
        },
        //Electronics
        {
            name: "Wire",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 6
        },
        {
            name: "Cable",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 24
        },
        {
            name: "Quickwire",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 17
        },
        {
            name: "Circuit Board",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 696
        },
        {
            name: "AI Limiter",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 920
        },
        {
            name: "High-Speed Connector",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 3776
        },
        // Communications
        {
            name: "Computer",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 17260
        },
        {
            name: "Supercomputer",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 99576
        },
        {
            name: "Quantum Computer",
            tier: 9,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Radio Control Unit",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 19600
        },
        {
            name: "Crystal Oscillator",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 3072
        },
        {
            name: "Superposition Oscillator",
            tier: 9,
            isResource: false,
            ficsitCouponValue: 0
        },
        // Containers
        {
            name: "Empty Canister",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 60
        },
        {
            name: "Empty Fluid Tank",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 225
        },
        {
            name: "Pressure Conversion Cube",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 257312
        },
        {
            name: "Packaged Water",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 130
        },
        {
            name: "Packaged Alumina Solution",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 160
        },
        {
            name: "Packaged Sulfuric Acid",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 152
        },
        {
            name: "Packaged Nitric Acid",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 412
        },
        {
            name: "Packaged Nitrogen Gas",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 312
        },
        //Fuels
        {
            name: "Leaves",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 3,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Mycelia",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 10,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.1,
            relativeNeed: 1
        },
        {
            name: "Flower Petals",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 10,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Wood",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 30,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 1,
            relativeNeed: 1
        },
        {
            name: "Biomass",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 12
        },
        {
            name: "Compacted Coal",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Packaged Oil",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 180
        },
        {
            name: "Packaged Heavy Oil Residue",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 180
        },
        {
            name: "Solid Biofuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 48
        },
        {
            name: "Packaged Fuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 270
        },
        {
            name: "Packaged Liquid Biofuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 370
        },
        {
            name: "Packaged Turbofuel",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 570
        },
        {
            name: "Uranium Fuel Rod",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 44092
        },
        {
            name: "Plutonium Fuel Rod",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 153184
        },
        // Consumed
        {
            name: "Black Powder",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 14
        },
        {
            name: "Smokeless Powder",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 58
        },
        {
            name: "Gas Filter",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 830
        },
        {
            name: "Color Cartridge",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Beacon",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 320
        },
        {
            name: "Iodine Infused Filter",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 2718
        },
        // Ammos
        {
            name: "Iron Rebar",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 8
        },
        {
            name: "Stun Rebar",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 186
        },
        {
            name: "Shatter Rebar",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 332
        },
        {
            name: "Explosive Rebar",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 360
        },
        {
            name: "Rifle Ammo",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 25
        },
        {
            name: "Homing Rifle Ammo",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 855
        },
        {
            name: "Turbo Rifle Ammo",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 120
        },
        {
            name: "Nobelisk",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 152
        },
        {
            name: "Gas Nobelisk",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 544
        },
        {
            name: "Pulse Nobelisk",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 1533
        },
        {
            name: "Cluster Nobelisk",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 1376
        },
        {
            name: "Nuke Nobelisk",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 19600
        },
        // Nuclear
        {
            name: "Electromagnetic Control Rod",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 2560
        },
        {
            name: "Encased Uranium Cell",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 147
        },
        {
            name: "Non-fissile Uranium",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Plutonium Pellet",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Encased Plutonium Cell",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
        },
        // Waste
        {
            name: "Uranium Waste",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Plutonium Waste",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 0
        },
        // Special
        {
            name: "Blue Power Slug",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.1,
            relativeNeed: 1
        },
        {
            name: "Yellow Power Slug",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.05,
            relativeNeed: 1
        },
        {
            name: "Purple Power Slug",
            tier: 0,
            isResource: true,
            ficsitCouponValue: 0,
            megawattSecondToExtract: 0,
            //Dummy
            relativeNodeAmount: 0.02,
            relativeNeed: 1
        },
        {
            name: "Power Shard",
            tier: 0,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "FICSIT Coupon Point",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 0
        },
        {
            name: "Smart Plating",
            tier: 2,
            isResource: false,
            ficsitCouponValue: 520
        },
        {
            name: "Versatile Framework",
            tier: 3,
            isResource: false,
            ficsitCouponValue: 1176
        },
        {
            name: "Automated Wiring",
            tier: 4,
            isResource: false,
            ficsitCouponValue: 1440
        },
        {
            name: "Modular Engine",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 9960
        },
        {
            name: "Adaptive Control Unit",
            tier: 5,
            isResource: false,
            ficsitCouponValue: 86120
        },
        {
            name: "Assembly Director System",
            tier: 7,
            isResource: false,
            ficsitCouponValue: 543632
        },
        {
            name: "Magnetic Field Generator",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 15650
        },
        {
            name: "Thermal Propulsion Rocket",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 732956
        },
        {
            name: "Nuclear Pasta",
            tier: 8,
            isResource: false,
            ficsitCouponValue: 543424
        }
    ]