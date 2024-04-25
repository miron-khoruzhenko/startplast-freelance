import Button from "../../../common/Button"
import hero_img from "/src/assets/home/hero-img.png"

const Hero = () => {
	const styles = {
		hero : "w-screen min-h-screen pt-[75px] ",
		imgContainer : "h-3/5 bg-main-gray ",
		image : "max-h-full h-full mx-auto object-cover ",

		content : "min-h-2/5 bg-white grid grid-cols-1 sm:grid-cols-2 container mx-auto py-10 sm:py-20 px-5 sm:px-0",
		title : "text-[40px] sm:text-[56px] leading-[48px] mb-5 sm:mb-0 font-bold text-main-indigo ",
		textContainer: "flex flex-col gap-6 sm:gap-10 ",
		descr : "text-base sm:text-lg ",

		buttons : "flex gap-4 ",
		button : "rounded px-6 py-3 block border text-base ",
		primaryButton : "bg-main-indigo border-main-indigo text-white ",
		secondaryButton : "border-main-indigo text-main-indigo ",
	}
	return (
		<section className={styles.hero}>
			<div className={styles.imgContainer}>
				<img src={hero_img} className={styles.image} alt="" />
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>
					PET container <br /> production
				</h1>

				<div className={styles.textContainer}>
					<p className={styles.descr}>
						We offer our customers a wide range of PET containers for various purposes, design and containers for packaging food and non-food products.
					</p>

					<div className={styles.buttons}>
						<Button isLink={true} href="#">Go to Products</Button>
						<Button isLink={true} href="#" isSecondary={true} >For companies</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero