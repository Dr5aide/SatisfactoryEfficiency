function addFicsitCouponRecipes() {
	for (let i = 0; i < materials.length; i++) {
		if (materials[i].ficsitCouponValue > 0) {
			recipes.push({
				name: "CP for " + materials[i].name,
				tier: materials[i].tier,
				output: [getMaterialIndexByName("FICSIT Coupon Point")],
				outputQuantity: [materials[i].ficsitCouponValue],
				input: [i],
				inputQuantity: [1],
				machine: getMachineIndexbyName("AWESOME Sink"),
				craftingTime_s: 1
			})
		}
	}
}

// Refering to Update 8
const recipes =
	[
		// Ingots
		{
			name: "Iron Ingot",
			tier: 0,
			output: [getMaterialIndexByName("Iron Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Ore")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Iron Alloy Ingot",
			tier: 3,
			output: [getMaterialIndexByName("Iron Ingot")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Iron Ore"), getMaterialIndexByName("Copper Ore")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 6
		},
		{
			name: "Pure Iron Ingot",
			tier: 5,
			output: [getMaterialIndexByName("Iron Ingot")],
			outputQuantity: [13],
			input: [getMaterialIndexByName("Iron Ore"), getMaterialIndexByName("Water")],
			inputQuantity: [7, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Copper Ingot",
			tier: 0,
			output: [getMaterialIndexByName("Copper Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Copper Ore")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		{
			name: "Copper Alloy Ingot",
			tier: 3,
			output: [getMaterialIndexByName("Copper Ingot")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Copper Ore"), getMaterialIndexByName("Iron Ore")],
			inputQuantity: [10, 5],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Pure Copper Ingot",
			tier: 5,
			output: [getMaterialIndexByName("Copper Ingot")],
			outputQuantity: [13],
			input: [getMaterialIndexByName("Copper Ore"), getMaterialIndexByName("Water")],
			inputQuantity: [7, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Ingot",
			tier: 0,
			output: [getMaterialIndexByName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Caterium Ore")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 4
		},
		{
			name: "Pure Caterium Ingot",
			tier: 5,
			output: [getMaterialIndexByName("Caterium Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Caterium Ore"), getMaterialIndexByName("Water")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 5
		},
		{
			name: "Steel Ingot",
			tier: 3,
			output: [getMaterialIndexByName("Steel Ingot")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Iron Ore"), getMaterialIndexByName("Coal")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Steel Ingot",
			tier: 3,
			output: [getMaterialIndexByName("Steel Ingot")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Iron Ore"), getMaterialIndexByName("Compacted Coal")],
			inputQuantity: [6, 3],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 16
		},
		{
			name: "Solid Steel Ingot",
			tier: 3,
			output: [getMaterialIndexByName("Steel Ingot")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Iron Ingot"), getMaterialIndexByName("Coal")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 3
		},
		{
			name: "Coke Steel Ingot",
			tier: 5,
			output: [getMaterialIndexByName("Steel Ingot")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Iron Ore"), getMaterialIndexByName("Petroleum Coke")],
			inputQuantity: [15, 15],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 12
		},
		{
			name: "Aluminum Ingot",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Ingot")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Aluminum Scrap"), getMaterialIndexByName("Silica")],
			inputQuantity: [6, 5],
			machine: getMachineIndexbyName("Foundry"),
			craftingTime_s: 4
		},
		{
			name: "Pure Aluminum Ingot",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Ingot")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Aluminum Scrap")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Smeltery"),
			craftingTime_s: 2
		},
		// Minerals
		{
			name: "Concrete",
			tier: 0,
			output: [getMaterialIndexByName("Concrete")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Limestone")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fine Concrete",
			tier: 2,
			output: [getMaterialIndexByName("Concrete")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Limestone"), getMaterialIndexByName("Silica")],
			inputQuantity: [12, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Wet Concrete",
			tier: 5,
			output: [getMaterialIndexByName("Concrete")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Limestone"), getMaterialIndexByName("Water")],
			inputQuantity: [6, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Rubber Concrete",
			tier: 5,
			output: [getMaterialIndexByName("Concrete")],
			outputQuantity: [9],
			input: [getMaterialIndexByName("Limestone"), getMaterialIndexByName("Rubber")],
			inputQuantity: [10, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quartz Crystal",
			tier: 0,
			output: [getMaterialIndexByName("Quartz Crystal")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Raw Quartz")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Pure Quartz Crystal",
			tier: 5,
			output: [getMaterialIndexByName("Quartz Crystal")],
			outputQuantity: [7],
			input: [getMaterialIndexByName("Raw Quartz"), getMaterialIndexByName("Water")],
			inputQuantity: [9, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Silica",
			tier: 0,
			output: [getMaterialIndexByName("Silica")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Raw Quartz")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Cheap Silica",
			tier: 2,
			output: [getMaterialIndexByName("Silica")],
			outputQuantity: [7],
			input: [getMaterialIndexByName("Raw Quartz"), getMaterialIndexByName("Limestone")],
			inputQuantity: [3, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Copper Powder",
			tier: 8,
			output: [getMaterialIndexByName("Copper Powder")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [30],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Polymer Resin",
			tier: 5,
			output: [getMaterialIndexByName("Polymer Resin"), getMaterialIndexByName("Heavy Oil Residue")],
			outputQuantity: [13, 2],
			input: [getMaterialIndexByName("Crude Oil")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Petroleum Coke",
			tier: 5,
			output: [getMaterialIndexByName("Petroleum Coke")],
			outputQuantity: [12],
			input: [getMaterialIndexByName("Heavy Oil Residue")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Scrap",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Scrap"), getMaterialIndexByName("Water")],
			outputQuantity: [6, 2],
			input: [getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Coal")],
			inputQuantity: [4, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 1
		},
		{
			name: "Electrode Aluminum Scrap",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Scrap"), getMaterialIndexByName("Water")],
			outputQuantity: [20, 7],
			input: [getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Petroleum Coke")],
			inputQuantity: [12, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Instant Scrap",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Scrap"), getMaterialIndexByName("Water")],
			outputQuantity: [30, 5],
			input: [getMaterialIndexByName("Bauxite"), getMaterialIndexByName("Coal"), getMaterialIndexByName("Sulfuric Acid"), getMaterialIndexByName("Water")],
			inputQuantity: [15, 10, 5, 6],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		// (Un)packaging liquids need to be at the top for circular reference detection
		// Containers
		{
			name: "Empty Canister",
			tier: 5,
			output: [getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Plastic")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Empty Fluid Tank",
			tier: 8,
			output: [getMaterialIndexByName("Empty Fluid Tank")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Aluminum Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 1
		},
		{
			name: "Pressure Conversion Cube",
			tier: 8,
			output: [getMaterialIndexByName("Pressure Conversion Cube")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Fused Modular Frame"), getMaterialIndexByName("Radio Control Unit")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Packaged Water",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Water")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Water"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Unpackage Water",
			tier: 5,
			output: [getMaterialIndexByName("Water"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Water")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Oil",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Oil")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Crude Oil"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Unpackage Oil",
			tier: 5,
			output: [getMaterialIndexByName("Crude Oil"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Oil")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Heavy Oil Residue",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Heavy Oil Residue")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Heavy Oil Residue"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Unpackage Heavy Oil Residue",
			tier: 5,
			output: [getMaterialIndexByName("Heavy Oil Residue"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Heavy Oil Residue")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 4
		},
		{
			name: "Packaged Fuel",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Fuel"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Unpackage Fuel",
			tier: 5,
			output: [getMaterialIndexByName("Fuel"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Fuel")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Liquid Biofuel",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Liquid Biofuel")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Liquid Biofuel"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Unpackage Liquid Biofuel",
			tier: 5,
			output: [getMaterialIndexByName("Liquid Biofuel"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Liquid Biofuel")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Turbofuel",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Turbofuel")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Liquid Biofuel"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 6
		},
		{
			name: "Unpackage Turbofuel",
			tier: 5,
			output: [getMaterialIndexByName("Turbofuel"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Turbofuel")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 6
		},
		{
			name: "Packaged Alumina Solution",
			tier: 7,
			output: [getMaterialIndexByName("Packaged Alumina Solution")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		{
			name: "Unpackage Alumina Solution",
			tier: 7,
			output: [getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Alumina Solution")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		{
			name: "Packaged Sulfuric Acid",
			tier: 7,
			output: [getMaterialIndexByName("Packaged Sulfuric Acid")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Sulfuric Acid"), getMaterialIndexByName("Empty Canister")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Unpackage Sulfuric Acid",
			tier: 7,
			output: [getMaterialIndexByName("Sulfuric Acid"), getMaterialIndexByName("Empty Canister")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Packaged Sulfuric Acid")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 3
		},
		{
			name: "Packaged Nitric Acid",
			tier: 8,
			output: [getMaterialIndexByName("Packaged Nitric Acid")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Nitric Acid"), getMaterialIndexByName("Empty Fluid Tank")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Unpackage Nitric Acid",
			tier: 8,
			output: [getMaterialIndexByName("Nitric Acid"), getMaterialIndexByName("Empty Fluid Tank")],
			outputQuantity: [1, 2],
			input: [getMaterialIndexByName("Packaged Nitric Acid")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 2
		},
		{
			name: "Packaged Nitrogen Gas",
			tier: 8,
			output: [getMaterialIndexByName("Packaged Nitrogen Gas")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Nitrogen Gas"), getMaterialIndexByName("Empty Fluid Tank")],
			inputQuantity: [4, 1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		{
			name: "Unpackage Nitrogen Gas",
			tier: 8,
			output: [getMaterialIndexByName("Nitrogen Gas"), getMaterialIndexByName("Empty Fluid Tank")],
			outputQuantity: [4, 2],
			input: [getMaterialIndexByName("Packaged Nitrogen Gas")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Packager"),
			craftingTime_s: 1
		},
		// Liquids
		{
			name: "Heavy Oil Residue",
			tier: 5,
			output: [getMaterialIndexByName("Heavy Oil Residue"), getMaterialIndexByName("Polymer Resin")],
			outputQuantity: [4, 2],
			input: [getMaterialIndexByName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Fuel",
			tier: 5,
			output: [getMaterialIndexByName("Fuel"), getMaterialIndexByName("Polymer Resin")],
			outputQuantity: [4, 3],
			input: [getMaterialIndexByName("Crude Oil")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Residual Fuel",
			tier: 5,
			output: [getMaterialIndexByName("Fuel")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Heavy Oil Residue")],
			inputQuantity: [6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Diluted Fuel",
			tier: 7,
			output: [getMaterialIndexByName("Fuel")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Heavy Oil Residue"), getMaterialIndexByName("Water")],
			inputQuantity: [5, 10],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		{
			name: "Liquid Biofuel",
			tier: 5,
			output: [getMaterialIndexByName("Liquid Biofuel")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Solid Biofuel"), getMaterialIndexByName("Water")],
			inputQuantity: [6, 3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 4
		},
		{
			name: "Turbofuel",
			tier: 5,
			output: [getMaterialIndexByName("Turbofuel")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Fuel"), getMaterialIndexByName("Compacted Coal")],
			inputQuantity: [6, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 16
		},
		{
			name: "Alumina Solution",
			tier: 7,
			output: [getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Silica")],
			outputQuantity: [12, 5],
			input: [getMaterialIndexByName("Bauxite"), getMaterialIndexByName("Water")],
			inputQuantity: [12, 18],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Sloppy Alumina",
			tier: 7,
			output: [getMaterialIndexByName("Alumina Solution")],
			outputQuantity: [12],
			input: [getMaterialIndexByName("Bauxite"), getMaterialIndexByName("Water")],
			inputQuantity: [10, 10],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 3
		},
		{
			name: "Sulfuric Acid",
			tier: 7,
			output: [getMaterialIndexByName("Sulfuric Acid")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Sulfur"), getMaterialIndexByName("Water")],
			inputQuantity: [5, 5],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Nitric Acid",
			tier: 8,
			output: [getMaterialIndexByName("Nitric Acid")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Nitrogen Gas"), getMaterialIndexByName("Water"), getMaterialIndexByName("Iron Plate")],
			inputQuantity: [12, 3, 1],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 6
		},
		// Standard Parts
		{
			name: "Iron Rod",
			tier: 0,
			output: [getMaterialIndexByName("Iron Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Steel Rod",
			tier: 3,
			output: [getMaterialIndexByName("Iron Rod")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Steel Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Screw",
			tier: 0,
			output: [getMaterialIndexByName("Screw")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Iron Rod")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Cast Screw",
			tier: 0,
			output: [getMaterialIndexByName("Screw")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Iron Ingot")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Steel Screw",
			tier: 3,
			output: [getMaterialIndexByName("Screw")],
			outputQuantity: [52],
			input: [getMaterialIndexByName("Steel Beam")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Iron Plate",
			tier: 0,
			output: [getMaterialIndexByName("Iron Plate")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Iron Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Coated Iron Plate",
			tier: 5,
			output: [getMaterialIndexByName("Iron Plate")],
			outputQuantity: [15],
			input: [getMaterialIndexByName("Iron Ingot"), getMaterialIndexByName("Plastic")],
			inputQuantity: [10, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Steel Coated Plate",
			tier: 5,
			output: [getMaterialIndexByName("Iron Plate")],
			outputQuantity: [18],
			input: [getMaterialIndexByName("Steel Ingot"), getMaterialIndexByName("Plastic")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Reinforced Iron Plate",
			tier: 2,
			output: [getMaterialIndexByName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Plate"), getMaterialIndexByName("Screw")],
			inputQuantity: [6, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Adhered Iron Plate",
			tier: 5,
			output: [getMaterialIndexByName("Reinforced Iron Plate")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Plate"), getMaterialIndexByName("Rubber")],
			inputQuantity: [3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Bolted Iron Plate",
			tier: 5,
			output: [getMaterialIndexByName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Iron Plate"), getMaterialIndexByName("Rubber")],
			inputQuantity: [18, 50],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Stiched Iron Plate",
			tier: 2,
			output: [getMaterialIndexByName("Reinforced Iron Plate")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Iron Plate"), getMaterialIndexByName("Wire")],
			inputQuantity: [10, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 32
		},
		{
			name: "Copper Sheet",
			tier: 2,
			output: [getMaterialIndexByName("Copper Sheet")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steamed Copper Sheet",
			tier: 5,
			output: [getMaterialIndexByName("Copper Sheet")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Copper Ingot"), getMaterialIndexByName("Water")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Alclad Aluminum Sheet",
			tier: 7,
			output: [getMaterialIndexByName("Alclad Aluminum Sheet")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Aluminum Ingot"), getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Aluminum Casing",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Casing")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Aluminum Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Alclad Casing",
			tier: 7,
			output: [getMaterialIndexByName("Aluminum Casing")],
			outputQuantity: [15],
			input: [getMaterialIndexByName("Aluminum Ingot"), getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [20, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Steel Pipe",
			tier: 3,
			output: [getMaterialIndexByName("Steel Pipe")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Steel Ingot")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Steel Beam",
			tier: 3,
			output: [getMaterialIndexByName("Steel Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Steel Ingot")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Encased Industrial Beam",
			tier: 3,
			output: [getMaterialIndexByName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Steel Ingot"), getMaterialIndexByName("Concrete")],
			inputQuantity: [4, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 10
		},
		{
			name: "Encased Industrial Pipe",
			tier: 3,
			output: [getMaterialIndexByName("Encased Industrial Beam")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Concrete")],
			inputQuantity: [7, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Modular Frame",
			tier: 2,
			output: [getMaterialIndexByName("Modular Frame")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Reinforced Iron Plate"), getMaterialIndexByName("Iron Rod")],
			inputQuantity: [3, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Bolted Frame",
			tier: 2,
			output: [getMaterialIndexByName("Modular Frame")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Reinforced Iron Plate"), getMaterialIndexByName("Screw")],
			inputQuantity: [3, 56],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Steeled Frame",
			tier: 3,
			output: [getMaterialIndexByName("Modular Frame")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Reinforced Iron Plate"), getMaterialIndexByName("Steel Pipe")],
			inputQuantity: [2, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Heavy Modular Frame",
			tier: 5,
			output: [getMaterialIndexByName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Modular Frame"), getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Encased Industrial Beam"), getMaterialIndexByName("Screw")],
			inputQuantity: [5, 15, 5, 100],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 30
		},
		{
			name: "Heavy Encased Frame",
			tier: 5,
			output: [getMaterialIndexByName("Heavy Modular Frame")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Modular Frame"), getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Encased Industrial Beam"), getMaterialIndexByName("Concrete")],
			inputQuantity: [8, 36, 10, 22],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Heavy Flexible Frame",
			tier: 5,
			output: [getMaterialIndexByName("Heavy Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Modular Frame"), getMaterialIndexByName("Rubber"), getMaterialIndexByName("Encased Industrial Beam"), getMaterialIndexByName("Screw")],
			inputQuantity: [5, 20, 3, 104],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Fused Modular Frame",
			tier: 8,
			output: [getMaterialIndexByName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Heavy Modular Frame"), getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Nitrogen Gas")],
			inputQuantity: [1, 50, 25],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 40
		},
		{
			name: "Heat-Fused Frame",
			tier: 8,
			output: [getMaterialIndexByName("Fused Modular Frame")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Heavy Modular Frame"), getMaterialIndexByName("Aluminum Ingot"), getMaterialIndexByName("Nitric Acid"), getMaterialIndexByName("Fuel")],
			inputQuantity: [1, 50, 8, 10],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 20
		},
		{
			name: "Fabric",
			tier: 2,
			output: [getMaterialIndexByName("Fabric")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Mycelia"), getMaterialIndexByName("Biomass")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Polyester Fabric",
			tier: 5,
			output: [getMaterialIndexByName("Fabric")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Polymer Resin"), getMaterialIndexByName("Water")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Plastic",
			tier: 5,
			output: [getMaterialIndexByName("Plastic"), getMaterialIndexByName("Heavy Oil Residue")],
			outputQuantity: [2, 1],
			input: [getMaterialIndexByName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Plastic",
			tier: 5,
			output: [getMaterialIndexByName("Plastic")],
			outputQuantity: [12],
			input: [getMaterialIndexByName("Rubber"), getMaterialIndexByName("Fuel")],
			inputQuantity: [6, 6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Plastic",
			tier: 5,
			output: [getMaterialIndexByName("Plastic")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Polymer Resin"), getMaterialIndexByName("Water")],
			inputQuantity: [6, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Rubber",
			tier: 5,
			output: [getMaterialIndexByName("Rubber"), getMaterialIndexByName("Heavy Oil Residue")],
			outputQuantity: [2, 2],
			input: [getMaterialIndexByName("Crude Oil")],
			inputQuantity: [3],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Recycled Rubber",
			tier: 5,
			output: [getMaterialIndexByName("Rubber")],
			outputQuantity: [12],
			input: [getMaterialIndexByName("Plastic"), getMaterialIndexByName("Fuel")],
			inputQuantity: [6, 6],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 12
		},
		{
			name: "Residual Rubber",
			tier: 5,
			output: [getMaterialIndexByName("Rubber")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Polymer Resin"), getMaterialIndexByName("Water")],
			inputQuantity: [4, 4],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		// Industrial Parts
		{
			name: "Rotor",
			tier: 2,
			output: [getMaterialIndexByName("Rotor")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Rod"), getMaterialIndexByName("Screw")],
			inputQuantity: [5, 25],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Copper Rotor",
			tier: 2,
			output: [getMaterialIndexByName("Rotor")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Copper Sheet"), getMaterialIndexByName("Screw")],
			inputQuantity: [6, 52],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Steel Rotor",
			tier: 3,
			output: [getMaterialIndexByName("Rotor")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Wire")],
			inputQuantity: [2, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 36
		},
		{
			name: "Stator",
			tier: 3,
			output: [getMaterialIndexByName("Stator")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Wire")],
			inputQuantity: [3, 8],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Stator",
			tier: 3,
			output: [getMaterialIndexByName("Stator")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Quickwire")],
			inputQuantity: [4, 15],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Battery",
			tier: 7,
			output: [getMaterialIndexByName("Battery"), getMaterialIndexByName("Water")],
			outputQuantity: [1, 1.5],
			input: [getMaterialIndexByName("Sulfuric Acid"), getMaterialIndexByName("Alumina Solution"), getMaterialIndexByName("Aluminum Casing")],
			inputQuantity: [2.5, 2, 1],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 3
		},
		{
			name: "Battery",
			tier: 7,
			output: [getMaterialIndexByName("Battery")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Sulfur"), getMaterialIndexByName("Alclad Aluminum Sheet"), getMaterialIndexByName("Plastic"), getMaterialIndexByName("Wire")],
			inputQuantity: [6, 7, 8, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Motor",
			tier: 4,
			output: [getMaterialIndexByName("Motor")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Rotor"), getMaterialIndexByName("Stator")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Rigour Motor",
			tier: 5,
			output: [getMaterialIndexByName("Motor")],
			outputQuantity: [6],
			input: [getMaterialIndexByName("Rotor"), getMaterialIndexByName("Stator"), getMaterialIndexByName("Crystal Oscillator")],
			inputQuantity: [3, 3, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electric Motor",
			tier: 8,
			output: [getMaterialIndexByName("Motor")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Rotor")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Heat Sink",
			tier: 8,
			output: [getMaterialIndexByName("Heat Sink")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Alclad Aluminum Sheet"), getMaterialIndexByName("Copper Sheet")],
			inputQuantity: [5, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Heat Exchanger",
			tier: 8,
			output: [getMaterialIndexByName("Heat Sink")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Rubber")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Cooling System",
			tier: 8,
			output: [getMaterialIndexByName("Cooling System")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Heat Sink"), getMaterialIndexByName("Rubber"), getMaterialIndexByName("Water"), getMaterialIndexByName("Nitrogen Gas")],
			inputQuantity: [2, 2, 5, 25],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 10
		},
		{
			name: "Turbo Motor",
			tier: 8,
			output: [getMaterialIndexByName("Turbo Motor")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Cooling System"), getMaterialIndexByName("Radio Control Unit"), getMaterialIndexByName("Motor"), getMaterialIndexByName("Rubber")],
			inputQuantity: [4, 2, 4, 24],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Turbo Electric Motor",
			tier: 8,
			output: [getMaterialIndexByName("Turbo Motor")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Motor"), getMaterialIndexByName("Radio Control Unit"), getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Rotor")],
			inputQuantity: [7, 9, 5, 7],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 64
		},
		{
			name: "Turbo Pressure Motor",
			tier: 8,
			output: [getMaterialIndexByName("Turbo Motor")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Motor"), getMaterialIndexByName("Pressure Conversion Cube"), getMaterialIndexByName("Packaged Nitrogen Gas"), getMaterialIndexByName("Stator")],
			inputQuantity: [4, 1, 24, 8],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		// Electronics
		{
			name: "Wire",
			tier: 0,
			output: [getMaterialIndexByName("Wire")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Iron Wire",
			tier: 0,
			output: [getMaterialIndexByName("Wire")],
			outputQuantity: [9],
			input: [getMaterialIndexByName("Iron Ingot")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Wire",
			tier: 0,
			output: [getMaterialIndexByName("Wire")],
			outputQuantity: [8],
			input: [getMaterialIndexByName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Fused Wire",
			tier: 2,
			output: [getMaterialIndexByName("Wire")],
			outputQuantity: [30],
			input: [getMaterialIndexByName("Copper Ingot"), getMaterialIndexByName("Caterium Ingot")],
			inputQuantity: [4, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Cable",
			tier: 0,
			output: [getMaterialIndexByName("Cable")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Wire")],
			inputQuantity: [2],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 2
		},
		{
			name: "Coated Cable",
			tier: 5,
			output: [getMaterialIndexByName("Cable")],
			outputQuantity: [9],
			input: [getMaterialIndexByName("Wire"), getMaterialIndexByName("Heavy Oil Residue")],
			inputQuantity: [5, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 8
		},
		{
			name: "Insulated Cable",
			tier: 5,
			output: [getMaterialIndexByName("Cable")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Wire"), getMaterialIndexByName("Rubber")],
			inputQuantity: [9, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Quickwire Cable",
			tier: 5,
			output: [getMaterialIndexByName("Cable")],
			outputQuantity: [11],
			input: [getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Rubber")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Quickwire",
			tier: 0,
			output: [getMaterialIndexByName("Quickwire")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Caterium Ingot")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Fused Quickwire",
			tier: 2,
			output: [getMaterialIndexByName("Quickwire")],
			outputQuantity: [12],
			input: [getMaterialIndexByName("Caterium Ingot"), getMaterialIndexByName("Copper Ingot")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Circuit Board",
			tier: 5,
			output: [getMaterialIndexByName("Circuit Board")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Copper Sheet"), getMaterialIndexByName("Plastic")],
			inputQuantity: [2, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 8
		},
		{
			name: "Caterium Circuit Board",
			tier: 5,
			output: [getMaterialIndexByName("Circuit Board")],
			outputQuantity: [7],
			input: [getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Plastic")],
			inputQuantity: [30, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 48
		},
		{
			name: "Electrode Circuit Board",
			tier: 5,
			output: [getMaterialIndexByName("Circuit Board")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Rubber"), getMaterialIndexByName("Petroleum Coke")],
			inputQuantity: [9, 6],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Silicon Circuit Board",
			tier: 5,
			output: [getMaterialIndexByName("Circuit Board")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Copper Sheet"), getMaterialIndexByName("Silica")],
			inputQuantity: [11, 11],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "AI Limiter",
			tier: 7,
			output: [getMaterialIndexByName("AI Limiter")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Copper Sheet"), getMaterialIndexByName("Quickwire")],
			inputQuantity: [5, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "High-Speed Connector",
			tier: 7,
			output: [getMaterialIndexByName("High-Speed Connector")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Cable"), getMaterialIndexByName("Circuit Board")],
			inputQuantity: [56, 10, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Silicon High-Speed Connector",
			tier: 7,
			output: [getMaterialIndexByName("High-Speed Connector")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Silica"), getMaterialIndexByName("Circuit Board")],
			inputQuantity: [60, 25, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 40
		},
		// Communications
		{
			name: "Computer",
			tier: 5,
			output: [getMaterialIndexByName("Computer")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Circuit Board"), getMaterialIndexByName("Cable"), getMaterialIndexByName("Plastic"), getMaterialIndexByName("Screw")],
			inputQuantity: [10, 9, 18, 52],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Caterium Computer",
			tier: 5,
			output: [getMaterialIndexByName("Computer")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Circuit Board"), getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Rubber")],
			inputQuantity: [7, 28, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Crystal Computer",
			tier: 5,
			output: [getMaterialIndexByName("Computer")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Circuit Board"), getMaterialIndexByName("Crystal Oscillator")],
			inputQuantity: [8, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 64
		},
		{
			name: "Supercomputer",
			tier: 7,
			output: [getMaterialIndexByName("Supercomputer")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Computer"), getMaterialIndexByName("AI Limiter"), getMaterialIndexByName("High-Speed Connector"), getMaterialIndexByName("Plastic")],
			inputQuantity: [2, 2, 3, 28],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "OC Supercomputer",
			tier: 8,
			output: [getMaterialIndexByName("Supercomputer")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Radio Control Unit"), getMaterialIndexByName("Cooling System")],
			inputQuantity: [3, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 20
		},
		{
			name: "Super-State Computer",
			tier: 8,
			output: [getMaterialIndexByName("Supercomputer")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Computer"), getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Battery"), getMaterialIndexByName("Wire")],
			inputQuantity: [3, 2, 20, 45],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 50
		},
		{
			name: "Radio Control Unit",
			tier: 7,
			output: [getMaterialIndexByName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Crystal Oscillator"), getMaterialIndexByName("Computer")],
			inputQuantity: [32, 1, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 48
		},
		{
			name: "Radio Connection Unit",
			tier: 8,
			output: [getMaterialIndexByName("Radio Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Heat Sink"), getMaterialIndexByName("High-Speed Connector"), getMaterialIndexByName("Quartz Crystal")],
			inputQuantity: [4, 2, 12],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Radio Control System",
			tier: 7,
			output: [getMaterialIndexByName("Radio Control Unit")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Crystal Oscillator"), getMaterialIndexByName("Circuit Board"), getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Rubber")],
			inputQuantity: [1, 10, 60, 30],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 40
		},
		{
			name: "Crystal Oscillator",
			tier: 5,
			output: [getMaterialIndexByName("Crystal Oscillator")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Quartz Crystal"), getMaterialIndexByName("Cable"), getMaterialIndexByName("Reinforced Iron Plate")],
			inputQuantity: [36, 28, 5],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Insulated Crystal Oscillator",
			tier: 7,
			output: [getMaterialIndexByName("Crystal Oscillator")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Quartz Crystal"), getMaterialIndexByName("Rubber"), getMaterialIndexByName("AI Limiter")],
			inputQuantity: [10, 7, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		//Fuels
		{
			name: "Biomass (Leaves)",
			tier: 0,
			output: [getMaterialIndexByName("Biomass")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Leaves")],
			inputQuantity: [10],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 5
		},
		{
			name: "Biomass (Mycelia)",
			tier: 0,
			output: [getMaterialIndexByName("Biomass")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Mycelia")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Biomass (Wood)",
			tier: 0,
			output: [getMaterialIndexByName("Biomass")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Wood")],
			inputQuantity: [4],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Compacted Coal",
			tier: 2,
			output: [getMaterialIndexByName("Compacted Coal")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Coal"), getMaterialIndexByName("Sulfur")],
			inputQuantity: [5, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Solid Biofuel",
			tier: 0,
			output: [getMaterialIndexByName("Solid Biofuel")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Biomass")],
			inputQuantity: [8],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Diluted Packaged Fuel",
			tier: 5,
			output: [getMaterialIndexByName("Packaged Fuel")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Heavy Oil Residue"), getMaterialIndexByName("Packaged Water")],
			inputQuantity: [1, 2],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 2
		},
		{
			name: "Uranium Fuel Rod",
			tier: 8,
			output: [getMaterialIndexByName("Uranium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Encased Uranium Cell"), getMaterialIndexByName("Encased Industrial Beam"), getMaterialIndexByName("Electromagnetic Control Rod")],
			inputQuantity: [50, 3, 5],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 150
		},
		{
			name: "Uranium Fuel Unit",
			tier: 8,
			output: [getMaterialIndexByName("Uranium Fuel Rod")],
			outputQuantity: [3],
			input: [getMaterialIndexByName("Encased Uranium Cell"), getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Crystal Oscillator"), getMaterialIndexByName("Beacon")],
			inputQuantity: [100, 10, 3, 6],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 300
		},
		{
			name: "Plutonium Fuel Rod",
			tier: 8,
			output: [getMaterialIndexByName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Encased Plutonium Cell"), getMaterialIndexByName("Steel Beam"), getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Heat Sink")],
			inputQuantity: [30, 18, 6, 10],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 240
		},
		{
			name: "Plutonium Fuel Unit",
			tier: 8,
			output: [getMaterialIndexByName("Plutonium Fuel Rod")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Encased Plutonium Cell"), getMaterialIndexByName("Pressure Conversion Cube")],
			inputQuantity: [20, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 120
		},
		// Consumed
		{
			name: "Black Powder",
			tier: 2,
			output: [getMaterialIndexByName("Black Powder")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Coal"), getMaterialIndexByName("Sulfur")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 4
		},
		{
			name: "Fine Black Powder",
			tier: 2,
			output: [getMaterialIndexByName("Black Powder")],
			outputQuantity: [16],
			input: [getMaterialIndexByName("Sulfur"), getMaterialIndexByName("Compacted Coal")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 16
		},
		{
			name: "Smokeless Powder",
			tier: 5,
			output: [getMaterialIndexByName("Smokeless Powder")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Black Powder"), getMaterialIndexByName("Heavy Oil Residue")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Refinery"),
			craftingTime_s: 6
		},
		{
			name: "Gas Filter",
			tier: 5,
			output: [getMaterialIndexByName("Gas Filter")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Coal"), getMaterialIndexByName("Rubber"), getMaterialIndexByName("Fabric")],
			inputQuantity: [5, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Color Cartridge",
			tier: 2,
			output: [getMaterialIndexByName("Color Cartridge")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Flower Petals")],
			inputQuantity: [5],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 6
		},
		{
			name: "Beacon",
			tier: 5,
			output: [getMaterialIndexByName("Beacon")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Plate"), getMaterialIndexByName("Iron Rod"), getMaterialIndexByName("Wire"), getMaterialIndexByName("Cable")],
			inputQuantity: [3, 1, 15, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 8
		},
		{
			name: "Crystal Beacon",
			tier: 5,
			output: [getMaterialIndexByName("Beacon")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Steel Beam"), getMaterialIndexByName("Steel Pipe"), getMaterialIndexByName("Crystal Oscillator")],
			inputQuantity: [4, 16, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Iodine Infused Filter",
			tier: 7,
			output: [getMaterialIndexByName("Iodine Infused Filter")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Gas Filter"), getMaterialIndexByName("Quickwire"), getMaterialIndexByName("Aluminum Casing")],
			inputQuantity: [1, 8, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		// Ammos
		{
			name: "Iron Rebar",
			tier: 0,
			output: [getMaterialIndexByName("Iron Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Rod")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 4
		},
		{
			name: "Stun Rebar",
			tier: 2,
			output: [getMaterialIndexByName("Stun Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Rebar"), getMaterialIndexByName("Quickwire")],
			inputQuantity: [1, 5],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Shatter Rebar",
			tier: 2,
			output: [getMaterialIndexByName("Shatter Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Rebar"), getMaterialIndexByName("Quartz Crystal")],
			inputQuantity: [2, 3],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Explosive Rebar",
			tier: 5,
			output: [getMaterialIndexByName("Explosive Rebar")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Iron Rebar"), getMaterialIndexByName("Smokeless Powder"), getMaterialIndexByName("Steel Pipe")],
			inputQuantity: [2, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Rifle Ammo",
			tier: 5,
			output: [getMaterialIndexByName("Rifle Ammo")],
			outputQuantity: [15],
			input: [getMaterialIndexByName("Copper Sheet"), getMaterialIndexByName("Smokeless Powder"), getMaterialIndexByName("Steel Pipe")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Homing Rifle Ammo",
			tier: 7,
			output: [getMaterialIndexByName("Homing Rifle Ammo")],
			outputQuantity: [10],
			input: [getMaterialIndexByName("Rifle Ammo"), getMaterialIndexByName("High-Speed Connector")],
			inputQuantity: [20, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 7,
			output: [getMaterialIndexByName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getMaterialIndexByName("Rifle Ammo"), getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Packaged Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Turbo Rifle Ammo",
			tier: 7,
			output: [getMaterialIndexByName("Turbo Rifle Ammo")],
			outputQuantity: [50],
			input: [getMaterialIndexByName("Rifle Ammo"), getMaterialIndexByName("Aluminum Casing"), getMaterialIndexByName("Turbofuel")],
			inputQuantity: [25, 3, 3],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Nobelisk",
			tier: 3,
			output: [getMaterialIndexByName("Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Black Powder"), getMaterialIndexByName("Steel Pipe")],
			inputQuantity: [2, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 6
		},
		{
			name: "Gas Nobelisk",
			tier: 3,
			output: [getMaterialIndexByName("Gas Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Nobelisk"), getMaterialIndexByName("Biomass")],
			inputQuantity: [1, 10],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Pulse Nobelisk",
			tier: 5,
			output: [getMaterialIndexByName("Pulse Nobelisk")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Nobelisk"), getMaterialIndexByName("Crystal Oscillator")],
			inputQuantity: [5, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Cluster Nobelisk",
			tier: 5,
			output: [getMaterialIndexByName("Cluster Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Nobelisk"), getMaterialIndexByName("Smokeless Powder")],
			inputQuantity: [3, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 60
		},
		{
			name: "Nuke Nobelisk",
			tier: 8,
			output: [getMaterialIndexByName("Nuke Nobelisk")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Nobelisk"), getMaterialIndexByName("Encased Uranium Cell"), getMaterialIndexByName("Smokeless Powder"), getMaterialIndexByName("AI Limiter")],
			inputQuantity: [5, 20, 10, 6],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		// Nuclear
		{
			name: "Electromagnetic Control Rod",
			tier: 8,
			output: [getMaterialIndexByName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Stator"), getMaterialIndexByName("AI Limiter")],
			inputQuantity: [3, 2],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Electromagnetic Connection Rod",
			tier: 8,
			output: [getMaterialIndexByName("Electromagnetic Control Rod")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Stator"), getMaterialIndexByName("High-Speed Connector")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 15
		},
		{
			name: "Encased Uranium Cell",
			tier: 8,
			output: [/*getMaterialIndexByName("Sulfuric Acid"),*/ getMaterialIndexByName("Encased Uranium Cell")],
			outputQuantity: [/*2,*/ 5],
			input: [getMaterialIndexByName("Sulfuric Acid"), getMaterialIndexByName("Uranium"), getMaterialIndexByName("Concrete")],
			inputQuantity: [6, 10, 3],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Infused Uranium Cell",
			tier: 8,
			output: [getMaterialIndexByName("Encased Uranium Cell")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Uranium"), getMaterialIndexByName("Silica"), getMaterialIndexByName("Sulfur"), getMaterialIndexByName("Quickwire")],
			inputQuantity: [5, 3, 5, 15],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 12
		},
		{
			name: "Non-fissile Uranium",
			tier: 8,
			output: [getMaterialIndexByName("Non-fissile Uranium"), getMaterialIndexByName("Water")],
			outputQuantity: [20, 6],
			input: [getMaterialIndexByName("Uranium Waste"), getMaterialIndexByName("Silica"), getMaterialIndexByName("Nitric Acid"), getMaterialIndexByName("Sulfuric Acid")],
			inputQuantity: [15, 10, 6, 6],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 24
		},
		{
			name: "Fertile Uranium",
			tier: 8,
			output: [getMaterialIndexByName("Non-fissile Uranium"), getMaterialIndexByName("Water")],
			outputQuantity: [20, 8],
			input: [getMaterialIndexByName("Uranium"), getMaterialIndexByName("Uranium Waste"), getMaterialIndexByName("Nitric Acid"), getMaterialIndexByName("Sulfuric Acid")],
			inputQuantity: [5, 5, 3, 5],
			machine: getMachineIndexbyName("Blender"),
			craftingTime_s: 12
		},
		{
			name: "Plutonium Pellet",
			tier: 8,
			output: [getMaterialIndexByName("Plutonium Pellet")],
			outputQuantity: [30],
			input: [getMaterialIndexByName("Non-fissile Uranium"), getMaterialIndexByName("Uranium Waste")],
			inputQuantity: [100, 25],
			machine: getMachineIndexbyName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 60
		},
		{
			name: "Encased Plutonium Cell",
			tier: 8,
			output: [getMaterialIndexByName("Encased Plutonium Cell")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Plutonium Pellet"), getMaterialIndexByName("Concrete")],
			inputQuantity: [2, 4],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 12
		},
		{
			name: "Instant Plutonium Cell",
			tier: 8,
			output: [getMaterialIndexByName("Encased Plutonium Cell")],
			outputQuantity: [20],
			input: [getMaterialIndexByName("Non-fissile Uranium"), getMaterialIndexByName("Aluminum Casing")],
			inputQuantity: [150, 20],
			machine: getMachineIndexbyName("Particle Accelerator (Plutonium Pellet)"),
			craftingTime_s: 120
		},
		{
			name: "Uranium Fuel Rod Power",
			tier: 8,
			output: [getMaterialIndexByName("MJ of Power"), getMaterialIndexByName("Uranium Waste")],
			outputQuantity: [750000, 50],
			input: [getMaterialIndexByName("Uranium Fuel Rod"), getMaterialIndexByName("Water")],
			inputQuantity: [1, 1200],
			machine: getMachineIndexbyName("Nuclear Power Plant"),
			craftingTime_s: 300
		},
		// Special
		{
			name: "Power Shard (1)",
			tier: 0,
			output: [getMaterialIndexByName("Power Shard")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Blue Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 8
		},
		{
			name: "Power Shard (2)",
			tier: 0,
			output: [getMaterialIndexByName("Power Shard")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Yellow Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 12
		},
		{
			name: "Power Shard (3)",
			tier: 0,
			output: [getMaterialIndexByName("Power Shard")],
			outputQuantity: [5],
			input: [getMaterialIndexByName("Purple Power Slug")],
			inputQuantity: [1],
			machine: getMachineIndexbyName("Constructor"),
			craftingTime_s: 24
		},
		{
			name: "Smart Plating",
			tier: 2,
			output: [getMaterialIndexByName("Smart Plating")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Reinforced Iron Plate"), getMaterialIndexByName("Rotor")],
			inputQuantity: [1, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 30
		},
		{
			name: "Plastic Smart Plating",
			tier: 5,
			output: [getMaterialIndexByName("Smart Plating")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Reinforced Iron Plate"), getMaterialIndexByName("Rotor"), getMaterialIndexByName("Plastic")],
			inputQuantity: [1, 1, 3],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 24
		},
		{
			name: "Versatile Framework",
			tier: 3,
			output: [getMaterialIndexByName("Versatile Framework")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Modular Frame"), getMaterialIndexByName("Steel Beam")],
			inputQuantity: [1, 12],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Flexible Framework",
			tier: 5,
			output: [getMaterialIndexByName("Versatile Framework")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Modular Frame"), getMaterialIndexByName("Steel Beam"), getMaterialIndexByName("Rubber")],
			inputQuantity: [1, 6, 8],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 16
		},
		{
			name: "Automated Wiring",
			tier: 4,
			output: [getMaterialIndexByName("Automated Wiring")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Stator"), getMaterialIndexByName("Cable")],
			inputQuantity: [1, 20],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 24
		},
		{
			name: "Automated Speed Wiring",
			tier: 7,
			output: [getMaterialIndexByName("Automated Wiring")],
			outputQuantity: [4],
			input: [getMaterialIndexByName("Stator"), getMaterialIndexByName("Wire"), getMaterialIndexByName("High-Speed Connector")],
			inputQuantity: [2, 40, 1],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 32
		},
		{
			name: "Modular Engine",
			tier: 5,
			output: [getMaterialIndexByName("Modular Engine")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Motor"), getMaterialIndexByName("Rubber"), getMaterialIndexByName("Smart Plating")],
			inputQuantity: [2, 15, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 60
		},
		{
			name: "Adaptive Control Unit",
			tier: 5,
			output: [getMaterialIndexByName("Adaptive Control Unit")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Automated Wiring"), getMaterialIndexByName("Circuit Board"), getMaterialIndexByName("Heavy Modular Frame"), getMaterialIndexByName("Computer")],
			inputQuantity: [15, 10, 2, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Assembly Director System",
			tier: 7,
			output: [getMaterialIndexByName("Assembly Director System")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Adaptive Control Unit"), getMaterialIndexByName("Supercomputer")],
			inputQuantity: [2, 1],
			machine: getMachineIndexbyName("Assembler"),
			craftingTime_s: 80
		},
		{
			name: "Magnetic Field Generator",
			tier: 8,
			output: [getMaterialIndexByName("Magnetic Field Generator")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Versatile Framework"), getMaterialIndexByName("Electromagnetic Control Rod"), getMaterialIndexByName("Battery")],
			inputQuantity: [5, 2, 10],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Thermal Propulsion Rocket",
			tier: 8,
			output: [getMaterialIndexByName("Thermal Propulsion Rocket")],
			outputQuantity: [2],
			input: [getMaterialIndexByName("Modular Engine"), getMaterialIndexByName("Turbo Motor"), getMaterialIndexByName("Cooling System"), getMaterialIndexByName("Fused Modular Frame")],
			inputQuantity: [5, 2, 6, 2],
			machine: getMachineIndexbyName("Manufacturer"),
			craftingTime_s: 120
		},
		{
			name: "Nuclear Pasta",
			tier: 8,
			output: [getMaterialIndexByName("Nuclear Pasta")],
			outputQuantity: [1],
			input: [getMaterialIndexByName("Copper Powder"), getMaterialIndexByName("Pressure Conversion Cube")],
			inputQuantity: [200, 1],
			machine: getMachineIndexbyName("Particle Accelerator (Nuclear Pasta)"),
			craftingTime_s: 120
		}
	];