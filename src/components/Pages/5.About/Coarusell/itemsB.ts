// import img1 from '../../../../assets/imgs/carousel/1-example.png'
// import img2 from '../../../../assets/imgs/carousel/2-example.png'
// import img3 from '../../../../assets/imgs/carousel/3-example.png'
// import img4 from '../../../../assets/imgs/carousel/4-example.png'

// const imgArray = [img1, img2, img3, img4]

const items : {
	index : number,
	title : string,
	text : string,
	imgUrl : string,
	img : string,
	link : string
}[] = []

// const dbSize = imgArray.length
const dbSize = 4

for (let x = 0; x < dbSize; x++){
	items.push(
		{
			index : x,
			title : "Template",
			text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis repellat exercitationem laudantium, doloribus velit accusamus, optio, adipisci ut co",
			imgUrl : 'someurl.jpg',
			img : '',
			// img : imgArray[x] || '',
			link : "https://somelink.com"
		}
	)
}

export default items;

// let index = 0

// export const items = [
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
	
// ]