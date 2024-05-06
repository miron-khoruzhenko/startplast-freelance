import { Link } from "react-router-dom"
import ProductBlockProps from "../../../../types/ProductBlock"

const ProductBlock = (props : ProductBlockProps) => {
	const {title, descr, href, img} = props

	const styles = {
		card: " border-black/20 sm:border rounded-none sm:rounded-lg p-0 sm:pb-0 sm:p-6 flex flex-col-reverse justify-between  sm:grid grid-rows-[1fr,auto]",
		productTextContainer: "grid grid-rows-1 ",
		productTitle: "text-base sm:text-2xl font-bold text-black sm:text-main-indigo mt-3 mb-0 sm:mt-0 sm:mb-2 " ,
		productDescr: "text-sm sm:text-base  mb-2 sm:mb-6",
		showMore: "text-main-indigo text-sm sm:text-base ",
		arrow: "inline-block border-r-2 border-t-2 border-main-indigo w-2 h-2 rotate-45 mb-[2px]",
		productImg: "object-cover min-w-full border border-black/20 h-48 sm:h-[275px] sm:border-none"
	}
	

	return (
		<div className={styles.card}>
			<div className={styles.productTextContainer}>
				<h4 className={styles.productTitle}>{title}</h4>
				<p className={styles.productDescr}>{descr}</p>
				<Link to={href} className={styles.showMore}>Shop all <div className={styles.arrow} /></Link>
			</div>
			<img src={img} alt="" className={styles.productImg} />
		</div>
	)
}

export default ProductBlock