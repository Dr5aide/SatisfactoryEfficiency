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
        // Ores
        {
            name: "Limestone",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "IronOre",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "CopperOre",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "CateriumOre",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "Coal",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "RawQuartz",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "Sulfur",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "Bauxite",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "S.A.M.Ore",
            isResource: true,
            megawattSecondToExtract: 5
        },
        {
            name: "Uranium",
            isResource: true,
            megawattSecondToExtract: 5
        },
        // Ingots
        {
            name: "IronIngot",
            isResource: false
        },
        {
            name: "CopperIngot",
            isResource: false
        },
        {
            name: "CateriumIngot",
            isResource: false
        },
        {
            name: "SteelIngot",
            isResource: false
        },
        {
            name: "AluminumIngot",
            isResource: false
        },
        // Minerals
        {
            name: "Concrete",
            isResource: false
        },
        {
            name: "QuartzCrystal",
            isResource: false
        },
        {
            name: "Silica",
            isResource: false
        },
        {
            name: "CopperPowder",
            isResource: false
        },
        {
            name: "PolymerResin",
            isResource: false
        },
        {
            name: "PetroleumCoke",
            isResource: false
        },
        {
            name: "AluminumScrap",
            isResource: false
        },
        //
        {
            name: "CompactedCoal",
            isResource: false
        },
        // Fluids
        {
            name: "Water",
            isResource: true,
            megawattSecondToExtract: 10
        },
        {
            name: "CrudeOil",
            isResource: true,
            megawattSecondToExtract: 20
        },
        {
            name: "HeavyOilResidue",
            isResource: false
        },
        {
            name: "Fuel",
            isResource: false
        },
        {
            name: "LiquidBiofuel",
            isResource: false
        },
        {
            name: "Turbofuel",
            isResource: false
        },
        {
            name: "AluminaSolution",
            isResource: false
        },
        {
            name: "SulfuricAcid",
            isResource: false
        },
        {
            name: "HeavyOilResidue",
            isResource: false
        },
        {
            name: "NitricAcid",
            isResource: false
        },
        // Gases
        {
            name: "NitrogenGas",
            isResource: true,
            // normal = 7 nodes -> 150 / (7*60)
            megawattSecondToExtract: 0.357
        },
        // Standard Parts
        {
            name: "IronRod",
            isResource: false
        },
        {
            name: "Screw",
            isResource: false
        },
        {
            name: "IronPlate",
            isResource: false
        },
        {
            name: "ReinforcedIronPlate",
            isResource: false
        },
        {
            name: "CopperSheet",
            isResource: false
        },
        {
            name: "AlcladAluminumSheet",
            isResource: false
        },
        {
            name: "AluminumCasing",
            isResource: false
        },
        {
            name: "SteelPipe",
            isResource: false
        },
        {
            name: "SteelBeam",
            isResource: false
        },
        {
            name: "EncasedIndustrialBeam",
            isResource: false
        },
        {
            name: "ModularFrame",
            isResource: false
        },
        {
            name: "HeavyModularFrame",
            isResource: false
        },
        {
            name: "FusedModularFrame",
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
            name: "HeatSink",
            isResource: false
        },
        {
            name: "CoolingSystem",
            isResource: false
        },
        {
            name: "TurboMotor",
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
            name: "CircuitBoard",
            isResource: false
        },
        {
            name: "AILimiter",
            isResource: false
        },
        {
            name: "HighSpeedConnector",
            isResource: false
        },
        // Communications
        {
            name: "Computer",
            isResource: false
        },
        {
            name: "SuperComputer",
            isResource: false
        },
        {
            name: "QuantumComputer",
            isResource: false
        },
        {
            name: "RadioControlUnit",
            isResource: false
        },
        {
            name: "CrystalOscillator",
            isResource: false
        },
        {
            name: "SuperpositionOscillator",
            isResource: false
        },
        // Containers
        {
            name: "EmptyCanister",
            isResource: false
        },
        {
            name: "EmptyFluidTank",
            isResource: false
        },
        {
            name: "PressureConversionCube",
            isResource: false
        },
        {
            name: "PackagedWater",
            isResource: false
        },
        {
            name: "PackagedAluminaSolution",
            isResource: false
        },
        {
            name: "PackagedSulfuricAcid",
            isResource: false
        },
        {
            name: "PackagedNitricAcid",
            isResource: false
        },
        {
            name: "PackagedNitrogenGas",
            isResource: false
        },
        //Fuels
        {
            name: "Leaves",
            isResource: true,
            megawattSecondToExtract: 0
        },
        {
            name: "Mycelia",
            isResource: true,
            megawattSecondToExtract: 0
        },
        {
            name: "FlowerPetals",
            isResource: true,
            megawattSecondToExtract: 0
        },
        {
            name: "Wood",
            isResource: true,
            megawattSecondToExtract: 0
        },
        {
            name: "Biomass",
            isResource: false
        },
        {
            name: "CompactedCoal",
            isResource: false
        },
        {
            name: "PackagedOil",
            isResource: false
        },
        {
            name: "PackagedHeavyOilResidue",
            isResource: false
        },
        {
            name: "SolidBiofuel",
            isResource: false
        },
        {
            name: "PackagedFuel",
            isResource: false
        },
        {
            name: "PackagedLiquidBiofuel",
            isResource: false
        },
        {
            name: "PackagedTurbofuel",
            isResource: false
        },
        {
            name: "UraniumFuelRod",
            isResource: false
        },
        {
            name: "PlutoniumFuelRod",
            isResource: false
        },
        // Consumed
        {
            name: "BlackPowder",
            isResource: false
        },
        {
            name: "SmokelessPowder",
            isResource: false
        },
        {
            name: "GasFilter",
            isResource: false
        },
        {
            name: "ColorCartridge",
            isResource: false
        },
        {
            name: "Beacon",
            isResource: false
        },
        {
            name: "IodineInfusedFilter",
            isResource: false
        },
        // Ammos
        {
            name: "IronRebar",
            isResource: false
        },
        {
            name: "StunRebar",
            isResource: false
        },
        {
            name: "ShatterRebar",
            isResource: false
        },
        {
            name: "ExplosiveRebar",
            isResource: false
        },
        {
            name: "RifleAmmo",
            isResource: false
        },
        {
            name: "HomingRifleAmmo",
            isResource: false
        },
        {
            name: "TurboRifleAmmo",
            isResource: false
        },
        {
            name: "Nobelisk",
            isResource: false
        },
        {
            name: "GasNobelisk",
            isResource: false
        },
        {
            name: "PulseNobelisk",
            isResource: false
        },
        {
            name: "ClusterNobelisk",
            isResource: false
        },
        {
            name: "NukeNobelisk",
            isResource: false
        }
    ]