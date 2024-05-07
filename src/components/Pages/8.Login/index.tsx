import { useEffect, useState } from "react"
import Button, { EmptyButton } from "../../common/Button"
import Heading from "../../common/Headings"

import img from '/src/assets/login/smart_id_logo.png'
import BlockInput from "../../common/InputBlock"
import RegistrationPopup from "../../common/popups/Popups"

const Login = () => {
	const btnLabels = ['Smart-ID', 'ID-kaart', 'Mobil-ID', 'E-mail login']

	const [pressedBtnStr, setPressedBtnStr] = useState('Smart-ID')
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

	const styles = {
		container: 'py-6 sm:py-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-56 gap-y-14 p-3 ',
		btnContainer: 'grid grid-cols-2 sm:grid-cols-4 gap-2 mb-14',
		btn: "bg-main-pink text-white mt-6 w-full sm:w-auto",
	}
	const renderLoginComponent = () => {
		switch (pressedBtnStr) {
			case btnLabels[0]:
				return <SmartIDLogin />;
			case btnLabels[1]:
				return <IDCardLogin />;
			case btnLabels[2]:
				return <MobileIDLogin />;
			case btnLabels[3]:
				return <EmailLogin />;
			default:
				return null;
		}
	}

	const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setPressedBtnStr((e.target as HTMLButtonElement).innerText)
	}

	useEffect(()=>{
    window.scrollTo(0, 0);
	}, [isRegistrationOpen])
	

	return (
		<section className={styles.container}>
			<RegistrationPopup  isOpen={isRegistrationOpen} setIsOpen={setIsRegistrationOpen} />
			<div className="">
				<Heading>Log in</Heading>
				
				<div className={styles.btnContainer}>
					{btnLabels.map((label, index) => (
						<Button key={index} onClick={handleClick} isSecondary={pressedBtnStr !== label}>{label}</Button>
					))}
				</div>

				{renderLoginComponent()}
			</div>
			<div className="">
				<Heading>Registration</Heading>
				<EmptyButton className={styles.btn} onClick={()=>setIsRegistrationOpen(true)}>Create account</EmptyButton>
			</div>
		</section>
	)
}


const SmartIDLogin = () => {
	const styles = {
		btnLoading : "rounded-full border border-b-0 animate-spin w-6 h-6 inline-block ",
	}

	const [fetchData, setFetchData] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (fetchData) {
			console.log(fetchData)
		}
	}, [fetchData])

	/**
	 * Handles the form submission when creating a new user.
	 * 
	 * @param e - The event object for the button click.
	 */
	const handleLoginSubmit = () => {
		setIsLoading(true)
		fetch('http://localhost:5000/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginData)
		})
		.then(data => {
			if (data.status === 200)
				return data.json()
			else
				throw new Error('Error ' + data.statusText)
		})
		.then(data => {
			setFetchData(data)
		})
		.finally(()=>{
			// setIsLoading(false)
		})
	}

	const [loginData, setLoginData] = useState({
		isikukood: '',
	})

	return (
		<div className="">
			<img src={img} alt="" className={'mb-6'} />
			<BlockInput onInputChange={(e)=>setLoginData({...loginData, isikukood: e.target.value})} label="Isikukood*" type="text" placeholder="" />
			{isLoading ? 
				<Button className="flex justify-center items-center  gap-4 w-full text-center">
					<div className={styles.btnLoading + (isLoading ? '' : 'hidden')}></div> <div>Loading...</div>
				</Button>
				:
			<Button className="w-full" onClick={handleLoginSubmit}>Log in</Button>}

		</div>
	)
}

const IDCardLogin = () => {
	return (
		<div className="">
			<BlockInput label="ID Number" type="text" placeholder="" />
			<BlockInput label="Password" type="text" placeholder="" />
			<Button className="w-full">Log in</Button>
		</div>
	)
}

const MobileIDLogin = () => {
	return (
		<div className="">
			<BlockInput label="Mobile ID Number" type="text" placeholder="" />
			{/* <InputBlock label="Password" type="text" placeholder="" /> */}
			<Button className="w-full">Log in</Button>
		</div>
	)
}

const EmailLogin = () => {
	return (
		<div className="">
			<BlockInput label="E-mail" type="text" placeholder="" />
			<BlockInput label="Password" type="text" placeholder="" />
			<Button className="w-full">Log in</Button>
		</div>
	)
}


export default Login