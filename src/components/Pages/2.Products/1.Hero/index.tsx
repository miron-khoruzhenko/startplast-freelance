import Container from "../../../common/Container"
import Heading from "../../../common/Headings"

import img from "/src/assets/common/hero-img-png.png"


const Hero = () => {
	const styles = {
		notFound: 'relative flex flex-col-reverse  ',
		notFoundPseudo: "after:hidden sm:after:block after:h-full after:w-1/3 after:absolute after:right-0 after:top-0 after:bg-main-indigo",
		container: "pt-16 sm:py-28",
		descr: 'text-black sm:text-main-indigo max-w-[487px]',
		imgContainer: 'hidden h-[275px] sm:flex flex-col justify-end bg-main-gray sm:bg-transparent static sm:absolute bottom-0 left-1/2 sm:h-auto object-cover z-10  ',
		img: "",
	}
	return (
		<div className={styles.notFound + styles.notFoundPseudo}>
			<Container className={styles.container} zeroPadding={true}>
				<div className="">
					<Heading>Products</Heading>
					<p className={styles.descr}>The widest range of plastic bottles in all shapes and colors and supplies</p>
				</div>
			</Container>
			<div className={styles.imgContainer}>
				<img src={img} alt="" className={styles.img} />
			</div>
		</div>
	)
}

export default Hero;