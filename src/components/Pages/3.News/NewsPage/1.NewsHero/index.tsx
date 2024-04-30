import Container from '../../../../common/Container'
import bg_img from '/src/assets/news/tmp_bg.jpg'

const Hero = () => {
	const styles = {
		newsPage: 'bg-white bg-no-repeat bg-cover bg-center ',
		container: 'flex flex-col jus items-center text-center text-white gap-4',
		subtitle: 'font-bold ',
		title: 'font-bold text-4xl sm:text-5xl',
		
		stats: 'text-sm text-center ',
		dot: 'w-1 h-1 mb-1 bg-white rounded-full inline-block mx-2 mt-9 sm:mt-12',

	}

	return(
	<section 
		className={styles.newsPage}
		style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg_img})` }}
	>
		<Container className={styles.container}>
			<h2 className={styles.subtitle}>Category</h2>
			<h1 className={styles.title}>Blog title heading will go here</h1>
			<p className={styles.stats}>
				<span className="">11 Jan 2022</span>
				<div className={styles.dot}/>
				<span className="">5 min read</span>
			</p>
		</Container>
	</section>)
}

export default Hero