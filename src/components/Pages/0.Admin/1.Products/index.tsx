import { useEffect, useState } from "react"
import Button, { EmptyButton } from "../../../common/Button"
import BlockInput from "../../../common/InputBlock"

import trash_icon from '/src/assets/admin/trash.svg'

const ProductsAdmin = () => {
	const styles = {
		container: 'grid grid-cols-3 gap-14',
		title: "font-bold text-2xl mb-3 ",
	}

	return (
		<section className={styles.container}>
			<ProductCol btnText="Add product" btnColor="green" heading="Add product:" />
			<ProductCol btnText="Update roduct" btnColor="yellow" heading="Heading" />
			<div className="p-5 ">
				<h2 className={styles.title}>Delete product:</h2>
				<BlockInput placeholder="Code" />
				<EmptyButton className="bg-[#DE3813] text-white w-full" > Delete product </EmptyButton>

			</div>
		</section>
	)
}

const ProductCol = (
	{heading, btnText, btnColor}:
	{heading:string, btnText:string, btnColor:string}
) => {
	const [productData, setProductData] = useState({
		name: '',
		code: '',
		quantityPerPackage: '',
		quantityPerPallet: '',
	}) 

	const [response, setResponse] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (response) {
			console.log(response)
		}
	}, [response])

	/**
	 * Handles the form submission when creating a new user.
	 * 
	 * @param e - The event object for the button click.
	 */
	const handleFormSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsLoading(true)


		fetch('http://localhost:5000/api/item/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(productData)
		})
		.then(data => {
			if (data.status === 200)
				return data.json()
			else
				throw new Error('Error ' + data.statusText)
		})
		.then(data => {
			setResponse(data)
		}).finally(()=>{
			setIsLoading(false)
		})
	}
	const styles = {
		container: 'bg-white p-5 rounded-md ',
		title: "font-bold text-2xl mb-3 ",
		select: "bg-main-indigo text-white py-3 px-6 rounded appearance-none ",
		input: "",
		flexContainer: 'flex flex-col ', 
		btnLoading : "rounded-full border border-b-0 animate-spin w-6 h-6 inline-block ",

	}

	switch (btnColor) {
		case 'yellow':
			btnColor = 'bg-[#CFB147] text-white'
			break;
		case 'green':
			btnColor = 'bg-green-800 text-white'
			break;
		default:
			btnColor = 'bg-main-indigo text-white'
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{heading}</h2>
			<select name="" id="" className={styles.select} >
				<option selected disabled hidden value="" className="">Product type ▼</option>
				<option value="" className="">Option</option>
				<option value="" className="">Option</option>
				<option value="" className="">Option</option>
			</select>

			<div className={styles.flexContainer}>
				<BlockInput onInputChange={(e)=>setProductData({...productData, name:e.target.value})} zeroMargin={true} placeholder="Name" />
				<BlockInput onInputChange={(e)=>setProductData({...productData, code:e.target.value})} zeroMargin={true} placeholder="Code" />
				<BlockInput onInputChange={(e)=>setProductData({...productData, quantityPerPackage:e.target.value})} zeroMargin={true} placeholder="Quantity per package" />
				<BlockInput onInputChange={(e)=>setProductData({...productData, quantityPerPallet:e.target.value})} zeroMargin={true} placeholder="Quantity per pallet" />
			</div>

			<div className="flex gap-2 my-2">
				<Button > Choose File</Button>
				<p className="text-black/50 py-3 px-3">Filename.jpg</p>
			</div>

			<div className="mb-2">
				<InputWithIcon isDeleteBtn={true} />
				<InputWithIcon isDeleteBtn={true} />
				<InputWithIcon isDeleteBtn={true} />
				<InputWithIcon isDeleteBtn={false} />
			</div>

			<EmptyButton onClick={handleFormSubmit} className={'w-full flex justify-center gap-4 ' + btnColor}  >
			{isLoading ? <><div className={styles.btnLoading + (isLoading ? '' : 'hidden')}></div> <div>Loading...</div></> : btnText}
			</EmptyButton>
		</div>

	)
}

const InputWithIcon = ({isDeleteBtn}:{isDeleteBtn:boolean})=> {
	return(
		<div className="flex justify-center gap-2 ">
		<BlockInput  placeholder="Volume" zeroMargin />
		{
			isDeleteBtn ? <EmptyButton className="bg-[#DE3813] min-h-full mt-2" >
				<img src={trash_icon} alt="" />
			</EmptyButton> : 
			<button className="bg-main-indigo text-white mt-2 px-5 rounded ">Add</button>		
		}

	</div>
	)
}

export default ProductsAdmin