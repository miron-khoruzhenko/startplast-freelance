import Container from "../../../common/Container"
import Heading from "../../../common/Headings"

import icon0 from "/src/assets/contact/icon0.svg"
import icon1 from "/src/assets/contact/icon1.svg"
import icon2 from "/src/assets/contact/icon2.svg"

const contacts = [
	{
		icon: icon0,
		title: "Email",
		text: "info@starplast.ee",
		href: "mailto:info@starplast.ee"
	},
	{
		icon: icon1,
		title: "Phone",
		text: "+372 609 1403",
		href: "tel:+3726091403"
	},
	{
		icon: icon2,
		title: "Office",
		text: "Tallin, Estonia",
		href: "https://goo.gl/maps/7Z8ZQ5"
	},
]
		
const Hero = () => {
	const styles = {
		hero: 'bg-main-gray',
		container: "flex flex-col items-center justify-center gap-[60px]",

		grid: "grid grid-cols-1 gap-8 sm:grid-cols-3 w-full",
	}

	return (
		<div className={styles.hero}>
			<Container className={styles.container}>
				<Heading>Contacts</Heading>

				<div className={styles.grid}>
					{contacts.map((contact, index) => (
						<InfoBlock key={index} {...contact} />
					))}
				</div>

			</Container>
		</div>
	)
}

const InfoBlock = ({icon, title, text, href} : {icon:string, title:string, text:string, href:string} ) => {
	const styles = {
		infoBlock: "flex flex-col items-start sm:items-center gap-2 sm:gap-6 ",
		icon: "w-12 h-12",
		title: "text-2xl sm:text-[32px] text-main-indigo font-bold",
		text: "text-lg sm:text-2xl underline",
	}

	return (
		<div className={styles.infoBlock}>
			<img src={icon} alt="" className={styles.icon} />
			<h3 className={styles.title}>{title}</h3>
			<a className={styles.text} href={href || ''}>{text}</a>
		</div>
	)
}

export default Hero