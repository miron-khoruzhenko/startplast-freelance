export interface InputBlockProps extends React.HTMLProps<HTMLDivElement> {
	placeholder: string,
	label?: string,
	type?: string,
	textarea?: boolean,
	dataTag?: string,
	isDisabled?: boolean,
	isHidden?: boolean,
	checkBoxColor?: string,
	zeroMargin?: boolean,
	checkboxToUncheck?: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	setIsCheckboxActive?: React.Dispatch<React.SetStateAction<boolean>>
}
