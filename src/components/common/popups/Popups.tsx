import { useEffect } from "react"
import Button from "../Button"
import Heading, { Subheading } from "../Headings"
import InputBlock from "../InputBlock"

const RegistrationPopup = (
	{isOpen, setIsOpen} :
	{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}

) => {
	const styles = {
		title: 'text-2xl mt-10 mb-6 text-main-indigo font-bold',
	}


	useEffect(()=>{
		// console.log(modeStyles)
		if(isOpen){
			document.body.style.overflow = 'hidden'
		}else{
			document.body.style.overflow = 'scroll'
		}

	}, [isOpen])

	return (
		<Modal isOpen={isOpen}>
			<Header title="Registration" descr="Explore individual prices with your company account" />

			<h3 className={styles.title}>New company</h3>
				<InputBlock label="Company info" placeholder="Placeholder" />
				<InputBlock label="Registration code" placeholder="Placeholder" />
				<InputBlock label="Company e-mail" placeholder="Placeholder" />
			
			<h3 className={styles.title}>New company</h3>
				<InputBlock label="E-mail" placeholder="Placeholder" />
				<InputBlock label="Registration code" placeholder="Placeholder" />
				<InputBlock label="Company e-mail" placeholder="Placeholder" />

			<Footer isSecondCheckbox setItOpen={setIsOpen} />
		</Modal>
	)
}

export const LoginPopup = (
	{isOpen, setIsOpen} :
	{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}

) => {

	useEffect(()=>{
		// console.log(modeStyles)
		if(isOpen){
			document.body.style.overflow = 'hidden'
		}else{
			document.body.style.overflow = 'scroll'
		}

	}, [isOpen])
	const styles = {
		container: 'w-screen h-screen bg-main-gray/40 flex flex-col justify-center items-center absolute top-0 left-0 z-50 text-center',
	}

	return (
		<Modal isOpen={isOpen}>
			<Header title="Login" />
			<InputBlock label="Your name" placeholder="Placeholder" />
			<InputBlock label="E-mail" placeholder="Placeholder" />
			<InputBlock label="Describe what you want" placeholder="Placeholder" />
			<Footer setItOpen={setIsOpen} />
		</Modal>
	)
}

const Header = ({title, descr} : {title:string, descr?: string}) => {

	return (
		<div className="text-center">
			<Subheading>Starplast</Subheading>
			<Heading>{title}</Heading>
			{descr && <p className="text-lg">{descr}</p>}

		</div>
	)
}

const Footer = (
	{isSecondCheckbox, setItOpen }:
	{isSecondCheckbox ?: boolean, setItOpen: React.Dispatch<React.SetStateAction<boolean>>}
) => {
	const styles = {
		flexContainer : 'flex justify-center items-center gap-6',
	}

	return (
		<>
			<div className={styles.flexContainer}>
				<InputBlock type="checkbox" label="I accept the Terms" placeholder="test" />
				{isSecondCheckbox && <InputBlock type="checkbox" label="Join newsletter" placeholder="test" />}
			</div>
			<div className={styles.flexContainer}>
				<Button>Sign Up</Button>
				<Button isSecondary onClick={()=>setItOpen(false)} >Cancel</Button>
			</div>
		</>
	)
}

const Modal = (
	{children, isOpen, className}
	: {children: React.ReactNode, isOpen: boolean, className?: string}
) => {
	const styles = {
		container: `${isOpen? '' : 'hidden'} w-screen h-screen bg-main-gray/80 flex flex-col justify-center items-center absolute top-0 left-0 z-50 overflow-scroll ` + (className ? className : ''),
		modalBlock: 'bg-white p-10 rounded-lg no-scrollbar h-full min-w-[550px]',
	}

	return (
		<section className={styles.container}>
			<div className={styles.modalBlock}>
				{children}
			</div>
		</section>
	)
}

export default RegistrationPopup