export interface FilterBlockProps {
	title: string,
	buttonChild?: React.ReactElement,
	descr?: string,
	isCheckbox?:boolean,
	checkboxToUncheck?: string,
	filterList?: {
		index: number,
		name: string,
		checkboxColor?: string,
	}[],
	isMainHeading?: boolean,

	activeFilters : string[],
	setActiveFilters : React.Dispatch<React.SetStateAction<string[]>>,

	onClickButton?: () => void,
	onClickCheckbox?: () => void,
	onItemClick?: () => void,
	handleStateToggle?: () => void
}