export interface InputBlockProps extends React.HTMLProps<HTMLDivElement> {
	placeholder: string,
	label?: string,
	type?: string,
	textarea?: boolean,
	isDisabled?: boolean,
	isHidden?: boolean,
	checkBoxColor?: string,
	zeroMargin?: boolean,
	onClick?: () => void,
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
