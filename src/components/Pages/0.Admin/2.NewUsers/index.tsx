import { useState } from "react"
import Button, { EmptyButton } from "../../../common/Button"
import InputBlock from "../../../common/InputBlock"

const styles = {
	container: 'pr-[300px] ',
	title: "font-bold text-2xl mb-7 ",

	table: 'text-left w-full',
	row: ' ',
	td: 'p-2',
	rowItemOne: 'font-medium',
}

const NewUserAdmin = () => {

	return (
		<section className={styles.container}>
			<div className="w-full ">
				
				<h2 className={styles.title}>New users:</h2>
				<UserTable />

			</div>
			<RightPanel isEditPanel={true} />
		</section>
	)
}

export const UserTable = () => {
	return(
<table className={styles.table}>	
		<thead className="">
			<tr className="">
				<th scope="col" className="pb-4" >Name</th>
				<th scope="col" className="pb-4" >Company</th>
				<th scope="col" className="pb-4" >Date</th>
				<th scope="col" className="pb-4 w-[50px] ">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr className={styles.row}>
				<td className={styles.td + styles.rowItemOne} scope="row" >Full Name</td>
				<td className={styles.td}>Company Name</td>
				<td className={styles.td}>Jan 11, 2050</td>
				<td className={styles.td}><Button>Select</Button></td>
			</tr>
			<tr className={styles.row}>
				<td className={styles.rowItemOne} scope="row" >Full Name</td>
				<td className={styles.td}>Company Name</td>
				<td className={styles.td}>Jan 11, 2050</td>
				<td className={styles.td}><Button>Select</Button></td>
			</tr>
			<tr className={styles.row}>
				<td className={styles.rowItemOne} scope="row" >Full Name</td>
				<td className={styles.td}>Company Name</td>
				<td className={styles.td}>Jan 11, 2050</td>
				<td className={styles.td}><Button>Select</Button></td>
			</tr>
			<tr className={styles.row}>
				<td className={styles.rowItemOne} scope="row" >Full Name</td>
				<td className={styles.td}>Company Name</td>
				<td className={styles.td}>Jan 11, 2050</td>
				<td className={styles.td}><Button>Select</Button></td>
			</tr>
	</tbody>
</table>
	)
}

export const RightPanel = ({isEditPanel} : {isEditPanel:boolean}) => {
	const [productData, setProductData] = useState({
		full_name: '',
		company_name: '',
		email: '',
		discount: '',
		password: '',
	}) 

	const [response, setResponse] = useState()
	const [isLoading, setIsLoading] = useState(false)

	/**
	 * Handles the form submission when creating a new user.
	 * 
	 * @param e - The event object for the button click.
	 */
	const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoading(true);

		fetch('http://localhost:5000/api/item/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(productData)
		})
			.then(data => {
				if (data.status === 200) {
					return data.json();
				} else {
					throw new Error('Error ' + data.statusText);
				}
			})
			.then(data => {
				setResponse(data);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}
	return (
		<div className="bg-neutral-300  py-24  w-[300px] min-h-screen text-white px-7 absolute right-0 top-0 max-h-full overflow-y-scroll ">
			<h2 className={styles.title + 'text-black '}>Selected user:</h2>
			<InputBlock onInputChange={(e)=>setProductData({...productData, full_name:e.target.value})} className="placeholder:text-black" zeroMargin={true} placeholder="Full Name" />
			<InputBlock onInputChange={(e)=>setProductData({...productData, company_name:e.target.value})} className="placeholder:text-black" zeroMargin={true} placeholder="Company Name" />
			<InputBlock onInputChange={(e)=>setProductData({...productData, email:e.target.value})} className="placeholder:text-black" zeroMargin={true} placeholder="Email Name" />
			<InputBlock onInputChange={(e)=>setProductData({...productData, discount:e.target.value})} zeroMargin={true} placeholder="Discount" />
			<InputBlock onInputChange={(e)=>setProductData({...productData, password:e.target.value})} zeroMargin={true} placeholder="Password" />
			<Button className="mt-2 w-full">Generate Password</Button>
			<Button className="mt-2 w-full">Generate Password</Button>

			{
			isEditPanel ? 
			<>
				<EmptyButton className="bg-green-800 min-h-full mt-10 w-full" onClick={handleFormSubmit} >
					Create User 
				</ EmptyButton>
				<p className="text-green-800 mt-2 text-sm text-center ">And send his account details via email</p>	
			</>
			:
			<>

				<EmptyButton className="w-full bg-green-800 min-h-full mt-10" >
					Save 
				</ EmptyButton>
				<EmptyButton className="w-full bg-[#DE3813] min-h-full mt-2" >
					Delete User 
				</ EmptyButton>
			</>
			}
		</div>
	)
}

export default NewUserAdmin