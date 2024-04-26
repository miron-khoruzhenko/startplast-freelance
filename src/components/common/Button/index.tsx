import { Link } from "react-router-dom"
import ButtonProps from "../../../types/Button"

const styles = {
	button : "rounded px-6 py-3 block border text-sm sm:text-base whitespace-nowrap ",
	primaryButton : "bg-main-indigo border-main-indigo text-white ",
	secondaryButton : "border-main-indigo text-main-indigo ",
}

const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
	e.preventDefault()
}


const Button = (props : ButtonProps) => {

	const styleClasses = styles.button + (props.className ? props.className + " " : '') + (props.isSecondary ? styles.secondaryButton : styles.primaryButton)

	const href = props.href ? props.href : ""
	
	return (
		props.isLink ? 
		<Link to={href} className={styleClasses}>
			{props.children}
		</Link>
		: href === "" ?
		<button className={styleClasses} onClick={(props.onClick || handleClick)}>
			{props.children}
		</button>
		:
		<a href={href} className={styleClasses} >
			{props.children}
		</a>

	)
}

export const EmptyButton = (props : ButtonProps) => {
	const href = props.href ? props.href : ""

	const styleClasses = styles.button + props.className
	return (
		props.isLink ? 
		<Link to={href} className={styleClasses}>
			{props.children}
		</Link>
		: href === "" ?
		<button className={styleClasses} onClick={(props.onClick || handleClick)}>
			{props.children}
		</button>
		:
		<a href={href} className={styleClasses} >
			{props.children}
		</a>
	)
}

export default Button