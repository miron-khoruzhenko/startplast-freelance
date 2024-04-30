export interface InputBlockProps extends React.HTMLProps<HTMLDivElement> {
	placeholder: string,
	label?: string,
	type?: string,
	textarea?: boolean,
	checkBoxColor?: string,
	zeroMargin?: boolean,
	onClick?: () => void,
}
