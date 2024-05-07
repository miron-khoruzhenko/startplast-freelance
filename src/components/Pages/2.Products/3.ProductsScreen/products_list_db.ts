import img0  from '/src/assets/products/productGridHQ/img0.jpg'
import img1  from '/src/assets/products/productGridHQ/img1.jpg'
import img2  from '/src/assets/products/productGridHQ/img2.jpg'
import img3  from '/src/assets/products/productGridHQ/img3.jpg'
import img4  from '/src/assets/products/productGridHQ/img4.jpg'
import img5  from '/src/assets/products/productGridHQ/img5.jpg'
import img6  from '/src/assets/products/productGridHQ/img6.jpg'
import img7  from '/src/assets/products/productGridHQ/img7.jpg'
import img8  from '/src/assets/products/productGridHQ/img8.jpg'
import img9  from '/src/assets/products/productGridHQ/img9.jpg'
import img10 from '/src/assets/products/productGridHQ/img10.jpg'
import img11 from '/src/assets/products/productGridHQ/img11.jpg'

const img_arr = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

let index = 0;

const product_list_db = [
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product1',
		img: img_arr[index],
		tags: ['bottles', 'water and drinks', 'basic', '0,5L', '38mm', 'white'],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product2',
		img: img_arr[index],
		tags: ['bottles', 'water and drinks', 'basic', '0,2L', '38mm', 'white'],
		index: index++,
	},
	{
		title: 'Test',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product3',
		img: img_arr[index],
		tags: ['bottles', 'water and drinks', 'basic', '0,5L', '28mm', 'white'],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product4',
		img: img_arr[index],
		tags: ['bottles', 'water and drinks', 'basic', '0,5L', '38mm', 'green'],

		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product5',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product6',
		img: img_arr[index],
		tags: ['bottles', 'water and drinks', 'basic', '5L', '38mm', 'blue'],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product7',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product8',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product9',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product10',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product11',	
		img: img_arr[index],
		tags: [],
		index: index++,
	},
	{
		title: 'Product name',
		descr: '500 pcs in 1 pack',
		price: '€55',
		href: '/products/product12',
		img: img_arr[index],
		tags: [],
		index: index++,
	},
]

export default product_list_db