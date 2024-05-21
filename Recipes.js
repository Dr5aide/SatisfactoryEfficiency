// Refering to Update 8
const recipes =
	[
		// Ingots
		{
			name: "Iron Ingot",
			tier: 0,
			output: [getMaterialIndexbyName("Iron Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Ore")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Iron Alloy Ingot",
			tier: 3,
			output: [getMaterialIndexbyName("Iron Ingot")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Iron Ore"), getMaterialIndexbyName("Copper Ore")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 6
		},
		{
			name: "Pure Iron Ingot",
			tier: 5,
			output: [getMaterialIndexbyName("Iron Ingot")],
			outputQuantity: [13],
			input: [getMaterialIndexbyName("Iron Ore"), getMaterialIndexbyName("Water")],
			inputQuantity: [7, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Copper Ingot",
			tier: 0,
			output: [getMaterialIndexbyName("Copper Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Copper Ore")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Copper Alloy Ingot",
			tier: 3,
			output: [getMaterialIndexbyName("Copper Ingot")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Copper Ore"), getMaterialIndexbyName("Iron Ore")],
			inputQuantity: [10, 5],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Pure Copper Ingot",
			tier: 5,
			output: [getMaterialIndexbyName("Copper Ingot")],
			outputQuantity: [13],
			input: [getMaterialIndexbyName("Copper Ore"), getMaterialIndexbyName("Water")],
			inputQuantity: [7, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Ingot",
			tier: 0,
			output: [getMaterialIndexbyName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Caterium Ore")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 4
		},
		{
			name: "Pure Caterium Ingot",
			tier: 5,
			output: [getMaterialIndexbyName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Caterium Ore"), getMaterialIndexbyName("Water")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 5
		},
		{
			name: "Steel Ingot",
			tier: 3,
			output: [getMaterialIndexbyName("Steel Ingot")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Iron Ore"), getMaterialIndexbyName("Coal")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Steel Ingot",
			tier: 3,
			output: [getMaterialIndexbyName("Steel Ingot")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Iron Ore"), getMaterialIndexbyName("Compacted Coal")],
			inputQuantity: [6, 3],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 16
		},
		{
			name: "Solid Steel Ingot",
			tier: 3,
			output: [getMaterialIndexbyName("Steel Ingot")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Iron Ingot"), getMaterialIndexbyName("Coal")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 3
		},
		{
			name: "Coke Steel Ingot",
			tier: 5,
			output: [getMaterialIndexbyName("Steel Ingot")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Iron Ore"), getMaterialIndexbyName("Petroleum Coke")],
			inputQuantity: [15, 15],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Aluminum Ingot",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Ingot")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Aluminum Scrap"), getMaterialIndexbyName("Silica")],
			inputQuantity: [6, 5],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Aluminum Ingot",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Aluminum Scrap")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		// Minerals
		{
			name: "Concrete",
			tier: 0,
			output: [getMaterialIndexbyName("Concrete")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Limestone")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fine Concrete",
			tier: 2,
			output: [getMaterialIndexbyName("Concrete")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Limestone"), getMaterialIndexbyName("Silica")],
			inputQuantity: [12, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Wet Concrete",
			tier: 5,
			output: [getMaterialIndexbyName("Concrete")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Limestone"), getMaterialIndexbyName("Water")],
			inputQuantity: [6, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Rubber Concrete",
			tier: 5,
			output: [getMaterialIndexbyName("Concrete")],
			outputQuantity: [9],
			input: [getMaterialIndexbyName("Limestone"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [10, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quartz Crystal",
			tier: 0,
			output: [getMaterialIndexbyName("Quartz Crystal")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Raw Quartz")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Pure Quartz Crystal",
			tier: 5,
			output: [getMaterialIndexbyName("Quartz Crystal")],
			outputQuantity: [7],
			input: [getMaterialIndexbyName("Raw Quartz"), getMaterialIndexbyName("Water")],
			inputQuantity: [9, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Silica",
			tier: 0,
			output: [getMaterialIndexbyName("Silica")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Raw Quartz")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Cheap Silica",
			tier: 2,
			output: [getMaterialIndexbyName("Silica")],
			outputQuantity: [7],
			input: [getMaterialIndexbyName("Raw Quartz"), getMaterialIndexbyName("Limestone")],
			inputQuantity: [3, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Copper Powder",
			tier: 8,
			output: [getMaterialIndexbyName("Copper Powder")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [30],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Polymer Resin",
			tier: 5,
			output: [getMaterialIndexbyName("Polymer Resin"), getMaterialIndexbyName("Heavy Oil Residue")],
			outputQuantity: [13, 2],
			input: [getMaterialIndexbyName("Crude Oil")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Petroleum Coke",
			tier: 5,
			output: [getMaterialIndexbyName("Petroleum Coke")],
			outputQuantity: [12],
			input: [getMaterialIndexbyName("Heavy Oil Residue")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Scrap",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Scrap"), getMaterialIndexbyName("Water")],
			outputQuantity: [6, 2],
			input: [getMaterialIndexbyName("Alumina Solution"), getMaterialIndexbyName("Coal")],
			inputQuantity: [4, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 1
		},
		{
			name: "Electrode Aluminum Scrap",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Scrap"), getMaterialIndexbyName("Water")],
			outputQuantity: [20, 7],
			input: [getMaterialIndexbyName("Alumina Solution"), getMaterialIndexbyName("Petroleum Coke")],
			inputQuantity: [12, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Instant Scrap",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Scrap"), getMaterialIndexbyName("Water")],
			outputQuantity: [30, 5],
			input: [getMaterialIndexbyName("Bauxite"), getMaterialIndexbyName("Coal"), getMaterialIndexbyName("Sulfuric Acid"), getMaterialIndexbyName("Water")],
			inputQuantity: [15, 10, 5, 6],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		// Liquids
		{
			name: "Heavy Oil Residue",
			tier: 5,
			output: [getMaterialIndexbyName("Heavy Oil Residue"), getMaterialIndexbyName("Polymer Resin")],
			outputQuantity: [4, 2],
			input: [getMaterialIndexbyName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Fuel",
			tier: 5,
			output: [getMaterialIndexbyName("Fuel"), getMaterialIndexbyName("Polymer Resin")],
			outputQuantity: [4, 3],
			input: [getMaterialIndexbyName("Crude Oil")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Residual Fuel",
			tier: 5,
			output: [getMaterialIndexbyName("Fuel")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Heavy Oil Residue")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Diluted Fuel",
			tier: 7,
			output: [getMaterialIndexbyName("Fuel")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Heavy Oil Residue"), getMaterialIndexbyName("Water")],
			inputQuantity: [5, 10],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		{
			name: "Liquid Biofuel",
			tier: 5,
			output: [getMaterialIndexbyName("Liquid Biofuel")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Solid Biofuel"), getMaterialIndexbyName("Water")],
			inputQuantity: [6, 3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Turbofuel",
			tier: 5,
			output: [getMaterialIndexbyName("Turbofuel")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Fuel"), getMaterialIndexbyName("Compacted Coal")],
			inputQuantity: [6, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 16
		},
		{
			name: "Alumina Solution",
			tier: 7,
			output: [getMaterialIndexbyName("Alumina Solution"), getMaterialIndexbyName("Silica")],
			outputQuantity: [12, 5],
			input: [getMaterialIndexbyName("Bauxite"), getMaterialIndexbyName("Water")],
			inputQuantity: [12, 18],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Sloppy Alumina",
			tier: 7,
			output: [getMaterialIndexbyName("Alumina Solution")],
			outputQuantity: [12],
			input: [getMaterialIndexbyName("Bauxite"), getMaterialIndexbyName("Water")],
			inputQuantity: [10, 10],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Sulfuric Acid",
			tier: 7,
			output: [getMaterialIndexbyName("Sulfuric Acid")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Sulfur"), getMaterialIndexbyName("Water")],
			inputQuantity: [5, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Nitric Acid",
			tier: 8,
			output: [getMaterialIndexbyName("Nitric Acid")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Nitrogen Gas"), getMaterialIndexbyName("Water"), getMaterialIndexbyName("Iron Plate")],
			inputQuantity: [12, 3, 1],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		// Standard Parts
		{
			name: "Iron Rod",
			tier: 0,
			output: [getMaterialIndexbyName("Iron Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Steel Rod",
			tier: 3,
			output: [getMaterialIndexbyName("Iron Rod")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Steel Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Screw",
			tier: 0,
			output: [getMaterialIndexbyName("Screw")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Iron Rod")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Cast Screw",
			tier: 0,
			output: [getMaterialIndexbyName("Screw")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Iron Ingot")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Steel Screw",
			tier: 3,
			output: [getMaterialIndexbyName("Screw")],
			outputQuantity: [52],
			input: [getMaterialIndexbyName("Steel Beam")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Iron Plate",
			tier: 0,
			output: [getMaterialIndexbyName("Iron Plate")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Iron Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Coated Iron Plate",
			tier: 5,
			output: [getMaterialIndexbyName("Iron Plate")],
			outputQuantity: [15],
			input: [getMaterialIndexbyName("Iron Ingot"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [10, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Steel Coated Plate",
			tier: 5,
			output: [getMaterialIndexbyName("Iron Plate")],
			outputQuantity: [18],
			input: [getMaterialIndexbyName("Steel Ingot"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Reinforced Iron Plate",
			tier: 2,
			output: [getMaterialIndexbyName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Plate"), getMaterialIndexbyName("Screw")],
			inputQuantity: [6, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Adhered Iron Plate",
			tier: 5,
			output: [getMaterialIndexbyName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Plate"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Bolted Iron Plate",
			tier: 5,
			output: [getMaterialIndexbyName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Iron Plate"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [18, 50],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Stiched Iron Plate",
			tier: 2,
			output: [getMaterialIndexbyName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Iron Plate"), getMaterialIndexbyName("Wire")],
			inputQuantity: [10, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 32
		},
		{
			name: "Copper Sheet",
			tier: 2,
			output: [getMaterialIndexbyName("Copper Sheet")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steamed Copper Sheet",
			tier: 5,
			output: [getMaterialIndexbyName("Copper Sheet")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Copper Ingot"), getMaterialIndexbyName("Water")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Alclad Aluminum Sheet",
			tier: 7,
			output: [getMaterialIndexbyName("Alclad Aluminum Sheet")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Aluminum Ingot"), getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Casing",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Casing")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Aluminum Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Alclad Casing",
			tier: 7,
			output: [getMaterialIndexbyName("Aluminum Casing")],
			outputQuantity: [15],
			input: [getMaterialIndexbyName("Aluminum Ingot"), getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [20, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Steel Pipe",
			tier: 3,
			output: [getMaterialIndexbyName("Steel Pipe")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Steel Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steel Beam",
			tier: 3,
			output: [getMaterialIndexbyName("Steel Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Steel Ingot")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Encased Industrial Beam",
			tier: 3,
			output: [getMaterialIndexbyName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Steel Ingot"), getMaterialIndexbyName("Concrete")],
			inputQuantity: [4, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 10
		},
		{
			name: "Encased Industrial Pipe",
			tier: 3,
			output: [getMaterialIndexbyName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Concrete")],
			inputQuantity: [7, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Modular Frame",
			tier: 2,
			output: [getMaterialIndexbyName("Modular Frame")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Reinforced Iron Plate"), getMaterialIndexbyName("Iron Rod")],
			inputQuantity: [3, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Bolted Frame",
			tier: 2,
			output: [getMaterialIndexbyName("Modular Frame")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Reinforced Iron Plate"), getMaterialIndexbyName("Screw")],
			inputQuantity: [3, 56],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Steeled Frame",
			tier: 3,
			output: [getMaterialIndexbyName("Modular Frame")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Reinforced Iron Plate"), getMaterialIndexbyName("Steel Pipe")],
			inputQuantity: [2, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Heavy Modular Frame",
			tier: 5,
			output: [getMaterialIndexbyName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Modular Frame"), getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Encased Industrial Beam"), getMaterialIndexbyName("Screw")],
			inputQuantity: [5, 15, 5, 100],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 30
		},
		{
			name: "Heavy Encased Frame",
			tier: 5,
			output: [getMaterialIndexbyName("Heavy Modular Frame")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Modular Frame"), getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Encased Industrial Beam"), getMaterialIndexbyName("Concrete")],
			inputQuantity: [8, 36, 10, 22],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Heavy Flexible Frame",
			tier: 5,
			output: [getMaterialIndexbyName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Modular Frame"), getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Encased Industrial Beam"), getMaterialIndexbyName("Screw")],
			inputQuantity: [5, 20, 3, 104],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Fused Modular Frame",
			tier: 8,
			output: [getMaterialIndexbyName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Heavy Modular Frame"), getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Nitrogen Gas")],
			inputQuantity: [1, 50, 25],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 40
		},
		{
			name: "Heat-Fused Frame",
			tier: 8,
			output: [getMaterialIndexbyName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Heavy Modular Frame"), getMaterialIndexbyName("Aluminum Ingot"), getMaterialIndexbyName("Nitric Acid"), getMaterialIndexbyName("Fuel")],
			inputQuantity: [1, 50, 8, 10],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 20
		},
		{
			name: "Fabric",
			tier: 2,
			output: [getMaterialIndexbyName("Fabric")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Mycelia"), getMaterialIndexbyName("Biomass")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Polyester Fabric",
			tier: 5,
			output: [getMaterialIndexbyName("Fabric")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Polymer Resin"), getMaterialIndexbyName("Water")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Plastic",
			tier: 5,
			output: [getMaterialIndexbyName("Plastic"), getMaterialIndexbyName("Heavy Oil Residue")],
			outputQuantity: [2, 1],
			input: [getMaterialIndexbyName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Plastic",
			tier: 5,
			output: [getMaterialIndexbyName("Plastic")],
			outputQuantity: [12],
			input: [getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Fuel")],
			inputQuantity: [6, 6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Plastic",
			tier: 5,
			output: [getMaterialIndexbyName("Plastic")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Polymer Resin"), getMaterialIndexbyName("Water")],
			inputQuantity: [6, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Rubber",
			tier: 5,
			output: [getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Heavy Oil Residue")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexbyName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Rubber",
			tier: 5,
			output: [getMaterialIndexbyName("Rubber")],
			outputQuantity: [12],
			input: [getMaterialIndexbyName("Plastic"), getMaterialIndexbyName("Fuel")],
			inputQuantity: [6, 6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Rubber",
			tier: 5,
			output: [getMaterialIndexbyName("Rubber")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Polymer Resin"), getMaterialIndexbyName("Water")],
			inputQuantity: [4, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		// Industrial Parts
		{
			name: "Rotor",
			tier: 2,
			output: [getMaterialIndexbyName("Rotor")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Rod"), getMaterialIndexbyName("Screw")],
			inputQuantity: [5, 25],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Copper Rotor",
			tier: 2,
			output: [getMaterialIndexbyName("Rotor")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Copper Sheet"), getMaterialIndexbyName("Screw")],
			inputQuantity: [6, 52],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Steel Rotor",
			tier: 3,
			output: [getMaterialIndexbyName("Rotor")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Wire")],
			inputQuantity: [2, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 36
		},
		{
			name: "Stator",
			tier: 3,
			output: [getMaterialIndexbyName("Stator")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Wire")],
			inputQuantity: [3, 8],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Stator",
			tier: 3,
			output: [getMaterialIndexbyName("Stator")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Quickwire")],
			inputQuantity: [4, 15],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Battery",
			tier: 7,
			output: [getMaterialIndexbyName("Battery"), getMaterialIndexbyName("Water")],
			outputQuantity: [1, 1.5],
			input: [getMaterialIndexbyName("Sulfuric Acid"), getMaterialIndexbyName("Alumina Solution"), getMaterialIndexbyName("Aluminum Casing")],
			inputQuantity: [2.5, 2, 1],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 3
		},
		{
			name: "Battery",
			tier: 7,
			output: [getMaterialIndexbyName("Battery")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Sulfur"), getMaterialIndexbyName("Alclad Aluminum Sheet"), getMaterialIndexbyName("Plastic"), getMaterialIndexbyName("Wire")],
			inputQuantity: [6, 7, 8, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Motor",
			tier: 4,
			output: [getMaterialIndexbyName("Motor")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Rotor"), getMaterialIndexbyName("Stator")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Rigour Motor",
			tier: 5,
			output: [getMaterialIndexbyName("Motor")],
			outputQuantity: [6],
			input: [getMaterialIndexbyName("Rotor"), getMaterialIndexbyName("Stator"), getMaterialIndexbyName("Crystal Oscillator")],
			inputQuantity: [3, 3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electric Motor",
			tier: 7,
			output: [getMaterialIndexbyName("Motor")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Rotor")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Heat Sink",
			tier: 8,
			output: [getMaterialIndexbyName("Heat Sink")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Alclad Aluminum Sheet"), getMaterialIndexbyName("Copper Sheet")],
			inputQuantity: [5, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Heat Exchanger",
			tier: 8,
			output: [getMaterialIndexbyName("Heat Sink")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Cooling System",
			tier: 8,
			output: [getMaterialIndexbyName("Cooling System")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Heat Sink"), getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Water"), getMaterialIndexbyName("Nitrogen Gas")],
			inputQuantity: [2, 2, 5, 25],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 10
		},
		{
			name: "Turbo Motor",
			tier: 8,
			output: [getMaterialIndexbyName("Turbo Motor")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Cooling System"), getMaterialIndexbyName("Radio Control Unit"), getMaterialIndexbyName("Motor"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [4, 2, 4, 24],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Turbo Electric Motor",
			tier: 8,
			output: [getMaterialIndexbyName("Turbo Motor")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Motor"), getMaterialIndexbyName("Radio Control Unit"), getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Rotor")],
			inputQuantity: [7, 9, 5, 7],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Turbo Pressure Motor",
			tier: 8,
			output: [getMaterialIndexbyName("Turbo Motor")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Motor"), getMaterialIndexbyName("Pressure Conversion Cube"), getMaterialIndexbyName("Packaged Nitrogen Gas"), getMaterialIndexbyName("Stator")],
			inputQuantity: [4, 1, 24, 8],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		// Electronics
		{
			name: "Wire",
			tier: 0,
			output: [getMaterialIndexbyName("Wire")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Iron Wire",
			tier: 0,
			output: [getMaterialIndexbyName("Wire")],
			outputQuantity: [9],
			input: [getMaterialIndexbyName("Iron Ingot")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Wire",
			tier: 0,
			output: [getMaterialIndexbyName("Wire")],
			outputQuantity: [8],
			input: [getMaterialIndexbyName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fused Wire",
			tier: 2,
			output: [getMaterialIndexbyName("Wire")],
			outputQuantity: [30],
			input: [getMaterialIndexbyName("Copper Ingot"), getMaterialIndexbyName("Caterium Ingot")],
			inputQuantity: [4, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Cable",
			tier: 0,
			output: [getMaterialIndexbyName("Cable")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Wire")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Coated Cable",
			tier: 5,
			output: [getMaterialIndexbyName("Cable")],
			outputQuantity: [9],
			input: [getMaterialIndexbyName("Wire"), getMaterialIndexbyName("Heavy Oil Residue")],
			inputQuantity: [5, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Insulated Cable",
			tier: 5,
			output: [getMaterialIndexbyName("Cable")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Wire"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [9, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Cable",
			tier: 5,
			output: [getMaterialIndexbyName("Cable")],
			outputQuantity: [11],
			input: [getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Quickwire",
			tier: 0,
			output: [getMaterialIndexbyName("Quickwire")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Fused Quickwire",
			tier: 2,
			output: [getMaterialIndexbyName("Quickwire")],
			outputQuantity: [12],
			input: [getMaterialIndexbyName("Caterium Ingot"), getMaterialIndexbyName("Copper Ingot")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Circuit Board",
			tier: 5,
			output: [getMaterialIndexbyName("Circuit Board")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Copper Sheet"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [2, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Caterium Circuit Board",
			tier: 5,
			output: [getMaterialIndexbyName("Circuit Board")],
			outputQuantity: [7],
			input: [getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [30, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electrode Circuit Board",
			tier: 5,
			output: [getMaterialIndexbyName("Circuit Board")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Petroleum Coke")],
			inputQuantity: [9, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Silicon Circuit Board",
			tier: 5,
			output: [getMaterialIndexbyName("Circuit Board")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Copper Sheet"), getMaterialIndexbyName("Silica")],
			inputQuantity: [11, 11],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "AI Limiter",
			tier: 7,
			output: [getMaterialIndexbyName("AI Limiter")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Copper Sheet"), getMaterialIndexbyName("Quickwire")],
			inputQuantity: [5, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "High-Speed Connector",
			tier: 7,
			output: [getMaterialIndexbyName("High-Speed Connector")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Cable"), getMaterialIndexbyName("Circuit Board")],
			inputQuantity: [56, 10, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Silicon High-Speed Connector",
			tier: 7,
			output: [getMaterialIndexbyName("High-Speed Connector")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Silica"), getMaterialIndexbyName("Circuit Board")],
			inputQuantity: [60, 25, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 40
		},
		// Communications
		{
			name: "Computer",
			tier: 5,
			output: [getMaterialIndexbyName("Computer")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Circuit Board"), getMaterialIndexbyName("Cable"), getMaterialIndexbyName("Plastic"), getMaterialIndexbyName("Screw")],
			inputQuantity: [10, 9, 18, 52],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Computer",
			tier: 5,
			output: [getMaterialIndexbyName("Computer")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Circuit Board"), getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [7, 28, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Crystal Computer",
			tier: 5,
			output: [getMaterialIndexbyName("Computer")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Circuit Board"), getMaterialIndexbyName("Crystal Oscillator")],
			inputQuantity: [8, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 64
		},
		{
			name: "Supercomputer",
			tier: 7,
			output: [getMaterialIndexbyName("Supercomputer")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Computer"), getMaterialIndexbyName("AI Limiter"), getMaterialIndexbyName("High-Speed Connector"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [2, 2, 3, 28],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "OC Supercomputer",
			tier: 7,
			output: [getMaterialIndexbyName("Supercomputer")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Radio Control Unit"), getMaterialIndexbyName("Cooling System")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Super-State Computer",
			tier: 8,
			output: [getMaterialIndexbyName("Supercomputer")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Computer"), getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Battery"), getMaterialIndexbyName("Wire")],
			inputQuantity: [3, 2, 20, 45],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 50
		},
		{
			name: "Radio Control Unit",
			tier: 7,
			output: [getMaterialIndexbyName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Crystal Oscillator"), getMaterialIndexbyName("Computer")],
			inputQuantity: [32, 1, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 48
		},
		{
			name: "Radio Connection Unit",
			tier: 7,
			output: [getMaterialIndexbyName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Heat Sink"), getMaterialIndexbyName("High-Speed Connector"), getMaterialIndexbyName("Quartz Crystal")],
			inputQuantity: [4, 2, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Radio Control System",
			tier: 7,
			output: [getMaterialIndexbyName("Radio Control Unit")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Crystal Oscillator"), getMaterialIndexbyName("Circuit Board"), getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [1, 10, 60, 30],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 40
		},
		{
			name: "Crystal Oscillator",
			tier: 5,
			output: [getMaterialIndexbyName("Crystal Oscillator")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Quartz Crystal"), getMaterialIndexbyName("Cable"), getMaterialIndexbyName("Reinforced Iron Plate")],
			inputQuantity: [36, 28, 5],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Insulated Crystal Oscillator",
			tier: 7,
			output: [getMaterialIndexbyName("Crystal Oscillator")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Quartz Crystal"), getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("AI Limiter")],
			inputQuantity: [10, 7, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		// Containers
		{
			name: "Empty Canister",
			tier: 5,
			output: [getMaterialIndexbyName("Empty Canister")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Plastic")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Empty Fluid Tank",
			tier: 8,
			output: [getMaterialIndexbyName("Empty Fluid Tank")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Aluminum Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 1
		},
		{
			name: "Pressure Conversion Cube",
			tier: 8,
			output: [getMaterialIndexbyName("Pressure Conversion Cube")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Fused Modular Frame"), getMaterialIndexbyName("Radio Control Unit")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Packaged Water",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Water")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Water"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Alumina Solution",
			tier: 7,
			output: [getMaterialIndexbyName("Packaged Alumina Solution")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Alumina Solution"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		{
			name: "Packaged Sulfuric Acid",
			tier: 7,
			output: [getMaterialIndexbyName("Packaged Sulfuric Acid")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Sulfuric Acid"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Nitric Acid",
			tier: 8,
			output: [getMaterialIndexbyName("Packaged Nitric Acid")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Nitric Acid"), getMaterialIndexbyName("Empty Fluid Tank")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Nitric Acid",
			tier: 8,
			output: [getMaterialIndexbyName("Packaged Nitric Acid")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Nitrogen Gas"), getMaterialIndexbyName("Empty Fluid Tank")],
			inputQuantity: [4, 1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		//Fuels
		{
			name: "Biomass (Leaves)",
			tier: 0,
			output: [getMaterialIndexbyName("Biomass")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Leaves")],
			inputQuantity: [10],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Biomass (Mycelia)",
			tier: 0,
			output: [getMaterialIndexbyName("Biomass")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Mycelia")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Biomass (Wood)",
			tier: 0,
			output: [getMaterialIndexbyName("Biomass")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Wood")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Coal",
			tier: 2,
			output: [getMaterialIndexbyName("Compacted Coal")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Coal"), getMaterialIndexbyName("Sulfur")],
			inputQuantity: [5, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Packaged Oil",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Oil")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Crude Oil"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Heavy Oil Residue",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Heavy Oil Residue")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Heavy Oil Residue"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Solid Biofuel",
			tier: 0,
			output: [getMaterialIndexbyName("Solid Biofuel")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Biomass")],
			inputQuantity: [8],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Fuel",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Fuel"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Diluted Packaged Fuel",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Heavy Oil Residue"), getMaterialIndexbyName("Packaged Water")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Liquid Biofuel",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Liquid Biofuel")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Liquid Biofuel"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Turbofuel",
			tier: 5,
			output: [getMaterialIndexbyName("Packaged Turbofuel")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Liquid Biofuel"), getMaterialIndexbyName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 6
		},
		{
			name: "Uranium Fuel Rod",
			tier: 8,
			output: [getMaterialIndexbyName("Uranium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Encased Uranium Cell"), getMaterialIndexbyName("Encased Industrial Beam"), getMaterialIndexbyName("Electromagnetic Control Rod")],
			inputQuantity: [50, 3, 5],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 150
		},
		{
			name: "Uranium Fuel Unit",
			tier: 8,
			output: [getMaterialIndexbyName("Uranium Fuel Rod")],
			outputQuantity: [3],
			input: [getMaterialIndexbyName("Encased Uranium Cell"), getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Crystal Oscillator"), getMaterialIndexbyName("Beacon")],
			inputQuantity: [100, 10, 3, 6],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 300
		},
		{
			name: "Plutonium Fuel Rod",
			tier: 8,
			output: [getMaterialIndexbyName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Encased Plutonium Cell"), getMaterialIndexbyName("Steel Beam"), getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Heat Sink")],
			inputQuantity: [30, 18, 6, 10],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 240
		},
		{
			name: "Plutonium Fuel Unit",
			tier: 8,
			output: [getMaterialIndexbyName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Encased Plutonium Cell"), getMaterialIndexbyName("Pressure Conversion Cube")],
			inputQuantity: [20, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 120
		},
		// Consumed
		{
			name: "Black Powder",
			tier: 2,
			output: [getMaterialIndexbyName("Black Powder")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Coal"), getMaterialIndexbyName("Sulfur")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Fine Black Powder",
			tier: 2,
			output: [getMaterialIndexbyName("Black Powder")],
			outputQuantity: [16],
			input: [getMaterialIndexbyName("Sulfur"), getMaterialIndexbyName("Compacted Coal")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Smokeless Powder",
			tier: 5,
			output: [getMaterialIndexbyName("Smokeless Powder")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Black Powder"), getMaterialIndexbyName("Heavy Oil Residue")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Gas Filter",
			tier: 5,
			output: [getMaterialIndexbyName("Gas Filter")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Coal"), getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Fabric")],
			inputQuantity: [5, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Color Cartridge",
			tier: 2,
			output: [getMaterialIndexbyName("Color Cartridge")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Flower Petals")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Beacon",
			tier: 5,
			output: [getMaterialIndexbyName("Beacon")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Plate"), getMaterialIndexbyName("Iron Rod"), getMaterialIndexbyName("Wire"), getMaterialIndexbyName("Cable")],
			inputQuantity: [3, 1, 15, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Crystal Beacon",
			tier: 5,
			output: [getMaterialIndexbyName("Beacon")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Steel Beam"), getMaterialIndexbyName("Steel Pipe"), getMaterialIndexbyName("Crystal Oscillator")],
			inputQuantity: [4, 16, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Iodine Infused Filter",
			tier: 7,
			output: [getMaterialIndexbyName("Iodine Infused Filter")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Gas Filter"), getMaterialIndexbyName("Quickwire"), getMaterialIndexbyName("Aluminum Casing")],
			inputQuantity: [1, 8, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		// Ammos
		{
			name: "Iron Rebar",
			tier: 0,
			output: [getMaterialIndexbyName("Iron Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Rod")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Stun Rebar",
			tier: 2,
			output: [getMaterialIndexbyName("Stun Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Rebar"), getMaterialIndexbyName("Quickwire")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Shatter Rebar",
			tier: 2,
			output: [getMaterialIndexbyName("Shatter Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Rebar"), getMaterialIndexbyName("Quartz Crystal")],
			inputQuantity: [2, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Explosive Rebar",
			tier: 5,
			output: [getMaterialIndexbyName("Explosive Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Iron Rebar"), getMaterialIndexbyName("Smokeless Powder"), getMaterialIndexbyName("Steel Pipe")],
			inputQuantity: [2, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Rifle Ammo",
			tier: 5,
			output: [getMaterialIndexbyName("Rifle Ammo")],
			outputQuantity: [15],
			input: [getMaterialIndexbyName("Copper Sheet"), getMaterialIndexbyName("Smokeless Powder"), getMaterialIndexbyName("Steel Pipe")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Homing Rifle Ammo",
			tier: 5,
			output: [getMaterialIndexbyName("Homing Rifle Ammo")],
			outputQuantity: [10],
			input: [getMaterialIndexbyName("Rifle Ammo"), getMaterialIndexbyName("High-Speed Connector")],
			inputQuantity: [20, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 5,
			output: [getMaterialIndexbyName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getMaterialIndexbyName("Rifle Ammo"), getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Packaged Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 7,
			output: [getMaterialIndexbyName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getMaterialIndexbyName("Rifle Ammo"), getMaterialIndexbyName("Aluminum Casing"), getMaterialIndexbyName("Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Nobelisk",
			tier: 3,
			output: [getMaterialIndexbyName("Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Black Powder"), getMaterialIndexbyName("Steel Pipe")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Gas Nobelisk",
			tier: 3,
			output: [getMaterialIndexbyName("Gas Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Nobelisk"), getMaterialIndexbyName("Biomass")],
			inputQuantity: [1, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Pulse Nobelisk",
			tier: 5,
			output: [getMaterialIndexbyName("Pulse Nobelisk")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Nobelisk"), getMaterialIndexbyName("Crystal Oscillator")],
			inputQuantity: [5, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Cluster Nobelisk",
			tier: 5,
			output: [getMaterialIndexbyName("Cluster Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Nobelisk"), getMaterialIndexbyName("Smokeless Powder")],
			inputQuantity: [3, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Nuke Nobelisk",
			tier: 8,
			output: [getMaterialIndexbyName("Nuke Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Nobelisk"), getMaterialIndexbyName("Encased Uranium Cell"), getMaterialIndexbyName("Smokeless Powder"), getMaterialIndexbyName("AI Limiter")],
			inputQuantity: [5, 20, 10, 6],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		// Nuclear
		{
			name: "Electromagnetic Control Rod",
			tier: 8,
			output: [getMaterialIndexbyName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Stator"), getMaterialIndexbyName("AI Limiter")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Electromagnetic Connection Rod",
			tier: 8,
			output: [getMaterialIndexbyName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Stator"), getMaterialIndexbyName("High-Speed Connector")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Encased Uranium Cell",
			tier: 8,
			output: [getMaterialIndexbyName("Sulfuric Acid"), getMaterialIndexbyName("Encased Uranium Cell")],
			outputQuantity: [2, 5],
			input: [getMaterialIndexbyName("Sulfuric Acid"), getMaterialIndexbyName("Uranium"), getMaterialIndexbyName("Concrete")],
			inputQuantity: [8, 10, 3],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Infused Uranium Cell",
			tier: 8,
			output: [getMaterialIndexbyName("Encased Uranium Cell")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Uranium"), getMaterialIndexbyName("Silica"), getMaterialIndexbyName("Sulfur"), getMaterialIndexbyName("Quickwire")],
			inputQuantity: [5, 3, 5, 15],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Non-fissile Uranium",
			tier: 8,
			output: [getMaterialIndexbyName("Non-fissile Uranium"), getMaterialIndexbyName("Water")],
			outputQuantity: [20, 6],
			input: [getMaterialIndexbyName("Uranium Waste"), getMaterialIndexbyName("Silica"), getMaterialIndexbyName("Nitric Acid"), getMaterialIndexbyName("Sulfuric Acid")],
			inputQuantity: [15, 10, 6, 6],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 24
		},
		{
			name: "Fertile Uranium",
			tier: 8,
			output: [getMaterialIndexbyName("Non-fissile Uranium"), getMaterialIndexbyName("Water")],
			outputQuantity: [20, 8],
			input: [getMaterialIndexbyName("Uranium"), getMaterialIndexbyName("Uranium Waste"), getMaterialIndexbyName("Nitric Acid"), getMaterialIndexbyName("Sulfuric Acid")],
			inputQuantity: [5, 5, 3, 5],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Plutonium Pellet",
			tier: 8,
			output: [getMaterialIndexbyName("Plutonium Pellet")],
			outputQuantity: [30],
			input: [getMaterialIndexbyName("Non-fissile Uranium"), getMaterialIndexbyName("Uranium Waste")],
			inputQuantity: [100, 25],
			machine: getMachineIndexbyName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 60
		},
		{
			name: "Encased Plutonium Cell",
			tier: 8,
			output: [getMaterialIndexbyName("Encased Plutonium Cell")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Plutonium Pellet"), getMaterialIndexbyName("Concrete")],
			inputQuantity: [2, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Instant Plutonium Cell",
			tier: 8,
			output: [getMaterialIndexbyName("Encased Plutonium Cell")],
			outputQuantity: [20],
			input: [getMaterialIndexbyName("Non-fissile Uranium"), getMaterialIndexbyName("Aluminum Casing")],
			inputQuantity: [150, 20],
			machine: getMachineIndexbyName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 120
		},
		{
			name: "Nuclear (Uranium Fuel Rod)",
			tier: 8,
			output: [getMaterialIndexbyName("MJ of Power"), getMaterialIndexbyName("Uranium Waste")],
			outputQuantity: [750000, 50],
			input: [getMaterialIndexbyName("Uranium Fuel Rod"), getMaterialIndexbyName("Water")],
			inputQuantity: [1, 1200],
			machine: getMachineIndexbyName("Nuclear Power Plant"),
			craftingTime_s: 300
		},
		// Special
		{
			name: "Power Shard (1)",
			tier: 0,
			output: [getMaterialIndexbyName("Power Shard")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Blue Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Power Shard (2)",
			tier: 0,
			output: [getMaterialIndexbyName("Power Shard")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Yellow Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Power Shard (3)",
			tier: 0,
			output: [getMaterialIndexbyName("Power Shard")],
			outputQuantity: [5],
			input: [getMaterialIndexbyName("Purple Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Smart Plating",
			tier: 2,
			output: [getMaterialIndexbyName("Smart Plating")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Reinforced Iron Plate"), getMaterialIndexbyName("Rotor")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Plastic Smart Plating",
			tier: 5,
			output: [getMaterialIndexbyName("Smart Plating")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Reinforced Iron Plate"), getMaterialIndexbyName("Rotor"), getMaterialIndexbyName("Plastic")],
			inputQuantity: [1, 1, 3],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Versatile Framework",
			tier: 3,
			output: [getMaterialIndexbyName("Versatile Framework")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Modular Frame"), getMaterialIndexbyName("Steel Beam")],
			inputQuantity: [1, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Flexible Framework",
			tier: 5,
			output: [getMaterialIndexbyName("Versatile Framework")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Modular Frame"), getMaterialIndexbyName("Steel Beam"), getMaterialIndexbyName("Rubber")],
			inputQuantity: [1, 6, 8],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Automated Wiring",
			tier: 4,
			output: [getMaterialIndexbyName("Automated Wiring")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Stator"), getMaterialIndexbyName("Cable")],
			inputQuantity: [1, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Automated Speed Wiring",
			tier: 5,
			output: [getMaterialIndexbyName("Automated Wiring")],
			outputQuantity: [4],
			input: [getMaterialIndexbyName("Stator"), getMaterialIndexbyName("Wire"), getMaterialIndexbyName("High-Speed Connector")],
			inputQuantity: [2, 40, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Modular Engine",
			tier: 5,
			output: [getMaterialIndexbyName("Modular Engine")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Motor"), getMaterialIndexbyName("Rubber"), getMaterialIndexbyName("Smart Plating")],
			inputQuantity: [2, 15, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 60
		},
		{
			name: "Adaptive Control Unit",
			tier: 5,
			output: [getMaterialIndexbyName("Adaptive Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Automated Wiring"), getMaterialIndexbyName("Circuit Board"), getMaterialIndexbyName("Heavy Modular Frame"), getMaterialIndexbyName("Computer")],
			inputQuantity: [15, 10, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Assembly Director System",
			tier: 7,
			output: [getMaterialIndexbyName("Assembly Director System")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Adaptive Control Unit"), getMaterialIndexbyName("Supercomputer")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 80
		},
		{
			name: "Magnetic Field Generator",
			tier: 8,
			output: [getMaterialIndexbyName("Magnetic Field Generator")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Versatile Framework"), getMaterialIndexbyName("Electromagnetic Control Rod"), getMaterialIndexbyName("Battery")],
			inputQuantity: [5, 2, 10],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Thermal Propulsion Rocket",
			tier: 8,
			output: [getMaterialIndexbyName("Thermal Propulsion Rocket")],
			outputQuantity: [2],
			input: [getMaterialIndexbyName("Modular Engine"), getMaterialIndexbyName("Turbo Motor"), getMaterialIndexbyName("Cooling System"), getMaterialIndexbyName("Fused Modular Frame")],
			inputQuantity: [5, 2, 6, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Nuclear Pasta",
			tier: 8,
			output: [getMaterialIndexbyName("Nuclear Pasta")],
			outputQuantity: [1],
			input: [getMaterialIndexbyName("Copper Powder"), getMaterialIndexbyName("Pressure Conversion Cube")],
			inputQuantity: [200, 1],
			machine: getMachineIndexbyName("Particle Accelerator (Nuclear Pasta)"),
			craftingTime_s: 120
		}
	];