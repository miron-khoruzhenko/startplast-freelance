interface ButtonProps {
	children: React.ReactNode,
	className?: string,
	href?: string,
	isLink?: boolean,
	isSecondary?: boolean,
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default ButtonProps