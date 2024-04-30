// export interface filterDBType {
// 	title: string,
// 	index: number,
// 	children: {
// 		index: number,
// 		name: string,
// 		checkboxColor?: string,
// 	}[]

// }

const filter_db = [
	{
		title: "Filters",
		index: 0,
		children: [
			{
				index: 0x10,
				name: "All",
			},
			{
				index: 0x11,
				name: "Bottles",
			},
			{
				index: 0x12,
				name: "Jars",
			},
			{
				index: 0x13,
				name: "Caps",
			},
			{
				index: 0x14,
				name: "Handles",
			},
			{
				index: 0x15,
				name: "Billets",
			}
		]
	},
	{
		title: "Container type",
		index: 1,
		children: [
			{
				index: 0x20,
				name: "Water and drinks",
			},
			{
				index: 0x21,
				name: "Alcohol",
			},
			{
				index: 0x22,
				name: "Chemsitry",
			},
			{
				index: 0x23,
				name: "Oil",
			}
		]
	},
	{
		title: "Cap type",
		index: 2,
		children: [
			{
				index: 0x30,
				name: "Basic",
			},
			{
				index: 0x31,
				name: "Anti-child protection",
			},
			{
				index: 0x32,
				name: "Sport",
			},
			{
				index: 0x33,
				name: "For jar",
			}
		]
	},
	{
		title: "Volume",
		index: 3,
		children: [
			{
				index: 0x40,
				name: "0,1L",
			},
			{
				index: 0x41,
				name: "0,15L",
			},
			{
				index: 0x42,
				name: "0,2L",
			},
			{
				index: 0x43,
				name: "0,25L",
			},
			{
				index: 0x44,
				name: "0,33L",
			},
			{
				index: 0x45,
				name: "0,45L",
			},
			{
				index: 0x46,
				name: "0,5L",
			},
			{
				index: 0x47,
				name: "0,65L",
			},
			{
				index: 0x48,
				name: "1L",
			},
			{
				index: 0x49,
				name: "1,5L",
			},
			{
				index: 0x4a,
				name: "2L",
			},
			{
				index: 0x4b,
				name: "3L",
			},
			{
				index: 0x4c,
				name: "5L",
			},
			{
				index: 0x4d,
				name: "7L",
			}
		]
	},
	{
		title: "Diameter",
		index: 4,
		children: [
			{
				index: 0x50,
				name: "28 mm",
			},
			{
				index: 0x51,
				name: "38 mm",
			},
			{
				index: 0x52,
				name: "48 mm",
			}
		]
	},
	{
		title: "Color",
		index: 5,
		children: [
			{
				index: 0x60,
				name: "Transparent",
				checkboxColor: '#ffffff',
			},
			{
				index: 0x61,
				name: "Blue",
				checkboxColor: '#5FA7FC',
			},
			{
				index: 0x62,
				name: "White",
				checkboxColor: '#ffffff',
			},
			{
				index: 0x63,
				name: "Red",
				checkboxColor: '#F55454',
			},
			{
				index: 0x64,
				name: "Green",
				checkboxColor: '#7DD97B',
			},
			{
				index: 0x65,
				name: "Brown",
				checkboxColor: '#974D35',
			},
			{
				index: 0x66,
				name: "Black",
				checkboxColor: '#000000',
			},
			{
				index: 0x67,
				name: "Yellow",
				checkboxColor: '#F2E252',
			},
			{
				index: 0x68,
				name: "Pink",
				checkboxColor: '#EFA7F6',
			}
		]
	}
]

export default filter_db