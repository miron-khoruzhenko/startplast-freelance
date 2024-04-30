import { FilterBlockProps } from "../../../../types/Filter"

import filter_db from "./filter_db"
import InputBlock from "../../../common/InputBlock"
import Button from "../../../common/Button"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const FilterList = (
	{isOpen, setIsOpen} : 
	{isOpen:boolean , setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
	const styles = {
		// container: 'w-[280px] hidden sm:block '
		container: `w-full h-screen sm:h-auto ${isOpen ? 'block' : 'hidden '} sm:block sm:w-[280px] absolute sm:static z-50 sm:z-0 top-0 left-0 bg-white block px-5 sm:px-0 `
	}

	useEffect(() => {
		if(isOpen) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'scroll'
	}, [isOpen])

	const handleStateToggle = () => {
		setIsOpen(!isOpen)
	} 

	const clearAllBtn = <>Clear all</>

	return (
		<div className={styles.container}>
			{
				<FilterBlock 
					title="Filters" 
					isMainHeading={true}
					filterList={filter_db[0].children} 
					isCheckbox={false} 
					// isCheckbox={true} 
					descr="Showing 191 of 191"
					buttonChild={clearAllBtn}
					handleStateToggle={handleStateToggle}
				/>
			}
			{
				filter_db.map((item) => (
					<FilterBlock title={item.title} filterList={item.children} key={item.index} />
				))
			}
			<div className="flex sm:hidden justify-between pt-2 w-full">
				<button>Clear all</button>
				<Button>Apply</Button>
			</div>

		</div>
	)
}



const FilterBlock = (
	{
		title,
		buttonChild,
		descr,
		isCheckbox=true,
		filterList,
		isMainHeading,

		onClickButton,
		onClickCheckbox,
		onItemClick,
		handleStateToggle
	} : 
	FilterBlockProps
) => {

	const styles = {
		container: 'border-b border-black/20 pb-8',
		header: 'flex justify-between relative',
		
		title: 'font-bold py-5 ',
		mainHeading: 'max-sm:text-4xl max-sm:text-main-indigo',
		button: `${isMainHeading ? 'max-sm:hidden' : ""}`,
		
		descr: 'text-sm mb-6',

		filterList: "flex flex-col gap-4 ",
		listItem: 'cursor-pointer '
	}

	return(
		<div className={styles.container}>
			<div className={styles.header}>

				{
					isMainHeading ? 
					<>
					<h2 className={styles.title + styles.mainHeading}>{title}</h2>
					<FontAwesomeIcon className="cursor-pointer absolute block right-2 top-4 text-3xl sm:hidden" icon={faXmark} onClick={handleStateToggle} />
					</>:
				<h3 className={styles.title}>{title}</h3>
				}


				{buttonChild && 
				<button onClick={onClickButton } className={styles.button}>{buttonChild}</button>}
			</div>

			{descr && <p className={styles.descr}>{descr}</p>}

			{filterList &&
				<ul className={styles.filterList}>
					{
					isCheckbox ? 
					filterList.map((item) => (
						<li key={item.index} className={styles.listItem}>
							<InputBlock 
								

								label={item.name} 
								type="checkbox" 
								placeholder="Placeholder" 
								onClick={onClickCheckbox} 
								checkBoxColor={item.checkboxColor ||  'white'}
							/>
						</li>))
					: 
					filterList.map((item) => (
						<li key={item.index + 'no_checkbox'} className={styles.listItem} onClick={onItemClick}>{item.name}</li>))
					}
				</ul>}
		</div>
	)
}

export default FilterList