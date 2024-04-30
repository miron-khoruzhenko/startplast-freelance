import { useState } from "react"
import Button, { EmptyButton } from "../../common/Button"
import Heading from "../../common/Headings"

import img from '/src/assets/login/smart_id_logo.png'
import InputBlock from "../../common/InputBlock"


const Login = () => {
	const btnLabels = ['Smart-ID', 'ID-kaart', 'Mobil-ID', 'E-mail login']

	const [pressedBtnStr, setPressedBtnStr] = useState('Smart-ID')

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
	

	return (
		<section className={styles.container}>
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
				<EmptyButton className={styles.btn}>Create account</EmptyButton>
			</div>
		</section>
	)
}


const SmartIDLogin = () => {
	return (
		<div className="">
			<img src={img} alt="" className={'mb-6'} />
			<InputBlock label="Isikukood*" type="text" placeholder="" />
			<Button className="w-full">Log in</Button>
		</div>
	)
}

const IDCardLogin = () => {
	return (
		<div className="">
			<InputBlock label="ID Number" type="text" placeholder="" />
			<InputBlock label="Password" type="text" placeholder="" />
			<Button className="w-full">Log in</Button>
		</div>
	)
}

const MobileIDLogin = () => {
	return (
		<div className="">
			<InputBlock label="Mobile ID Number" type="text" placeholder="" />
			{/* <InputBlock label="Password" type="text" placeholder="" /> */}
			<Button className="w-full">Log in</Button>
		</div>
	)
}

const EmailLogin = () => {
	return (
		<div className="">
			<InputBlock label="E-mail" type="text" placeholder="" />
			<InputBlock label="Password" type="text" placeholder="" />
			<Button className="w-full">Log in</Button>
		</div>
	)
}


export default Login