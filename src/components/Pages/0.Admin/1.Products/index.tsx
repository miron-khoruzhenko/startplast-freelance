import Button, { EmptyButton } from "../../../common/Button"
import InputBlock from "../../../common/InputBlock"

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
				<InputBlock placeholder="Code" />
				<EmptyButton className="bg-[#DE3813] text-white w-full" > Delete product </EmptyButton>

			</div>
		</section>
	)
}

const ProductCol = (
	{heading, btnText, btnColor}:
	{heading:string, btnText:string, btnColor:string}
) => {
	const styles = {
		container: 'bg-white p-5 rounded-md ',
		title: "font-bold text-2xl mb-3 ",
		select: "bg-main-indigo text-white py-3 px-6 rounded appearance-none ",
		input: "",
		flexContainer: 'flex flex-col ', 
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
				<InputBlock zeroMargin={true} placeholder="Name" />
				<InputBlock zeroMargin={true} placeholder="Code" />
				<InputBlock zeroMargin={true} placeholder="Quantity per package" />
				<InputBlock zeroMargin={true} placeholder="Quantity per pallet" />
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

			<EmptyButton className={'w-full ' + btnColor}  >{btnText}</EmptyButton>
		</div>

	)
}

const InputWithIcon = ({isDeleteBtn}:{isDeleteBtn:boolean})=> {
	return(
		<div className="flex justify-center gap-2 ">
		<InputBlock  placeholder="Volume" zeroMargin />
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