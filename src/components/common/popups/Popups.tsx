import { useEffect, useState } from "react"
import Button from "../Button"
import Heading, { Subheading } from "../Headings"
import BlockInput from "../InputBlock"

const RegistrationPopup = (
	{isOpen, setIsOpen} :
	{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}
) => {
	const styles = {
		title: 'text-2xl mt-10 mb-6 text-main-indigo font-bold',
	}

	const [registrationData, setRegistrationData] = useState({
		company_info: '',
		registration_code: '',
		company_email: '',
		email: '',
		password: '',
		tmp_data: '',
	})

	const [isSubmit, setIsSubmit] = useState(false)
	const [response, setRespones] = useState<{message : string}>()
	const [isResError, setIsResError] = useState(false)
	const [resLoading, setResLoading] = useState(false)

	useEffect(()=>{
		if (registrationData.email && 
			registrationData.password && 
			registrationData.registration_code &&
			registrationData.company_email &&
			isSubmit){
			setResLoading(true)

			fetch('http://localhost:5000/api/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(registrationData)
			})
			.then(data => {
				if (data.status >= 400){
					setIsResError(true)
					
				}
				return data
			})
			.then(data => data.json())
			.then(data => {
				setRespones(data)
				setResLoading(false)
			}
			)
		}
	}, [isSubmit, registrationData])


	useEffect(()=>{
		// console.log(modeStyles)
		if(isOpen){
			document.body.style.overflow = 'hidden'
		}else{
			document.body.style.overflow = 'scroll'
		}

	}, [isOpen])

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Header 
				title="Registration" 
				descr="Explore individual prices with your company account" 
				errorMsg={isResError ? 'Error: ' + response?.message : ''}
				/>

			<h3 className={styles.title}>New company</h3>
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, company_info:e.target.value})} 
					label="Company info" placeholder="Placeholder" />
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, registration_code:e.target.value})} 
					label="Registration code" placeholder="Placeholder" />
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, company_email:e.target.value})} 
					label="Company e-mail" placeholder="Placeholder" />
			
			<h3 className={styles.title}>New company</h3>
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, email:e.target.value })} 
					label="E-mail" placeholder="Placeholder" />
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, password:e.target.value})} 
					label="Password" type='password' placeholder="Placeholder" />
				<BlockInput 
					onInputChange={(e)=>setRegistrationData({...registrationData, tmp_data:e.target.value})} 
					label="Company e-mail" placeholder="Placeholder" />

			<Footer 
				isSecondCheckbox 
				isResLoading={resLoading} 
				setIsSubmit={setIsSubmit}  
				setItOpen={setIsOpen} 
				
			/>
		</Modal>
	)
}

export const LoginPopup = (
	{isOpen, setIsOpen} :
	{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}

) => {
	
	const [loginData, setLoginData] = useState({
		// name: '',
		email: '',
		password: '',
	})
	const [isSubmit, setIsSubmit] = useState(false)
	const [response, setRespones] = useState<{message : string}>()
	const [isResError, setIsResError] = useState(false)
	const [resLoading, setResLoading] = useState(false)

	useEffect(()=>{
		// console.log(modeStyles)
		if(isOpen){
			document.body.style.overflow = 'hidden'
		}else{
			document.body.style.overflow = 'scroll'
		}}, [isOpen]) 

	useEffect(()=>{
		if (loginData.email && loginData.password && isSubmit){
			setResLoading(true)

			fetch('http://localhost:5000/api/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(loginData)
			})
			.then(data => {
				if (data.status >= 400){
					setIsResError(true)
					
				}
				return data
			})
			.then(data => data.json())
			.then(data => {
				setRespones(data)
				setResLoading(false)
			}
			)
		}
	}, [isSubmit, loginData])

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Header title="Login" errorMsg={isResError ? 'Error: ' + response?.message : '' } />
			{/* <InputBlock onInputChange={} label="Your name" placeholder="Placeholder" /> */}
			<BlockInput label="Your name" placeholder="Placeholder" />
			<BlockInput 
				onInputChange={(e)=> setLoginData({...loginData, email:e.target.value}) } 
				label="E-mail" placeholder="Placeholder" 
			/>
			<BlockInput 
				onInputChange={(e)=>setLoginData({...loginData, password:e.target.value}) } 
				label="Password" placeholder="Placeholder" type="password" 
			/>
			<Footer setItOpen={setIsOpen} isResLoading={resLoading} setIsSubmit={setIsSubmit} />
		</Modal>
	)
}

const Header = (
	{title, descr, errorMsg} : 
	{title:string, descr?: string, errorMsg? : string}
) => {

	return (
		<div className="text-center">
			<Subheading>Starplast</Subheading>
			<Heading>{title}</Heading>
			{descr && <p className="text-lg">{descr}</p>}
			{errorMsg && <p className="text-red-500">{errorMsg}</p>}

		</div>
	)
}

const Footer = (
	{isSecondCheckbox, isResLoading, setItOpen, setIsSubmit}:
	{
		isSecondCheckbox ?: boolean, 
		isResLoading ?: boolean,
		setItOpen: React.Dispatch<React.SetStateAction<boolean>>, 
		setIsSubmit?: React.Dispatch<React.SetStateAction<boolean>>
	
	}
) => {
	const styles = {
		flexContainer : 'flex justify-center items-center gap-6',
		btnLoading : "rounded-full border border-b-0 animate-spin w-6 h-6 mx-auto ",
	}

	return (
		<>
			<div className={styles.flexContainer}>
				<BlockInput type="checkbox" label="I accept the Terms" placeholder="test" />
				{isSecondCheckbox && <BlockInput type="checkbox" label="Join newsletter" placeholder="test" />}
			</div>
			<div className={styles.flexContainer}>{
				isResLoading ? 
				<Button className="flex gap-4">
					<div className={styles.btnLoading + (isResLoading ? '' : 'hidden')}></div> Loading...
				</Button>
				:
				<><Button onClick={setIsSubmit && (()=>setIsSubmit(true))}>Sign Up</Button>
				<Button isSecondary onClick={()=>setItOpen(false)} >Cancel</Button></>
			}
			</div>
		</>
	)
}

export const Modal = (
	{children, isOpen, setIsOpen, className, modalClassName}
	: {children: React.ReactNode, isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> , className?: string, modalClassName?: string}
) => {
	const handleClick = (e: React.MouseEvent) => {
		if(e.target === e.currentTarget){
			// console.log('clicked')
			setIsOpen(false)
		}
	}

	const styles = {
		container: `${isOpen? '' : 'hidden'} w-screen h-screen bg-main-gray/80 flex flex-col justify-center items-center absolute top-0 left-0 z-50 overflow-scroll ` + (className ? className : ''),
		modalBlock: 'bg-white p-10 rounded-lg no-scrollbar h-full min-w-[550px] ',
	}

	return (
		<section className={styles.container} onClick={handleClick}>
			<div className={styles.modalBlock + (modalClassName || '')}>
				{children}
			</div>
		</section>
	)
}

export default RegistrationPopup