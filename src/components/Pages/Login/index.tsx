import Button from "../../common/Button"
import Heading from "../../common/Headings"


const Login = () => {
	const styles = {
		container: 'py-20 container mx-auto grid grid-cols-2 ',
		btnContainer: 'flex gap-2',
	}
	return (
		<section className={styles.container}>
			<div className="">
				<Heading>Log in</Heading>
				<div className={styles.btnContainer}>
					<Button>Smart-ID</Button>
					<Button isSecondary={true}>ID-kaart</Button>
					<Button isSecondary={true}>Mobil-ID</Button>
					<Button isSecondary={true}>E-mail login</Button>
					
				</div>
			</div>
		</section>
	)
}

export default Login