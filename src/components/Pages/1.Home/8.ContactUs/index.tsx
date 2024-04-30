import Button from "../../../common/Button"
import Container from "../../../common/Container"
import Heading from "../../../common/Headings"
import InputBlock from "../../../common/InputBlock"

import contact_data from "./contact_data"

const ContactUs = () => {
	const styles = {
		container: '',
		mainGrid: 'grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20',
		inputContainer: '',

		iconGrid: "grid grid-cols-1 sm:grid-cols-2 h-min gap-y-10",
	}

	return (
		<Container className={styles.container}>
			<Heading>Contact Us</Heading>
			<div className={styles.mainGrid}>
				<div className={styles.inputContainer}>
					<InputBlock label="Name" type="text" placeholder="Placeholder" />
					<InputBlock label="Email" type="email" placeholder="Placeholder" />
					<InputBlock label="Message" placeholder="Type your message..." textarea={true} />
					<InputBlock type="checkbox" placeholder="Placeholder" />
					<Button className="w-full text-center sm:w-min mt-10 ">Send</Button>

				</div>
				<div className={styles.iconGrid}>
					{contact_data.map((item, index) => (
						<IconBlock key={index} 
							icon={item.icon} 
							title={item.title} 
							text={item.text} 
							underline={index !== 2} 
							href={item.href}
						/>
					))}
				</div>
			</div>
		</Container>
	)
}


const IconBlock = (
	{icon, title, text, underline, href} : 
	{icon: string, title:string, text: string, underline?:boolean, href?:string}) => {
	const styles = {
		container: 'flex flex-col items-start',
		icon: 'w-8 h-8 ',
		textContainer: '',
		title: 'text-lg font-bold',
		text: ' ',
		underline: 'border-b border-black',
	}

	return (
		<div className={styles.container}>
			{/* <div className={styles.icon}>{icon}</div> */}
			<img src={icon} alt="" className={styles.icon} />
			<div className={styles.textContainer}>
				<h3 className={styles.title}>{title}</h3>
				<a href={href || ''} className={styles.text + (underline ? 'underline ' : '')}>{text}</a>
			</div>
		</div>
	)
}

export default ContactUs