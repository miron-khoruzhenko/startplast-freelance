import Container from "../../../common/Container"
import Heading, { Subheading } from "../../../common/Headings"

import img from "/src/assets/home/about-us.png"

const AboutUs = () => {
	const styles = {
		container: 'grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20 ',
		aboutUs: 'bg-main-gray ',
		descr: "mb-10 text-base sm:text-lg ",

		statsBlockGrid: 'grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 ',
		img: "min-h-full min-w-full object-cover ",
	}

	return (
		<div className={styles.aboutUs}>
			<Container className={styles.container}>
				<div className="">
					<Subheading>Starplast</Subheading>
					<Heading>About us</Heading>

					<p className={styles.descr}>
					VKM Trading OÜ was founded in 2007. in the year following the merger of two companies, Senderlen LLC and Starplast LLC. Starplast Ltd was involved in the production of PET Tare in 1997. since, Senderlen LLC 1999. year.
					</p>

					<div className={styles.statsBlockGrid}>
						<StatBLock number={191}			text="Different Capacities" />
						<StatBLock number={6}				text="Product categories" />
						<StatBLock number={"100+"}	text="Satisfied Clients" />
						<StatBLock number={2007}		text="Founded" />
					</div>
				</div>
				<img src={img} alt="" className={styles.img} />
			</Container>
		</div>
	)
}

const StatBLock = ({ number, text } : {number:string|number, text:string}) => {
	const styles = {
		number: 'mb-2 sm:mb-6 text-main-indigo font-bold text-4xl sm:text-5xl ',
	}
	return (
		<div className="">
			<h3 className={styles.number}>
				{number}
			</h3>
			<div className="">
				{text}
			</div>
		</div>
	)
}

export default AboutUs