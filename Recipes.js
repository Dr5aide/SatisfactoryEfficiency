// Refering to Update 8
const recipes =
	[
		// Ingots
		{
			name: "Iron Ingot",
			tier: 0,
			output: [getIDbyMaterialName("Iron Ingot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Ore")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Iron Alloy Ingot",
			tier: 3,
			output: [getIDbyMaterialName("Iron Ingot")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Iron Ore"), getIDbyMaterialName("Copper Ore")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 6
		},
		{
			name: "Pure Iron Ingot",
			tier: 5,
			output: [getIDbyMaterialName("Iron Ingot")],
			outputQuantity: [13],
			input: [getIDbyMaterialName("Iron Ore"), getIDbyMaterialName("Water")],
			inputQuantity: [7, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Copper Ingot",
			tier: 0,
			output: [getIDbyMaterialName("Copper Ingot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Copper Ore")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Copper Alloy Ingot",
			tier: 3,
			output: [getIDbyMaterialName("Copper Ingot")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Copper Ore"), getIDbyMaterialName("Iron Ore")],
			inputQuantity: [10, 5],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Pure Copper Ingot",
			tier: 5,
			output: [getIDbyMaterialName("Copper Ingot")],
			outputQuantity: [13],
			input: [getIDbyMaterialName("Copper Ore"), getIDbyMaterialName("Water")],
			inputQuantity: [7, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Ingot",
			tier: 0,
			output: [getIDbyMaterialName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Caterium Ore")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Caterium Ingot",
			tier: 5,
			output: [getIDbyMaterialName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Caterium Ore"), getIDbyMaterialName("Water")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 5
		},
		{
			name: "Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("Steel Ingot")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Iron Ore"), getIDbyMaterialName("Coal")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("Steel Ingot")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Iron Ore"), getIDbyMaterialName("Compacted Coal")],
			inputQuantity: [6, 3],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 16
		},
		{
			name: "Solid Steel Ingot",
			tier: 3,
			output: [getIDbyMaterialName("Steel Ingot")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Iron Ingot"), getIDbyMaterialName("Coal")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 3
		},
		{
			name: "Coke Steel Ingot",
			tier: 5,
			output: [getIDbyMaterialName("Steel Ingot")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Iron Ore"), getIDbyMaterialName("Petroleum Coke")],
			inputQuantity: [15, 15],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Aluminum Ingot",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Ingot")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Aluminum Scrap"), getIDbyMaterialName("Silica")],
			inputQuantity: [6, 5],
			machine: getIDbyMachineName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Aluminum Ingot",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Ingot")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Aluminum Scrap")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Smeltery"),
			craftingTime_s: 2
		},
		// Minerals
		{
			name: "Concrete",
			tier: 0,
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
			tier: 5,
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
			tier: 0,
			output: [getIDbyMaterialName("Quartz Crystal")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Raw Quartz")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Pure Quartz Crystal",
			tier: 5,
			output: [getIDbyMaterialName("Quartz Crystal")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("Raw Quartz"), getIDbyMaterialName("Water")],
			inputQuantity: [9, 5],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Silica",
			tier: 0,
			output: [getIDbyMaterialName("Silica")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Raw Quartz")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Cheap Silica",
			tier: 2,
			output: [getIDbyMaterialName("Silica")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("Raw Quartz"), getIDbyMaterialName("Limestone")],
			inputQuantity: [3, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Copper Powder",
			tier: 8,
			output: [getIDbyMaterialName("Copper Powder")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [30],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Polymer Resin",
			tier: 5,
			output: [getIDbyMaterialName("Polymer Resin"), getIDbyMaterialName("Heavy Oil Residue")],
			outputQuantity: [13, 2],
			input: [getIDbyMaterialName("Crude Oil")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Petroleum Coke",
			tier: 5,
			output: [getIDbyMaterialName("Petroleum Coke")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Heavy Oil Residue")],
			inputQuantity: [4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Scrap",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Scrap"), getIDbyMaterialName("Water")],
			outputQuantity: [6, 2],
			input: [getIDbyMaterialName("Alumina Solution"), getIDbyMaterialName("Coal")],
			inputQuantity: [4, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 1
		},
		{
			name: "Electrode Aluminum Scrap",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Scrap"), getIDbyMaterialName("Water")],
			outputQuantity: [20, 7],
			input: [getIDbyMaterialName("Alumina Solution"), getIDbyMaterialName("Petroleum Coke")],
			inputQuantity: [12, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Instant Scrap",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Scrap"), getIDbyMaterialName("Water")],
			outputQuantity: [30, 5],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Coal"), getIDbyMaterialName("Sulfuric Acid"), getIDbyMaterialName("Water")],
			inputQuantity: [15, 10, 5, 6],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		// Liquids
		{
			name: "Heavy Oil Residue",
			tier: 5,
			output: [getIDbyMaterialName("Heavy Oil Residue"), getIDbyMaterialName("Polymer Resin")],
			outputQuantity: [4, 2],
			input: [getIDbyMaterialName("Crude Oil")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("Polymer Resin")],
			outputQuantity: [4, 3],
			input: [getIDbyMaterialName("Crude Oil")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Residual Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Fuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Heavy Oil Residue")],
			inputQuantity: [6],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Diluted Fuel",
			tier: 7,
			output: [getIDbyMaterialName("Fuel")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Heavy Oil Residue"), getIDbyMaterialName("Water")],
			inputQuantity: [5, 10],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		{
			name: "Liquid Biofuel",
			tier: 5,
			output: [getIDbyMaterialName("Liquid Biofuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Solid Biofuel"), getIDbyMaterialName("Water")],
			inputQuantity: [6, 3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Turbofuel",
			tier: 5,
			output: [getIDbyMaterialName("Turbofuel")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("Compacted Coal")],
			inputQuantity: [6, 4],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 16
		},
		{
			name: "Alumina Solution",
			tier: 7,
			output: [getIDbyMaterialName("Alumina Solution"), getIDbyMaterialName("Silica")],
			outputQuantity: [12, 5],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Water")],
			inputQuantity: [12, 18],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Sloppy Alumina",
			tier: 7,
			output: [getIDbyMaterialName("Alumina Solution")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Bauxite"), getIDbyMaterialName("Water")],
			inputQuantity: [10, 10],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Sulfuric Acid",
			tier: 7,
			output: [getIDbyMaterialName("Sulfuric Acid")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("Water")],
			inputQuantity: [5, 5],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Nitric Acid",
			tier: 8,
			output: [getIDbyMaterialName("Nitric Acid")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Nitrogen Gas"), getIDbyMaterialName("Water"), getIDbyMaterialName("Iron Plate")],
			inputQuantity: [12, 3, 1],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 6
		},
		// Standard Parts
		{
			name: "Iron Rod",
			tier: 0,
			output: [getIDbyMaterialName("Iron Rod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Steel Rod",
			tier: 3,
			output: [getIDbyMaterialName("Iron Rod")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Steel Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Screw",
			tier: 0,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Iron Rod")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Cast Screw",
			tier: 0,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Iron Ingot")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Steel Screw",
			tier: 3,
			output: [getIDbyMaterialName("Screw")],
			outputQuantity: [52],
			input: [getIDbyMaterialName("Steel Beam")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Iron Plate",
			tier: 0,
			output: [getIDbyMaterialName("Iron Plate")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Iron Ingot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Coated Iron Plate",
			tier: 5,
			output: [getIDbyMaterialName("Iron Plate")],
			outputQuantity: [15],
			input: [getIDbyMaterialName("Iron Ingot"), getIDbyMaterialName("Plastic")],
			inputQuantity: [10, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Steel Coated Plate",
			tier: 5,
			output: [getIDbyMaterialName("Iron Plate")],
			outputQuantity: [18],
			input: [getIDbyMaterialName("Steel Ingot"), getIDbyMaterialName("Plastic")],
			inputQuantity: [3, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Reinforced Iron Plate",
			tier: 2,
			output: [getIDbyMaterialName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Plate"), getIDbyMaterialName("Screw")],
			inputQuantity: [6, 12],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Adhered Iron Plate",
			tier: 5,
			output: [getIDbyMaterialName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Plate"), getIDbyMaterialName("Rubber")],
			inputQuantity: [3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Bolted Iron Plate",
			tier: 2,
			output: [getIDbyMaterialName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Iron Plate"), getIDbyMaterialName("Rubber")],
			inputQuantity: [18, 50],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Stiched Iron Plate",
			tier: 2,
			output: [getIDbyMaterialName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Iron Plate"), getIDbyMaterialName("Wire")],
			inputQuantity: [10, 20],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 32
		},
		{
			name: "Copper Sheet",
			tier: 2,
			output: [getIDbyMaterialName("Copper Sheet")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steamed Copper Sheet",
			tier: 5,
			output: [getIDbyMaterialName("Copper Sheet")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Copper Ingot"), getIDbyMaterialName("Water")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Alclad Aluminum Sheet",
			tier: 7,
			output: [getIDbyMaterialName("Alclad Aluminum Sheet")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Aluminum Ingot"), getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Casing",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Casing")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Aluminum Ingot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Alclad Casing",
			tier: 7,
			output: [getIDbyMaterialName("Aluminum Casing")],
			outputQuantity: [15],
			input: [getIDbyMaterialName("Aluminum Ingot"), getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [20, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Steel Pipe",
			tier: 3,
			output: [getIDbyMaterialName("Steel Pipe")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Steel Ingot")],
			inputQuantity: [3],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steel Beam",
			tier: 3,
			output: [getIDbyMaterialName("Steel Beam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Steel Ingot")],
			inputQuantity: [4],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Encased Industrial Beam",
			tier: 3,
			output: [getIDbyMaterialName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Steel Ingot"), getIDbyMaterialName("Concrete")],
			inputQuantity: [4, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 10
		},
		{
			name: "Encased Industrial Pipe",
			tier: 3,
			output: [getIDbyMaterialName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Concrete")],
			inputQuantity: [7, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Modular Frame",
			tier: 2,
			output: [getIDbyMaterialName("Modular Frame")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Reinforced Iron Plate"), getIDbyMaterialName("Iron Rod")],
			inputQuantity: [3, 12],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Bolted Frame",
			tier: 2,
			output: [getIDbyMaterialName("Modular Frame")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Reinforced Iron Plate"), getIDbyMaterialName("Screw")],
			inputQuantity: [3, 56],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Steeled Frame",
			tier: 3,
			output: [getIDbyMaterialName("Modular Frame")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Reinforced Iron Plate"), getIDbyMaterialName("Steel Pipe")],
			inputQuantity: [2, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Heavy Modular Frame",
			tier: 5,
			output: [getIDbyMaterialName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Modular Frame"), getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Encased Industrial Beam"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 15, 5, 100],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 30
		},
		{
			name: "Heavy Encased Frame",
			tier: 5,
			output: [getIDbyMaterialName("Heavy Modular Frame")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Modular Frame"), getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Encased Industrial Beam"), getIDbyMaterialName("Concrete")],
			inputQuantity: [8, 36, 10, 22],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Heavy Flexible Frame",
			tier: 5,
			output: [getIDbyMaterialName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Modular Frame"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Encased Industrial Beam"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 20, 3, 104],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Fused Modular Frame",
			tier: 8,
			output: [getIDbyMaterialName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Heavy Modular Frame"), getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Nitrogen Gas")],
			inputQuantity: [1, 50, 25],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 40
		},
		{
			name: "Heat-Fused Frame",
			tier: 8,
			output: [getIDbyMaterialName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Heavy Modular Frame"), getIDbyMaterialName("Aluminum Ingot"), getIDbyMaterialName("Nitric Acid"), getIDbyMaterialName("Fuel")],
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
			input: [getIDbyMaterialName("Polymer Resin"), getIDbyMaterialName("Water")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Plastic",
			tier: 5,
			output: [getIDbyMaterialName("Plastic"), getIDbyMaterialName("Heavy Oil Residue")],
			outputQuantity: [2, 1],
			input: [getIDbyMaterialName("Crude Oil")],
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
			input: [getIDbyMaterialName("Polymer Resin"), getIDbyMaterialName("Water")],
			inputQuantity: [6, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Rubber",
			tier: 5,
			output: [getIDbyMaterialName("Rubber"), getIDbyMaterialName("Heavy Oil Residue")],
			outputQuantity: [2, 2],
			input: [getIDbyMaterialName("Crude Oil")],
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
			input: [getIDbyMaterialName("Polymer Resin"), getIDbyMaterialName("Water")],
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
			input: [getIDbyMaterialName("Iron Rod"), getIDbyMaterialName("Screw")],
			inputQuantity: [5, 25],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Copper Rotor",
			tier: 2,
			output: [getIDbyMaterialName("Rotor")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Copper Sheet"), getIDbyMaterialName("Screw")],
			inputQuantity: [6, 52],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Steel Rotor",
			tier: 3,
			output: [getIDbyMaterialName("Rotor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Wire")],
			inputQuantity: [2, 6],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 36
		},
		{
			name: "Stator",
			tier: 3,
			output: [getIDbyMaterialName("Stator")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Wire")],
			inputQuantity: [3, 8],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Stator",
			tier: 3,
			output: [getIDbyMaterialName("Stator")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [4, 15],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Battery",
			tier: 7,
			output: [getIDbyMaterialName("Battery"), getIDbyMaterialName("Water")],
			outputQuantity: [1, 1.5],
			input: [getIDbyMaterialName("Sulfuric Acid"), getIDbyMaterialName("Alumina Solution"), getIDbyMaterialName("Aluminum Casing")],
			inputQuantity: [2.5, 2, 1],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 3
		},
		{
			name: "Battery",
			tier: 7,
			output: [getIDbyMaterialName("Battery")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("Alclad Aluminum Sheet"), getIDbyMaterialName("Plastic"), getIDbyMaterialName("Wire")],
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
			input: [getIDbyMaterialName("Rotor"), getIDbyMaterialName("Stator"), getIDbyMaterialName("Crystal Oscillator")],
			inputQuantity: [3, 3, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electric Motor",
			tier: 7,
			output: [getIDbyMaterialName("Motor")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Rotor")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Heat Sink",
			tier: 8,
			output: [getIDbyMaterialName("Heat Sink")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Alclad Aluminum Sheet"), getIDbyMaterialName("Copper Sheet")],
			inputQuantity: [5, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Heat Exchanger",
			tier: 8,
			output: [getIDbyMaterialName("Heat Sink")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Rubber")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Cooling System",
			tier: 8,
			output: [getIDbyMaterialName("Cooling System")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Heat Sink"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Water"), getIDbyMaterialName("Nitrogen Gas")],
			inputQuantity: [2, 2, 5, 25],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 10
		},
		{
			name: "Turbo Motor",
			tier: 8,
			output: [getIDbyMaterialName("Turbo Motor")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Cooling System"), getIDbyMaterialName("Radio Control Unit"), getIDbyMaterialName("Motor"), getIDbyMaterialName("Rubber")],
			inputQuantity: [4, 2, 4, 24],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Turbo Electric Motor",
			tier: 8,
			output: [getIDbyMaterialName("Turbo Motor")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Motor"), getIDbyMaterialName("Radio Control Unit"), getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Rotor")],
			inputQuantity: [7, 9, 5, 7],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Turbo Pressure Motor",
			tier: 8,
			output: [getIDbyMaterialName("Turbo Motor")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Motor"), getIDbyMaterialName("Pressure Conversion Cube"), getIDbyMaterialName("Packaged Nitrogen Gas"), getIDbyMaterialName("Stator")],
			inputQuantity: [4, 1, 24, 8],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		// Electronics
		{
			name: "Wire",
			tier: 0,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Iron Wire",
			tier: 0,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [9],
			input: [getIDbyMaterialName("Iron Ingot")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Wire",
			tier: 0,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [8],
			input: [getIDbyMaterialName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fused Wire",
			tier: 2,
			output: [getIDbyMaterialName("Wire")],
			outputQuantity: [30],
			input: [getIDbyMaterialName("Copper Ingot"), getIDbyMaterialName("Caterium Ingot")],
			inputQuantity: [4, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Cable",
			tier: 0,
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
			input: [getIDbyMaterialName("Wire"), getIDbyMaterialName("Heavy Oil Residue")],
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
			tier: 0,
			output: [getIDbyMaterialName("Quickwire")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Fused Quickwire",
			tier: 2,
			output: [getIDbyMaterialName("Quickwire")],
			outputQuantity: [12],
			input: [getIDbyMaterialName("Caterium Ingot"), getIDbyMaterialName("Copper Ingot")],
			inputQuantity: [1, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("Circuit Board")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Copper Sheet"), getIDbyMaterialName("Plastic")],
			inputQuantity: [2, 4],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Caterium Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("Circuit Board")],
			outputQuantity: [7],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Plastic")],
			inputQuantity: [30, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electrode Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("Circuit Board")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Rubber"), getIDbyMaterialName("Petroleum Coke")],
			inputQuantity: [9, 6],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Silicon Circuit Board",
			tier: 5,
			output: [getIDbyMaterialName("Circuit Board")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Copper Sheet"), getIDbyMaterialName("Silica")],
			inputQuantity: [11, 11],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "AI Limiter",
			tier: 7,
			output: [getIDbyMaterialName("AI Limiter")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Copper Sheet"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [5, 20],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "High-Speed Connector",
			tier: 7,
			output: [getIDbyMaterialName("High-Speed Connector")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Cable"), getIDbyMaterialName("Circuit Board")],
			inputQuantity: [56, 10, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Silicon High-Speed Connector",
			tier: 7,
			output: [getIDbyMaterialName("High-Speed Connector")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Silica"), getIDbyMaterialName("Circuit Board")],
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
			input: [getIDbyMaterialName("Circuit Board"), getIDbyMaterialName("Cable"), getIDbyMaterialName("Plastic"), getIDbyMaterialName("Screw")],
			inputQuantity: [10, 9, 18, 52],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Computer",
			tier: 5,
			output: [getIDbyMaterialName("Computer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Circuit Board"), getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Rubber")],
			inputQuantity: [7, 28, 12],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Crystal Computer",
			tier: 5,
			output: [getIDbyMaterialName("Computer")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Circuit Board"), getIDbyMaterialName("Crystal Oscillator")],
			inputQuantity: [8, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 64
		},
		{
			name: "Supercomputer",
			tier: 7,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Computer"), getIDbyMaterialName("AI Limiter"), getIDbyMaterialName("High-Speed Connector"), getIDbyMaterialName("Plastic")],
			inputQuantity: [2, 2, 3, 28],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "OC Supercomputer",
			tier: 7,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Radio Control Unit"), getIDbyMaterialName("Cooling System")],
			inputQuantity: [3, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Super-State Computer",
			tier: 8,
			output: [getIDbyMaterialName("Supercomputer")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Computer"), getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Battery"), getIDbyMaterialName("Wire")],
			inputQuantity: [3, 2, 20, 45],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 50
		},
		{
			name: "Radio Control Unit",
			tier: 7,
			output: [getIDbyMaterialName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Crystal Oscillator"), getIDbyMaterialName("Computer")],
			inputQuantity: [32, 1, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 48
		},
		{
			name: "Radio Connection Unit",
			tier: 7,
			output: [getIDbyMaterialName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Heat Sink"), getIDbyMaterialName("High-Speed Connector"), getIDbyMaterialName("Quartz Crystal")],
			inputQuantity: [4, 2, 12],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Radio Control System",
			tier: 7,
			output: [getIDbyMaterialName("Radio Control Unit")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Crystal Oscillator"), getIDbyMaterialName("Circuit Board"), getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Rubber")],
			inputQuantity: [1, 10, 60, 30],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 40
		},
		{
			name: "Crystal Oscillator",
			tier: 5,
			output: [getIDbyMaterialName("Crystal Oscillator")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Quartz Crystal"), getIDbyMaterialName("Cable"), getIDbyMaterialName("Reinforced Iron Plate")],
			inputQuantity: [36, 28, 5],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Insulated Crystal Oscillator",
			tier: 7,
			output: [getIDbyMaterialName("Crystal Oscillator")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Quartz Crystal"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("AI Limiter")],
			inputQuantity: [10, 7, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		// Containers
		{
			name: "Empty Canister",
			tier: 5,
			output: [getIDbyMaterialName("Empty Canister")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Plastic")],
			inputQuantity: [2],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Empty Fluid Tank",
			tier: 8,
			output: [getIDbyMaterialName("Empty Fluid Tank")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Aluminum Ingot")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 1
		},
		{
			name: "Pressure Conversion Cube",
			tier: 8,
			output: [getIDbyMaterialName("Pressure Conversion Cube")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Fused Modular Frame"), getIDbyMaterialName("Radio Control Unit")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Packaged Water",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Water")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Water"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Alumina Solution",
			tier: 7,
			output: [getIDbyMaterialName("Packaged Alumina Solution")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Alumina Solution"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 1
		},
		{
			name: "Packaged Sulfuric Acid",
			tier: 7,
			output: [getIDbyMaterialName("Packaged Sulfuric Acid")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Sulfuric Acid"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Nitric Acid",
			tier: 8,
			output: [getIDbyMaterialName("Packaged Nitric Acid")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Nitric Acid"), getIDbyMaterialName("Empty Fluid Tank")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Nitric Acid",
			tier: 8,
			output: [getIDbyMaterialName("Packaged Nitric Acid")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Nitrogen Gas"), getIDbyMaterialName("Empty Fluid Tank")],
			inputQuantity: [4, 1],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 1
		},
		//Fuels
		{
			name: "Biomass (Leaves)",
			tier: 0,
			output: [getIDbyMaterialName("Biomass")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Leaves")],
			inputQuantity: [10],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Biomass (Mycelia)",
			tier: 0,
			output: [getIDbyMaterialName("Biomass")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Mycelia")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Biomass (Wood)",
			tier: 0,
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
			output: [getIDbyMaterialName("Compacted Coal")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Sulfur")],
			inputQuantity: [5, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Packaged Oil",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Oil")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Crude Oil"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Heavy Oil Residue",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Heavy Oil Residue")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Heavy Oil Residue"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Solid Biofuel",
			tier: 0,
			output: [getIDbyMaterialName("Solid Biofuel")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Biomass")],
			inputQuantity: [8],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Fuel"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Diluted Packaged Fuel",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Heavy Oil Residue"), getIDbyMaterialName("Packaged Water")],
			inputQuantity: [1, 2],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Liquid Biofuel",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Liquid Biofuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Liquid Biofuel"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Turbofuel",
			tier: 5,
			output: [getIDbyMaterialName("Packaged Turbofuel")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Liquid Biofuel"), getIDbyMaterialName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Packager"),
			craftingTime_s: 6
		},
		{
			name: "Uranium Fuel Rod",
			tier: 8,
			output: [getIDbyMaterialName("Uranium Fuel Rod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Encased Uranium Cell"), getIDbyMaterialName("Encased Industrial Beam"), getIDbyMaterialName("Electromagnetic Control Rod")],
			inputQuantity: [50, 3, 5],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 150
		},
		{
			name: "Uranium Fuel Unit",
			tier: 8,
			output: [getIDbyMaterialName("Uranium Fuel Rod")],
			outputQuantity: [3],
			input: [getIDbyMaterialName("Encased Uranium Cell"), getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Crystal Oscillator"), getIDbyMaterialName("Beacon")],
			inputQuantity: [100, 10, 3, 6],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 300
		},
		{
			name: "Plutonium Fuel Rod",
			tier: 8,
			output: [getIDbyMaterialName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Encased Plutonium Cell"), getIDbyMaterialName("Steel Beam"), getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Heat Sink")],
			inputQuantity: [30, 18, 6, 10],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 240
		},
		{
			name: "Plutonium Fuel Unit",
			tier: 8,
			output: [getIDbyMaterialName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Encased Plutonium Cell"), getIDbyMaterialName("Pressure Conversion Cube")],
			inputQuantity: [20, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 120
		},
		// Consumed
		{
			name: "Black Powder",
			tier: 2,
			output: [getIDbyMaterialName("Black Powder")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Sulfur")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Fine Black Powder",
			tier: 2,
			output: [getIDbyMaterialName("Black Powder")],
			outputQuantity: [16],
			input: [getIDbyMaterialName("Sulfur"), getIDbyMaterialName("Compacted Coal")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Smokeless Powder",
			tier: 5,
			output: [getIDbyMaterialName("Smokeless Powder")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Black Powder"), getIDbyMaterialName("Heavy Oil Residue")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Gas Filter",
			tier: 5,
			output: [getIDbyMaterialName("Gas Filter")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Coal"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Fabric")],
			inputQuantity: [5, 2, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Color Cartridge",
			tier: 2,
			output: [getIDbyMaterialName("Color Cartridge")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Flower Petals")],
			inputQuantity: [5],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Beacon",
			tier: 5,
			output: [getIDbyMaterialName("Beacon")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Plate"), getIDbyMaterialName("Iron Rod"), getIDbyMaterialName("Wire"), getIDbyMaterialName("Cable")],
			inputQuantity: [3, 1, 15, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Crystal Beacon",
			tier: 5,
			output: [getIDbyMaterialName("Beacon")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Steel Beam"), getIDbyMaterialName("Steel Pipe"), getIDbyMaterialName("Crystal Oscillator")],
			inputQuantity: [4, 16, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Iodine Infused Filter",
			tier: 7,
			output: [getIDbyMaterialName("Iodine Infused Filter")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Gas Filter"), getIDbyMaterialName("Quickwire"), getIDbyMaterialName("Aluminum Casing")],
			inputQuantity: [1, 8, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		// Ammos
		{
			name: "Iron Rebar",
			tier: 0,
			output: [getIDbyMaterialName("Iron Rebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Rod")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Stun Rebar",
			tier: 2,
			output: [getIDbyMaterialName("Stun Rebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Rebar"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [1, 5],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Shatter Rebar",
			tier: 2,
			output: [getIDbyMaterialName("Shatter Rebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Rebar"), getIDbyMaterialName("Quartz Crystal")],
			inputQuantity: [2, 3],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Explosive Rebar",
			tier: 5,
			output: [getIDbyMaterialName("Explosive Rebar")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Iron Rebar"), getIDbyMaterialName("Smokeless Powder"), getIDbyMaterialName("Steel Pipe")],
			inputQuantity: [2, 2, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Rifle Ammo",
			tier: 5,
			output: [getIDbyMaterialName("Rifle Ammo")],
			outputQuantity: [15],
			input: [getIDbyMaterialName("Copper Sheet"), getIDbyMaterialName("Smokeless Powder"), getIDbyMaterialName("Steel Pipe")],
			inputQuantity: [3, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Homing Rifle Ammo",
			tier: 5,
			output: [getIDbyMaterialName("Homing Rifle Ammo")],
			outputQuantity: [10],
			input: [getIDbyMaterialName("Rifle Ammo"), getIDbyMaterialName("High-Speed Connector")],
			inputQuantity: [20, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 5,
			output: [getIDbyMaterialName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getIDbyMaterialName("Rifle Ammo"), getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Packaged Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 7,
			output: [getIDbyMaterialName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getIDbyMaterialName("Rifle Ammo"), getIDbyMaterialName("Aluminum Casing"), getIDbyMaterialName("Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Nobelisk",
			tier: 3,
			output: [getIDbyMaterialName("Nobelisk")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Black Powder"), getIDbyMaterialName("Steel Pipe")],
			inputQuantity: [2, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Gas Nobelisk",
			tier: 3,
			output: [getIDbyMaterialName("Gas Nobelisk")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Nobelisk"), getIDbyMaterialName("Biomass")],
			inputQuantity: [1, 10],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Pulse Nobelisk",
			tier: 5,
			output: [getIDbyMaterialName("Pulse Nobelisk")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Nobelisk"), getIDbyMaterialName("Crystal Oscillator")],
			inputQuantity: [5, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Cluster Nobelisk",
			tier: 5,
			output: [getIDbyMaterialName("Cluster Nobelisk")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Nobelisk"), getIDbyMaterialName("Smokeless Powder")],
			inputQuantity: [3, 4],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Nuke Nobelisk",
			tier: 8,
			output: [getIDbyMaterialName("Nuke Nobelisk")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Nobelisk"), getIDbyMaterialName("Encased Uranium Cell"), getIDbyMaterialName("Smokeless Powder"), getIDbyMaterialName("AI Limiter")],
			inputQuantity: [5, 20, 10, 6],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		// Nuclear
		{
			name: "Electromagnetic Control Rod",
			tier: 8,
			output: [getIDbyMaterialName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Stator"), getIDbyMaterialName("AI Limiter")],
			inputQuantity: [3, 2],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Electromagnetic Connection Rod",
			tier: 8,
			output: [getIDbyMaterialName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Stator"), getIDbyMaterialName("High-Speed Connector")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Encased Uranium Cell",
			tier: 8,
			output: [getIDbyMaterialName("Encased Uranium Cell"), getIDbyMaterialName("Sulfuric Acid")],
			outputQuantity: [5, 2],
			input: [getIDbyMaterialName("Uranium"), getIDbyMaterialName("Concrete"), getIDbyMaterialName("Sulfuric Acid")],
			inputQuantity: [10, 3, 8],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Infused Uranium Cell",
			tier: 8,
			output: [getIDbyMaterialName("Encased Uranium Cell")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Uranium"), getIDbyMaterialName("Silica"), getIDbyMaterialName("Sulfur"), getIDbyMaterialName("Quickwire")],
			inputQuantity: [5, 3, 5, 15],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Non-fissile Uranium",
			tier: 8,
			output: [getIDbyMaterialName("Non-fissile Uranium"), getIDbyMaterialName("Water")],
			outputQuantity: [20, 6],
			input: [getIDbyMaterialName("Uranium Waste"), getIDbyMaterialName("Silica"), getIDbyMaterialName("Nitric Acid"), getIDbyMaterialName("Sulfuric Acid")],
			inputQuantity: [15, 10, 6, 6],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 24
		},
		{
			name: "Fertile Uranium",
			tier: 8,
			output: [getIDbyMaterialName("Non-fissile Uranium"), getIDbyMaterialName("Water")],
			outputQuantity: [20, 8],
			input: [getIDbyMaterialName("Uranium"), getIDbyMaterialName("Uranium Waste"), getIDbyMaterialName("Nitric Acid"), getIDbyMaterialName("Sulfuric Acid")],
			inputQuantity: [5, 5, 3, 5],
			machine: getIDbyMachineName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Plutonium Pellet",
			tier: 8,
			output: [getIDbyMaterialName("Plutonium Pellet")],
			outputQuantity: [30],
			input: [getIDbyMaterialName("Non-fissile Uranium"), getIDbyMaterialName("Uranium Waste")],
			inputQuantity: [100, 25],
			machine: getIDbyMachineName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 60
		},
		{
			name: "Encased Plutonium Cell",
			tier: 8,
			output: [getIDbyMaterialName("Encased Plutonium Cell")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Plutonium Pellet"), getIDbyMaterialName("Concrete")],
			inputQuantity: [2, 4],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Instant Plutonium Cell",
			tier: 8,
			output: [getIDbyMaterialName("Encased Plutonium Cell")],
			outputQuantity: [20],
			input: [getIDbyMaterialName("Non-fissile Uranium"), getIDbyMaterialName("Aluminum Casing")],
			inputQuantity: [150, 20],
			machine: getIDbyMachineName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 120
		},
		// Special
		{
			name: "Power Shard (1)",
			tier: 0,
			output: [getIDbyMaterialName("Power Shard")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Blue Power Slug")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Power Shard (2)",
			tier: 0,
			output: [getIDbyMaterialName("Power Shard")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Yellow Power Slug")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Power Shard (3)",
			tier: 0,
			output: [getIDbyMaterialName("Power Shard")],
			outputQuantity: [5],
			input: [getIDbyMaterialName("Purple Power Slug")],
			inputQuantity: [1],
			machine: getIDbyMachineName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Smart Plating",
			tier: 2,
			output: [getIDbyMaterialName("Smart Plating")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Reinforced Iron Plate"), getIDbyMaterialName("Rotor")],
			inputQuantity: [1, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Plastic Smart Plating",
			tier: 5,
			output: [getIDbyMaterialName("Smart Plating")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Reinforced Iron Plate"), getIDbyMaterialName("Rotor"), getIDbyMaterialName("Plastic")],
			inputQuantity: [1, 1, 3],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Versatile Framework",
			tier: 3,
			output: [getIDbyMaterialName("Versatile Framework")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Modular Frame"), getIDbyMaterialName("Steel Beam")],
			inputQuantity: [1, 12],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Flexible Framework",
			tier: 5,
			output: [getIDbyMaterialName("Versatile Framework")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Modular Frame"), getIDbyMaterialName("Steel Beam"), getIDbyMaterialName("Rubber")],
			inputQuantity: [1, 6, 8],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Automated Wiring",
			tier: 4,
			output: [getIDbyMaterialName("Automated Wiring")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Stator"), getIDbyMaterialName("Cable")],
			inputQuantity: [1, 20],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Automated Speed Wiring",
			tier: 5,
			output: [getIDbyMaterialName("Automated Wiring")],
			outputQuantity: [4],
			input: [getIDbyMaterialName("Stator"), getIDbyMaterialName("Wire"), getIDbyMaterialName("High-Speed Connector")],
			inputQuantity: [2, 40, 1],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Modular Engine",
			tier: 5,
			output: [getIDbyMaterialName("Modular Engine")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Motor"), getIDbyMaterialName("Rubber"), getIDbyMaterialName("Smart Plating")],
			inputQuantity: [2, 15, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 60
		},
		{
			name: "Adaptive Control Unit",
			tier: 5,
			output: [getIDbyMaterialName("Adaptive Control Unit")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Automated Wiring"), getIDbyMaterialName("Circuit Board"), getIDbyMaterialName("Heavy Modular Frame"), getIDbyMaterialName("Computer")],
			inputQuantity: [15, 10, 2, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Assembly Director System",
			tier: 7,
			output: [getIDbyMaterialName("Assembly Director System")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Adaptive Control Unit"), getIDbyMaterialName("Supercomputer")],
			inputQuantity: [2, 1],
			machine: getIDbyMachineName("Assembler"),
			craftingTime_s: 80
		},
		{
			name: "Magnetic Field Generator",
			tier: 8,
			output: [getIDbyMaterialName("Magnetic Field Generator")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Versatile Framework"), getIDbyMaterialName("Electromagnetic Control Rod"), getIDbyMaterialName("Battery")],
			inputQuantity: [5, 2, 10],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Thermal Propulsion Rocket",
			tier: 8,
			output: [getIDbyMaterialName("Thermal Propulsion Rocket")],
			outputQuantity: [2],
			input: [getIDbyMaterialName("Modular Engine"), getIDbyMaterialName("Turbo Motor"), getIDbyMaterialName("Cooling System"), getIDbyMaterialName("Fused Modular Frame")],
			inputQuantity: [5, 2, 6, 2],
			machine: getIDbyMachineName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Nuclear Pasta",
			tier: 8,
			output: [getIDbyMaterialName("Nuclear Pasta")],
			outputQuantity: [1],
			input: [getIDbyMaterialName("Copper Powder"), getIDbyMaterialName("Pressure Conversion Cube")],
			inputQuantity: [200, 1],
			machine: getIDbyMachineName("Particle Accelerator (Nuclear Pasta)"),
			craftingTime_s: 120
		}
	];