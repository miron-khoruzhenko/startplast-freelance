import Heading, { Subheading } from "../../../common/Headings"
import ProductBlock from "./ProductBlock"
import products from "./products_db"
import Container from "../../../common/Container"

const Products = () => {
	const styles = {
		// container : "container mx-auto py-28 px-3 ",

		textContainer : "text-center mb-20  ",
		descr : "text-lg ",

		cardContainer: "grid grid-cols-2 sm:grid-cols-4 gap-5 gap-y-10 sm:gap-8 ",
	}
	return (
		<Container>

			<div className={styles.textContainer}>
				<Subheading>Starplast</Subheading>
				<Heading>Our products</Heading>
				<p className={styles.descr}>We offer different types of products, choose what you want</p>
			</div>

			<div className={styles.cardContainer}>
				{products.map(product => (
						<ProductBlock 
							descr={product.descr} 
							href={product.href} 
							img={product.img} 
							title={product.title} 
							key={product.id} />
				))}

			</div>
		</Container>
	)
}

export default Products