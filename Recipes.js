// Refering to Update 8
const recipes =
	[
		// Ingots
		{
			name: "Iron Ingot",
			tier: 1,
			output: [getIDbyMaterialName("IronIngot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronOre")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Iron Alloy Ingot",
			tier: 1,
			output: [getIDbyMaterialName("IronIngot")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("CopperOre")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 6
		},
		{
			name: "Pure Iron Ingot",
			tier: 3,
			output: [getIDbyMaterialName("IronIngot")],
			outputQuantity: [13],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("Water")],
			inputQuantity: [7, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Copper Ingot",
			tier: 1,
			output: [getIDbyMaterialName("CopperIngot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CoperOre")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Copper Alloy Ingot",
			tier: 1,
			output: [getIDbyMaterialName("CopperIngot")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("CopperOre"), getIDbyMaterialName("IronOre")],
			inputQuantity: [10, 5],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Pure Copper Ingot",
			tier: 3,
			output: [getIDbyMaterialName("CopperIngot")],
			outputQuantity: [13],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("Water")],
			inputQuantity: [7, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Ingot",
			tier: 1,
			output: [getIDbyMaterialName("CateriumIngot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Caterium")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Caterium Ingot",
			tier: 3,
			output: [getIDbyMaterialName("CateriumIngot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Caterium"), getIDbyMaterialName("Water")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 5
		},
		{
			name: "Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("SteelIngot")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("Coal")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("SteelIngot")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("CompactedCoal")],
			inputQuantity: [6, 3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 16
		},
		{
			name: "Solid Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("SteelIngot")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("IronIngot"), getIDbyMaterialName("Coal")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 3
		},
		{
			name: "Coke Steel Ingot",
			tier: 5,
			output: [getIDbyMaterialName("SteelIngot")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("IronOre"), getIDbyMaterialName("PetroleumCoke")],
			inputQuantity: [15, 15],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Aluminum Ingot",
			tier: 7,
			output: [getIDbyMaterialName("AluminumIngot")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("AluminumScrap"), getIDbyMaterialName("Silica")],
			inputQuantity: [6, 5],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Aluminum Ingot",
			tier: 7,
			output: [getIDbyMaterialName("AluminumIngot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("AluminumScrap")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Smelter"),
			craftingTime_s: 2
		},
		// Minerals
		{
			name: "Concrete",
			tier: 1,
			output: [getIDbyMaterialName("Concrete")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Limestone")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fine Concrete",
			tier: 2,
			output: [getIDbyMaterialName("Concrete")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Limestone"), getIDbyMaterialName("Silica")],
			inputQuantity: [12, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Wet Concrete",
			tier: 3,
			output: [getIDbyMaterialName("Concrete")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Limestone"), getIDbyMaterialName("Water")],
			inputQuantity: [6, 5],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Rubber Concrete",
			tier: 5,
			output: [getIDbyMaterialName("Concrete")],
			outputQuantity: [9],
			input: [getIDbyMaterialName("Limestone"), getIDbyMaterialName("Rubber")],
			inputQuantity: [10, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quartz Crystal",
			tier: 1,
			output: [getIDbyMaterialName("QuartzCrystal")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("RawQuartz")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Pure Quartz Crystal",
			tier: 3,
			output: [getIDbyMaterialName("QuartzCrystal")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("RawQuartz"), getIDbyMaterialName("Water")],
			inputQuantity: [9, 5],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Silica",
			tier: 1,
			output: [getIDbyMaterialName("Silica")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("RawQuartz")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Cheap Silica",
			tier: 2,
			output: [getIDbyMaterialName("Silica")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("RawQuartz"), getIDbyMaterialName("Limestone")],
			inputQuantity: [3, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Copper Powder",
			tier: 8,
			output: [getIDbyMaterialName("CopperPowder")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("CopperIngot")],
			inputQuantity: [30],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Polymer Resin",
			tier: 5,
			output: [getIDbyMaterialName("PolymerResin"), getIDbyMaterialName("HeavyOilResidue")],
			outputQuantity: [13, 2],
			input: [getIDbyMaterialName("CrudeOil")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Petroleum Coke",
			tier: 5,
			output: [getIDbyMaterialName("PetroleumCoke")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("HeavyOilResidue")],
			inputQuantity: [4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Scrap",
			tier: 7,
			output: [getIDbyMaterialName("AluminumScrap"), getIDbyMaterialName("Water")],
			outputQuantity: [6, 2],
			input: [getIDbyMaterialName("AluminaSolution"), getIDbyMaterialName("Coal")],
			inputQuantity: [4, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 1
		},
		{
			name: "Electrode Aluminum Scrap",
			tier: 7,
			output: [getIDbyMaterialName("AluminumScrap"), getIDbyMaterialName("Water")],
			outputQuantity: [20, 7],
			input: [getIDbyMaterialName("AluminaSolution"), getIDbyMaterialName("PetroleumCoke")],
			inputQuantity: [12, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Instant Scrap",
			tier: 7,
			output: [getIDbyMaterialName("AluminumScrap"), getIDbyMaterialName("Water")],
			outputQuantity: [30, 5],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Coal"), getIDbyMaterialName("SulfuricAcid"), getIDbyMaterialName("Water")],
			inputQuantity: [15, 10, 5, 6],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		// Liquids
		{
			name: "Heavy Oil Residue",
			tier: 5,
			output: [getIDbyMaterialName("HeavyOilResidue"), getIDbyMaterialName("PolymerResin")],
			outputQuantity: [4, 2],
			input: [getIDbyMaterialName("CrudeOil")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("PolymerResin")],
			outputQuantity: [4, 3],
			input: [getIDbyMaterialName("CrudeOil")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Residual Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Fuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("HeavyOilResidue")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Diluted Fuel",
			tier: 7,
			output: [getIDbyMaterialName("Fuel")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("HeavyOilResidue"), getIDbyMaterialName("Water")],
			inputQuantity: [5, 10],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		{
			name: "Liquid Biofuel",
			tier: 5,
			output: [getIDbyMaterialName("LiquidBiofuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("SolidBiofuel"), getIDbyMaterialName("Water")],
			inputQuantity: [6, 3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Turbofuel",
			tier: 5,
			output: [getIDbyMaterialName("Turbofuel")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("CompactedCoal")],
			inputQuantity: [6, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 16
		},
		{
			name: "Alumina Solution",
			tier: 7,
			output: [getIDbyMaterialName("AluminaSolution"), getIDbyMaterialName("Silica")],
			outputQuantity: [12, 5],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Water")],
			inputQuantity: [12, 18],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Sloppy Alumina",
			tier: 7,
			output: [getIDbyMaterialName("AluminaSolution")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Water")],
			inputQuantity: [10, 10],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Sulfuric Acid",
			tier: 7,
			output: [getIDbyMaterialName("SulfuricAcid")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("Water")],
			inputQuantity: [5, 5],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Nitric Acid",
			tier: 8,
			output: [getIDbyMaterialName("NitricAcid")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("NitrogenGas"), getIDbyMaterialName("Water"), getIDbyMaterialName("IronPlate")],
			inputQuantity: [12, 3, 1],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		// Standard Parts
		{
			name: "Iron Rod",
			tier: 1,
			output: [getIDbyMaterialName("IronRod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Steel Rod",
			tier: 3,
			output: [getIDbyMaterialName("IronRod")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("SteelIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Screw",
			tier: 1,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("IronRod")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Cast Screw",
			tier: 1,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("IronIngot")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Steel Screw",
			tier: 3,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [52],
			input: [getIDbyMaterialName("SteelBeam")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Iron Plate",
			tier: 1,
			output: [getIDbyMaterialName("IronPlate")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("IronIngot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Coated Iron Plate",
			tier: 5,
			output: [getIDbyMaterialName("IronPlate")],
			outputQuantity: [15],
			input: [getIDbyMaterialName("IronIngot"), getIDbyMaterialName("Plastic")],
			inputQuantity: [10, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Steel Coated Plate",
			tier: 5,
			output: [getIDbyMaterialName("IronPlate")],
			outputQuantity: [18],
			input: [getIDbyMaterialName("SteelIngot"), getIDbyMaterialName("Plastic")],
			inputQuantity: [3, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Reinforced Iron Plate",
			tier: 1,
			output: [getIDbyMaterialName("ReinforcedIronPlate")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronPlate"), getIDbyMaterialName("Screw")],
			inputQuantity: [6, 12],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Adhered Iron Plate",
			tier: 5,
			output: [getIDbyMaterialName("ReinforcedIronPlate")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronPlate"), getIDbyMaterialName("Rubber")],
			inputQuantity: [3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Bolted Iron Plate",
			tier: 1,
			output: [getIDbyMaterialName("ReinforcedIronPlate")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("IronPlate"), getIDbyMaterialName("Rubber")],
			inputQuantity: [18, 50],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Stiched Iron Plate",
			tier: 1,
			output: [getIDbyMaterialName("ReinforcedIronPlate")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("IronPlate"), getIDbyMaterialName("Wire")],
			inputQuantity: [10, 20],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 32
		},
		{
			name: "Copper Sheet",
			tier: 2,
			output: [getIDbyMaterialName("CopperSheet")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CopperIngot")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steamed Copper Sheet",
			tier: 5,
			output: [getIDbyMaterialName("CopperSheet")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("CopperIngot"), getIDbyMaterialName("Water")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Alclad Aluminum Sheet",
			tier: 7,
			output: [getIDbyMaterialName("AlcladAluminumSheet")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("AluminumIngot"), getIDbyMaterialName("CopperIngot")],
			inputQuantity: [3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Casing",
			tier: 7,
			output: [getIDbyMaterialName("AluminumCasing")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("AluminumIngot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Alclad Casing",
			tier: 7,
			output: [getIDbyMaterialName("AluminumCasing")],
			outputQuantity: [15],
			input: [getIDbyMaterialName("AluminumIngot"), getIDbyMaterialName("CopperIngot")],
			inputQuantity: [20, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Steel Pipe",
			tier: 3,
			output: [getIDbyMaterialName("SteelPipe")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("SteelIngot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steel Beam",
			tier: 3,
			output: [getIDbyMaterialName("SteelBeam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("SteelIngot")],
			inputQuantity: [4],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Encased Industrial Beam",
			tier: 3,
			output: [getIDbyMaterialName("EncasedIndustrialBeam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("SteelIngot"), getIDbyMaterialName("Concrete")],
			inputQuantity: [4, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 10
		},
		{
			name: "Encased Industrial Pipe",
			tier: 3,
			output: [getIDbyMaterialName("EncasedIndustrialBeam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("Concrete")],
			inputQuantity: [7, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Modular Frame",
			tier: 2,
			output: [getIDbyMaterialName("ModularFrame")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("ReinforcedIronPlate"), getIDbyMaterialName("IronRod")],
			inputQuantity: [3, 12],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Bolted Frame",
			tier: 2,
			output: [getIDbyMaterialName("ModularFrame")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("ReinforcedIronPlate"), getIDbyMaterialName("Screw")],
			inputQuantity: [3, 56],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Steeled Frame",
			tier: 3,
			output: [getIDbyMaterialName("ModularFrame")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("ReinforcedIronPlate"), getIDbyMaterialName("SteelPipe")],
			inputQuantity: [2, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Heavy Modular Frame",
			tier: 4,
			output: [getIDbyMaterialName("HeavyModularFrame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("ModularFrame"), getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("EncasedIndustrialBeam"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 15, 5, 100],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 30
		},
		{
			name: "Heavy Encased Frame",
			tier: 4,
			output: [getIDbyMaterialName("HeavyModularFrame")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("ModularFrame"), getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("EncasedIndustrialBeam"), getIDbyMaterialName("Concrete")],
			inputQuantity: [8, 36, 10, 22],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Heavy Flexible Frame",
			tier: 5,
			output: [getIDbyMaterialName("HeavyModularFrame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("ModularFrame"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("EncasedIndustrialBeam"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 20, 3, 104],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Fused Modular Frame",
			tier: 8,
			output: [getIDbyMaterialName("FusedModularFrame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("HeavyModularFrame"), getIDbyMaterialName("AluminumCasing"), getIDbyMaterialName("NitrogenGas")],
			inputQuantity: [1, 50, 25],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 40
		},
		{
			name: "Heat-Fused Frame",
			tier: 8,
			output: [getIDbyMaterialName("FusedModularFrame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("HeavyModularFrame"), getIDbyMaterialName("AluminumIngot"), getIDbyMaterialName("NitricAcid"), getIDbyMaterialName("Fuel")],
			inputQuantity: [1, 50, 8, 10],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 20
		},
		{
			name: "Fabric",
			tier: 2,
			output: [getIDbyMaterialName("Fabric")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Mycelia"), getIDbyMaterialName("Biomass")],
			inputQuantity: [1, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Polyester Fabric",
			tier: 5,
			output: [getIDbyMaterialName("Fabric")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("PolymerResin"), getIDbyMaterialName("Water")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Plastic",
			tier: 5,
			output: [getIDbyMaterialName("Plastic"), getIDbyMaterialName("HeavyOilResidue")],
			outputQuantity: [2, 1],
			input: [getIDbyMaterialName("CrudeOil")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Plastic",
			tier: 5,
			output: [getIDbyMaterialName("Plastic")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Rubber"), getIDbyMaterialName("Fuel")],
			inputQuantity: [6, 6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Plastic",
			tier: 5,
			output: [getIDbyMaterialName("Plastic")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("PolymerResin"), getIDbyMaterialName("Water")],
			inputQuantity: [6, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Rubber",
			tier: 5,
			output: [getIDbyMaterialName("Rubber"), getIDbyMaterialName("HeavyOilResidue")],
			outputQuantity: [2, 2],
			input: [getIDbyMaterialName("CrudeOil")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Rubber",
			tier: 5,
			output: [getIDbyMaterialName("Rubber")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Plastic"), getIDbyMaterialName("Fuel")],
			inputQuantity: [6, 6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Rubber",
			tier: 5,
			output: [getIDbyMaterialName("Rubber")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("PolymerResin"), getIDbyMaterialName("Water")],
			inputQuantity: [4, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		// Industrial Parts
		{
			name: "Rotor",
			tier: 2,
			output: [getIDbyMaterialName("Rotor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronRod"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 25],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Copper Rotor",
			tier: 2,
			output: [getIDbyMaterialName("Rotor")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("CopperSheet"), getIDbyMaterialName("Screw")],
			inputQuantity: [6, 52],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Steel Rotor",
			tier: 3,
			output: [getIDbyMaterialName("Rotor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("Wire")],
			inputQuantity: [2, 6],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 36
		},
		{
			name: "Stator",
			tier: 3,
			output: [getIDbyMaterialName("Stator")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("Wire")],
			inputQuantity: [3, 8],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Stator",
			tier: 3,
			output: [getIDbyMaterialName("Stator")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [4, 15],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Battery",
			tier: 7,
			output: [getIDbyMaterialName("Battery"), getIDbyMaterialName("Water")],
			outputQuantity: [1, 1.5],
			input: [getIDbyMaterialName("SulfuricAcid"), getIDbyMaterialName("AluminaSolution"), getIDbyMaterialName("AluminaCasing")],
			inputQuantity: [2.5, 2, 1],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 3
		},
		{
			name: "Battery",
			tier: 7,
			output: [getIDbyMaterialName("Battery")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("AlcladAluminumSheet"), getIDbyMaterialName("Plastic"), getIDbyMaterialName("Wire")],
			inputQuantity: [6, 7, 8, 12],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Motor",
			tier: 4,
			output: [getIDbyMaterialName("Motor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Rotor"), getIDbyMaterialName("Stator")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Rigour Motor",
			tier: 4,
			output: [getIDbyMaterialName("Motor")],
			outputQuantity: [6],
			input: [getIDbyMaterialName("Rotor"), getIDbyMaterialName("Stator"), getIDbyMaterialName("CrystalOscillator")],
			inputQuantity: [3, 3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electric Motor",
			tier: 7,
			output: [getIDbyMaterialName("Motor")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("ElectromagneticControlRod"), getIDbyMaterialName("Rotor")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Heat Sink",
			tier: 8,
			output: [getIDbyMaterialName("HeatSink")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("AlcladAluminumSheet"), getIDbyMaterialName("CopperSheet")],
			inputQuantity: [5, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Heat Exchanger",
			tier: 8,
			output: [getIDbyMaterialName("HeatSink")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("AliminumCasing"), getIDbyMaterialName("Rubber")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Cooling System",
			tier: 8,
			output: [getIDbyMaterialName("CoolingSystem")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("HeatSink"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Water"), getIDbyMaterialName("NitrogenGas")],
			inputQuantity: [2, 2, 5, 25],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 10
		},
		{
			name: "Turbo Motor",
			tier: 8,
			output: [getIDbyMaterialName("TurboMotor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CoolingSystem"), getIDbyMaterialName("RadioControlUnit"), getIDbyMaterialName("Motor"), getIDbyMaterialName("Rubber")],
			inputQuantity: [4, 2, 4, 24],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Turbo Electric Motor",
			tier: 8,
			output: [getIDbyMaterialName("TurboMotor")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Motor"), getIDbyMaterialName("RadioControlUnit"), getIDbyMaterialName("ElectromagneticControlRod"), getIDbyMaterialName("Rotor")],
			inputQuantity: [7, 9, 5, 7],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Turbo Pressure Motor",
			tier: 8,
			output: [getIDbyMaterialName("TurboMotor")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Motor"), getIDbyMaterialName("PressureConversionCube"), getIDbyMaterialName("PackagedNitrogenGas"), getIDbyMaterialName("Stator")],
			inputQuantity: [4, 1, 24, 8],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		// Electronics
		{
			name: "Wire",
			tier: 1,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("CopperIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Iron Wire",
			tier: 1,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [9],
			input: [getIDbyMaterialName("IronIngot")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Wire",
			tier: 1,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [8],
			input: [getIDbyMaterialName("CateriumIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fused Wire",
			tier: 2,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [30],
			input: [getIDbyMaterialName("CopperIngot"), getIDbyMaterialName("CateriumIngot")],
			inputQuantity: [4, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Cable",
			tier: 1,
			output: [getIDbyMaterialName("Cable")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Wire")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Coated Cable",
			tier: 5,
			output: [getIDbyMaterialName("Cable")],
			outputQuantity: [9],
			input: [getIDbyMaterialName("Wire"), getIDbyMaterialName("HeavyOilResidue")],
			inputQuantity: [5, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Insulated Cable",
			tier: 5,
			output: [getIDbyMaterialName("Cable")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Wire"), getIDbyMaterialName("Rubber")],
			inputQuantity: [9, 6],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Cable",
			tier: 5,
			output: [getIDbyMaterialName("Cable")],
			outputQuantity: [11],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Rubber")],
			inputQuantity: [3, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Quickwire",
			tier: 1,
			output: [getIDbyMaterialName("Quickwire")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("CateriumIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Fused Quickwire",
			tier: 2,
			output: [getIDbyMaterialName("Quickwire")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("CateriumIngot"), getIDbyMaterialName("CopperIngot")],
			inputQuantity: [1, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("CircuitBoard")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CopperSheet"), getIDbyMaterialName("Plastic")],
			inputQuantity: [2, 4],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Caterium Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("CircuitBoard")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Plastic")],
			inputQuantity: [30, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electrode Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("CircuitBoard")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Rubber"), getIDbyMaterialName("PetroleumCoke")],
			inputQuantity: [9, 6],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Silicon Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("CircuitBoard")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("CopperSheet"), getIDbyMaterialName("Silica")],
			inputQuantity: [11, 11],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "AI Limiter",
			tier: 7,
			output: [getIDbyMaterialName("AILimiter")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CopperSheet"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [5, 20],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "High-Speed Connector",
			tier: 7,
			output: [getIDbyMaterialName("HighSpeedConnector")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Cable"), getIDbyMaterialName("CircuitBoard")],
			inputQuantity: [56, 10, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Silicon High-Speed Connector",
			tier: 7,
			output: [getIDbyMaterialName("HighSpeedConnector")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Silica"), getIDbyMaterialName("CircuitBoard")],
			inputQuantity: [60, 25, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 40
		},
		// Communications
		{
			name: "Computer",
			tier: 5,
			output: [getIDbyMaterialName("Computer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CircuitBoard"), getIDbyMaterialName("Cable"), getIDbyMaterialName("Plastic"), getIDbyMaterialName("Screw")],
			inputQuantity: [10, 9, 18, 52],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Computer",
			tier: 5,
			output: [getIDbyMaterialName("Computer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("CircuitBoard"), getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Rubber")],
			inputQuantity: [7, 28, 12],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Crystal Computer",
			tier: 5,
			output: [getIDbyMaterialName("Computer")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("CircuitBoard"), getIDbyMaterialName("CrystalOscillator")],
			inputQuantity: [8, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 64
		},
		{
			name: "Supercomputer",
			tier: 7,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Computer"), getIDbyMaterialName("AILimiter"), getIDbyMaterialName("HighSpeedConnector"), getIDbyMaterialName("Plastic")],
			inputQuantity: [2, 2, 3, 28],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "OC Supercomputer",
			tier: 7,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("RadioControlUnit"), getIDbyMaterialName("CoolingSystem")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Super-State Computer",
			tier: 8,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Computer"), getIDbyMaterialName("ElectromagneticControlRod"), getIDbyMaterialName("Battery"), getIDbyMaterialName("Wire")],
			inputQuantity: [3, 2, 20, 45],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 50
		},
		{
			name: "Radio Control Unit",
			tier: 7,
			output: [getIDbyMaterialName("RadioControlUnit")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("AluminumCasing"), getIDbyMaterialName("CrystalOscillator"), getIDbyMaterialName("Computer")],
			inputQuantity: [32, 1, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 48
		},
		{
			name: "Radio Connection Unit",
			tier: 7,
			output: [getIDbyMaterialName("RadioControlUnit")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("HeatSink"), getIDbyMaterialName("HighSpeedConnector"), getIDbyMaterialName("QuartzCrystal")],
			inputQuantity: [4, 2, 12],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Radio Control System",
			tier: 7,
			output: [getIDbyMaterialName("RadioControlUnit")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("CrystalOscillator"), getIDbyMaterialName("CircuitBoard"), getIDbyMaterialName("AluminumCasing"), getIDbyMaterialName("Rubber")],
			inputQuantity: [1, 10, 60, 30],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 40
		},
		{
			name: "Crystal Oscillator",
			tier: 5,
			output: [getIDbyMaterialName("CrystalOscillator")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("QuartzCrystal"), getIDbyMaterialName("Cable"), getIDbyMaterialName("ReinforcedIronPlate")],
			inputQuantity: [36, 28, 5],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Insulated Crystal Oscillator",
			tier: 7,
			output: [getIDbyMaterialName("CrystalOscillator")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("QuartzCrystal"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("AILimiter")],
			inputQuantity: [10, 7, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		// Containers
		{
			name: "Empty Canister",
			tier: 5,
			output: [getIDbyMaterialName("EmptyCanister")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Plastic")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Empty Fluid Tank",
			tier: 8,
			output: [getIDbyMaterialName("EmptyFluidTank")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("AluminumIngot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 1
		},
		{
			name: "Pressure Conversion Cube",
			tier: 8,
			output: [getIDbyMaterialName("PressureConversionCube")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("FusedModularFrame"), getIDbyMaterialName("RadioControlUnit")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		//Fuels
		{
			name: "Biomass (Leaves)",
			tier: 1,
			output: [getIDbyMaterialName("Biomass")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Leaves")],
			inputQuantity: [10],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Biomass (Mycelia)",
			tier: 1,
			output: [getIDbyMaterialName("Biomass")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Mycelia")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Biomass (Wood)",
			tier: 1,
			output: [getIDbyMaterialName("Biomass")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Wood")],
			inputQuantity: [4],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Coal",
			tier: 2,
			output: [getIDbyMaterialName("CompactedCoal")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Sulfur")],
			inputQuantity: [5, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Packaged Oil",
			tier: 5,
			output: [getIDbyMaterialName("PackagedOil")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("CrudeOil"), getIDbyMaterialName("EmptyCanister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Heavy Oil Residue",
			tier: 5,
			output: [getIDbyMaterialName("PackagedHeavyOilResidue")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("HeavyOilResidue"), getIDbyMaterialName("EmptyCanister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Solid Biofuel",
			tier: 1,
			output: [getIDbyMaterialName("SolidBiofuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Biomass")],
			inputQuantity: [8],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Fuel",
			tier: 5,
			output: [getIDbyMaterialName("PackagedFuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("EmptyCanister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Diluted Packaged Fuel",
			tier: 5,
			output: [getIDbyMaterialName("PackagedFuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("HeavyOilResidue"), getIDbyMaterialName("PackagedWater")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Liquid Biofuel",
			tier: 5,
			output: [getIDbyMaterialName("PackagedLiquidBiofuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("LiquidBiofuel"), getIDbyMaterialName("EmptyCanister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Turbofuel",
			tier: 5,
			output: [getIDbyMaterialName("PackagedTurbofuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("LiquidBiofuel"), getIDbyMaterialName("EmptyCanister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 6
		},
		{
			name: "Uranium Fuel Rod",
			tier: 8,
			output: [getIDbyMaterialName("UraniumFuelRod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("EncasedUraniumCell"), getIDbyMaterialName("EncasedIndustrialBeam"), getIDbyMaterialName("ElectromagneticControlRod")],
			inputQuantity: [50, 3, 5],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 150
		},
		{
			name: "Uranium Fuel Unit",
			tier: 8,
			output: [getIDbyMaterialName("UraniumFuelRod")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("EncasedUraniumCell"), getIDbyMaterialName("ElectromagneticControlRod"), getIDbyMaterialName("CrystalOscillator"), getIDbyMaterialName("Beacon")],
			inputQuantity: [100, 10, 3, 6],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 300
		},
		{
			name: "Plutonium Fuel Rod",
			tier: 8,
			output: [getIDbyMaterialName("PlutoniumFuelRod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("EncasedPlutoniumCell"), getIDbyMaterialName("SteelBeam"), getIDbyMaterialName("ElectromagneticControlRod"), getIDbyMaterialName("HeatSink")],
			inputQuantity: [30, 18, 6, 10],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 240
		},
		{
			name: "Plutonium Fuel Unit",
			tier: 8,
			output: [getIDbyMaterialName("PlutoniumFuelRod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("EncasedPlutoniumCell"), getIDbyMaterialName("PressureConversionCube")],
			inputQuantity: [20, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 120
		},
		// Consumed
		{
			name: "Black Powder",
			tier: 2,
			output: [getIDbyMaterialName("BlackPowder")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Sulfur")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Fine Black Powder",
			tier: 2,
			output: [getIDbyMaterialName("BlackPowder")],
			outputQuantity: [16],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("CompactedCoal")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Smokeless Powder",
			tier: 5,
			output: [getIDbyMaterialName("SmokelessPowder")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("BlackPowder"), getIDbyMaterialName("HeavyOilResidue")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Gas Filter",
			tier: 5,
			output: [getIDbyMaterialName("GasFilter")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Fabric")],
			inputQuantity: [5, 2, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Color Cartridge",
			tier: 1,
			output: [getIDbyMaterialName("ColorCartridge")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("FlowerPetals")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Beacon",
			tier: 5,
			output: [getIDbyMaterialName("Beacon")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronPlate"), getIDbyMaterialName("IronRod"), getIDbyMaterialName("Wire"), getIDbyMaterialName("Cable")],
			inputQuantity: [3, 1, 15, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Crystal Beacon",
			tier: 5,
			output: [getIDbyMaterialName("Beacon")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("SteelBeam"), getIDbyMaterialName("SteelPipe"), getIDbyMaterialName("CrystalOscillator")],
			inputQuantity: [4, 16, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Iodine Infused Filter",
			tier: 7,
			output: [getIDbyMaterialName("IodineInfusedFilter")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("GasFilter"), getIDbyMaterialName("Quickwire"), getIDbyMaterialName("AluminumCasing")],
			inputQuantity: [1, 8, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		// Ammos
		{
			name: "Iron Rebar",
			tier: 1,
			output: [getIDbyMaterialName("IronRebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronRod")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Stun Rebar",
			tier: 1,
			output: [getIDbyMaterialName("StunRebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronRebar"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [1, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Shatter Rebar",
			tier: 1,
			output: [getIDbyMaterialName("ShatterRebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronRebar"), getIDbyMaterialName("QuartzCrystal")],
			inputQuantity: [2, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Explosive Rebar",
			tier: 5,
			output: [getIDbyMaterialName("ExplosiveRebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("IronRebar"), getIDbyMaterialName("SmokelessPowder"), getIDbyMaterialName("SteelPipe")],
			inputQuantity: [2, 2, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 12
		}
	];