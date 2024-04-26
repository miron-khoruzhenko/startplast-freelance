import Button from "../../common/Button"
import Container from "../../common/Container"
import Heading, { Subheading } from "../../common/Headings"
import img from "/src/assets/common/hero-img-png.png"

const NotFound = () => {
	const styles = {
		notFound: 'relative flex flex-col-reverse  ',
		notFoundPseudo: "after:hidden sm:after:block after:h-full after:w-1/3 after:absolute after:right-0 after:top-0 after:bg-main-indigo",
		container: " ",
		descr: '',
		btnContainer: 'flex mt-8 gap-4',
		img: "sm: ",
	}
	return (
		<div className={styles.notFound + styles.notFoundPseudo}>
			<Container className={styles.container}>
				<div className="">
					<Subheading>Page not found</Subheading>
					<Heading>ERROR 404</Heading>
					<p className={styles.descr}>Something went wrong. Please try again later</p>
					<div className={styles.btnContainer}>
						<Button>Go to Products</Button>
						<Button isSecondary={true}>Go to main</Button>
					</div>
				</div>
			</Container>
			<div className="h-[275px] flex flex-col justify-end bg-main-gray sm:bg-transparent static sm:absolute bottom-0 left-1/2 sm:h-auto object-cover z-10 ">
				<img src={img} alt="" className={styles.img} />
			</div>
		</div>
	)
}

export default NotFound