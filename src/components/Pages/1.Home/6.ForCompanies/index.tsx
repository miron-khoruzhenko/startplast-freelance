import Button from "../../../common/Button"
import Container from "../../../common/Container"
import Heading from "../../../common/Headings"

import img from '/src/assets/home/for_companies_img.jpg'

const ForCompanies = () => {
	const styles = {
		container: '',
		card: " border border-black/20 grid grid-cols-1 sm:grid-cols-2 rounded",
		textContainer: "p-12 flex flex-col justify-center ",

		descr: "mb-8",
		actions: "w-full flex flex-col sm:flex-row gap-4",
		input: "p-3 border border-black rounded w-full placeholder:text-[#505050] ",
		warning: "text-sm mt-4",
	}

	return (
		<Container className={styles.container}>
			<div className={styles.card}>
				<div className={styles.textContainer}>
				<Heading className="mb-6">For companies</Heading>

				<p className={styles.descr}>We offer individual prices for companies. Complete the sign up form and our manager will create you an account</p>
				
				<div className={styles.actions}>
					<input type="text" className={styles.input} placeholder="Enter your email"/>
					<Button className="whitespace-nowrap text-center ">Sign up</Button>
				</div>
				<p className={styles.warning}>By clicking Sign Up you're confirming that you agree with our <a href="" className="underline">Terms and Conditions.</a></p>
				</div>
				<img src={img} alt="" className="" />
			</div>
			
		</Container>
	)
}

export default ForCompanies