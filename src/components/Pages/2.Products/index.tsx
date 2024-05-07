import { useState } from "react"
import Hero from "./1.Hero"
import FilterList from "./2.FilterList"
import ProductsScreen from "./3.ProductsScreen"

import icon0 from '/src/assets/products/filter.svg'

const Products = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [filter, setFilter] = useState<string[]>([])
	const [checkboxToUncheck, setCheckboxToUncheck] = useState<string>('')

	
	const styles = {
		container: 'container mx-auto px-5 py-10 flex flex-col sm:flex-row gap-16 overflow-y-visible '
	}
	return (
		<div className="">
			<Hero />

			<div className={styles.container}>
				<FilterButton isOpen={isOpen} setIsOpen={setIsOpen} />
				<FilterList checkboxToUncheck={checkboxToUncheck} setIsOpen={setIsOpen} isOpen={isOpen} activeFilters={filter} setActiveFilters={setFilter} />
				<ProductsScreen setActiveFilters={setFilter} setCheckboxToUncheck={setCheckboxToUncheck} activeFilters={filter} />
			</div>
		</div>
	)
}

const FilterButton = ({isOpen, setIsOpen} : {isOpen:boolean , setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
	const styles = {
		container: 'sm:hidden flex justify-center items-center gap-4 cursor-pointer border border-black py-4  ',
		img: 'w-6 h-6',
	}
	return (
		<div className={styles.container} onClick={()=>setIsOpen(!isOpen)}>
			<img src={icon0} alt="" className={styles.img} />
			<p>Filter</p>
		</div>
	)
}



export default Products
