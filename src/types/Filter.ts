export interface FilterBlockProps {
	title: string,
	buttonChild?: React.ReactElement,
	descr?: string,
	isCheckbox?:boolean,
	filterList?: {
		index: number,
		name: string,
		checkboxColor?: string,
	}[],
	isMainHeading?: boolean,

	onClickButton?: () => void,
	onClickCheckbox?: () => void,
	onItemClick?: () => void,
	handleStateToggle?: () => void
}