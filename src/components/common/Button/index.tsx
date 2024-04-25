import { Link } from "react-router-dom"
import ButtonProps from "../../../types/Button"

const styles = {
	button : "rounded px-6 py-3 block border text-base ",
	primaryButton : "bg-main-indigo border-main-indigo text-white ",
	secondaryButton : "border-main-indigo text-main-indigo ",
}

const Button = (props : ButtonProps) => {
	const styleClasses = styles.button + (props.isSecondary ? styles.secondaryButton : styles.primaryButton)
	const href = props.href ? props.href : ""
	return (
		props.isLink ? 
		<Link to={href} className={styleClasses}>
			{props.children}
		</Link>
		:
		<a href={href} className={styleClasses}>
			{props.children}
		</a>

	)
}

export default Button