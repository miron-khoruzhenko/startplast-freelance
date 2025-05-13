import Container from "../../../common/Container"
import { useLocation } from "react-router-dom"
import Heading from "../../../common/Headings"
import Button from "../../../common/Button"
import { useEffect } from "react"

const ProductsPage = () => {
	const styles = {
		grid: 'grid grid-cols-1 sm:grid-cols-2 ',
		strong: 'text-2xl mb-6 block',

		inputLabel: 'flex flex-col items-start justify-start ',
		inputNumber : "rounded border border-black p-3 w-[64px] outline-none remove-arrow mt-2",
	}
	const {state} = useLocation()

	useEffect(() => {
			window.scrollTo(0, 0);
		}, [])
	

	return (
		<Container>
			<p className="text-sm">
				Products <Arrow/> 
				Category <Arrow/> 
				<span className="font-bold">{state.title}</span> </p>
			<div className={styles.grid}>
				<img src={state.img} alt="" className="h" />
				<div className="">
					<Heading>{state.title}</Heading>
					<strong className={styles.strong}>{state.price}</strong>

					<ul className="mb-6">
						<li className=""><strong>SKU: </strong>PET-00500-PCO-28-0240-CLR-001</li>
						<li className=""><strong>Material: </strong>PET</li>
						<li className=""><strong>Neck diameter: </strong>28 mm</li>
						<li className=""><strong>Volume: </strong>0,5 L</li>
						<li className=""><strong>Weight: </strong>28,0 g</li>
						<li className=""><strong>In package / in pallet: </strong>319 pcs / 2520 pcs</li>
					</ul>

					<label htmlFor="" className={styles.inputLabel }>
						Quantity
						<input type="number" className={styles.inputNumber} />
					</label>

					<div className="flex flex-col gap-4 mt-8 w-full">
						<Button>Add To Cart</Button>
						<Button isSecondary={true}>Buy Now</Button>
					</div>
				</div>
			</div>
		</Container>
	)
}

const Arrow = () => {
	const styles = {
		arrow: "inline-block border-r-2 border-t-2 border-black w-2 h-2 rotate-45 mb-[2px] mx-2 ",
	}
	return (
		<span className={styles.arrow}></span>
	)
}
export default ProductsPage