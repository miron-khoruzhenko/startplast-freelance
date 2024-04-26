import Container from "../../../common/Container"

import adv_data from "./adv_data"

const Advantages = () => {
	const styles = {
		container: 'grid grid-cols-1 md:grid-cols-3 gap-12 ',
	}

	return (
		<Container className={styles.container}>
			{adv_data.map((adv) => (
				<AdvBlock key={adv.index} icon={adv.img} title={adv.title} text={adv.text} />))}
		</Container>
	)
}

const AdvBlock = ({icon, title, text } : {icon:string, title:string, text:string }) => {
	const styles = {
		container: 'flex flex-col justify-center items-center gap-6',
		title: 'text-3xl font-bold text-center text-main-indigo',
		text: 'text-base text-center',
	}

	return (
		<div className={styles.container}>
			<img src={icon} alt={title} />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Advantages