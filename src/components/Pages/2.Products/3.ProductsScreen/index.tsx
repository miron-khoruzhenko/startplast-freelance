import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

import ProductBlockProps from "../../../../types/ProductBlock"

import product_list_db from "./products_list_db"
import { Link } from "react-router-dom"

// const isThereSame = (arr1 : string[], arr2 : string[]) => {
// 	arr1.forEach((el1) => {
// 		arr2.forEach((el2) => {
// 			if (el1 === el2) {
// 				return true
// 			}
// 		})
// 	})
// 	return false
// }

const checkIfNotIn = (arr1 : string[], arr2 : string[]) => {
	let isNotIn = true

	arr1.forEach((el1) => {
		if (arr2.includes(el1)){
			isNotIn = false
		}else{
			isNotIn = true
			return
		}
	})
	return isNotIn
}

const ProductsScreen = (props : 
	{
		activeFilters : string[], 
		setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>,
		setCheckboxToUncheck: React.Dispatch<React.SetStateAction<string>>
	}) => {
	const styles = {
		container: 'w-full ',
		grid: 'grid grid-cols-2 sm:grid-cols-4 gap-5 gap-y-10 mt-6 '
	}

	return (
		<section className={styles.container}>
			<NavPanel 
				setActiveFilters={props.setActiveFilters}
				setCheckboxToUncheck={props.setCheckboxToUncheck} 
				activeFilters={props.activeFilters} />

			<div className={styles.grid}>
				{
					product_list_db.map((product) => {
						// if tagArr cotains "all" ...
						if (
							!checkIfNotIn(props.activeFilters, product.tags) 
							|| props.activeFilters.length === 0 
							|| props.activeFilters.includes('all')
						)
						return <ProductBlock key={product.index} {...product} />
					})
				}
			</div>
			
		</section>
	)
}

const ProductBlock = (props : ProductBlockProps) => {
	const {title, descr, price, href, img} = props

	const styles = {
		card: " border-black/20  rounded-none  p-0 justify-between  sm:grid grid-rows-[1fr,auto]",
		productTextContainer: "grid grid-rows-1 mt-3 ",
		productTitle: "text-base font-bold text-black mt-3 mb-0 " ,
		productDescr: "text-sm  mb-2",
		showMore: "text-main-indigo text-sm  ",
		arrow: "inline-block border-r-2 border-t-2 border-main-indigo w-2 h-2 rotate-45 mb-[2px]",
		productImg: "object-cover min-w-full border border-black/20 h-48 sm:h-[275px] "
	}

	return (
		// <Link to={href} className={styles.card}>
		<Link to={{pathname:href}} state={props} className={styles.card}>
			<img src={img} alt="" className={styles.productImg} />
			<div className={styles.productTextContainer}>
				<h4 className={styles.productTitle}>{title}</h4>
				<p className={styles.productDescr}>{descr}</p>
				<strong>{price}</strong>
			</div>
		</Link>
	)
}

const NavPanel = (props : {
	activeFilters : string[],
	setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>,
	setCheckboxToUncheck: React.Dispatch<React.SetStateAction<string>>
}) => {
	const [isOpen, setIsOpen] = useState(false) 

	const styles = {
		container: ' flex gap-6 relative overflow-visible ',
		activeFilters: 'flex gap-4 w-full',
		
		filterBlock: 'px-4 py-2 bg-main-gray flex gap-2 cursor-pointer  ',
		
		btn: 'whitespace-nowrap cursor-pointer  ',
		arrow: "inline-block border-r-2 border-b-2 border-black w-2 h-2 rotate-45 mb-[2px] mx-2 ",

		dropdown: `absolute right-0 top-full bg-white shadow-lg min-w-[100px]  py-6 border ${isOpen ? 'block' : 'hidden'} `,
		dropdownItem: 'cursor-pointer hover:bg-main-gray py-2 px-4',
	}

	const handleClick = (filter : string)=>{
		props.setCheckboxToUncheck(filter)

		setTimeout(() => {
			props.setCheckboxToUncheck('')
		}, 100)

		const newActiveFilters = props.activeFilters.filter((item) => {
				console.log(`Item ${item} !== filter ${filter}`)
				return item !== filter
			})
		console.log('signal: ', newActiveFilters)
		props.setActiveFilters(newActiveFilters)
		console.log('Cross main clicked')
	}

	return (
		<div className={styles.container}>
			<div className={styles.activeFilters}>
				
				{
				props.activeFilters.map((filter, index) => {
					return <div key={index} className={styles.filterBlock}>
					<p key={filter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
							<FontAwesomeIcon 
								icon={faXmark} className="mt-1" 
								onClick={() => handleClick(filter)}
							/>
				</div>
						})
					}
				
			</div>


			<button className={styles.btn} onClick={()=>setIsOpen(!isOpen)}>
				Sort by
				<div className={styles.arrow}></div>

			</button>
			<ul className={styles.dropdown}>
				<li className={styles.dropdownItem}>Option</li>
				<li className={styles.dropdownItem}>Option</li>
				<li className={styles.dropdownItem}>Option</li>
				<li className={styles.dropdownItem}>Option</li>
			</ul>
		</div>
	)
}

export default ProductsScreen