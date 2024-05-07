import { useEffect, useState } from "react"
import { InputBlockProps } from "../../../types/InputBlockProps"

const InputBlock = (
	{label, type, placeholder, textarea, checkBoxColor, zeroMargin, className, dataTag, checkboxToUncheck, onClick, onInputChange } : InputBlockProps) => 
		{
	const styles = {
		container: `${zeroMargin ? ' ' : 'mb-6 '} `,
		label: 'block mb-2',
		checkbox: "border ml-px h-5 w-5 border-black appearance-none checked:!bg-black checked:border-transparent",
		input: 'w-full p-3 border border-black rounded placeholder:text-[#505050] ' + (className || ''),
		textarea: 'h-[180px] ',
	}

	useEffect(() => {
		if (checkboxToUncheck?.toLowerCase() === label?.toLowerCase()) {
			const checkbox = document.querySelector(`input[data-tag="${dataTag}"]`) as HTMLInputElement
			checkbox.checked = false
			setIsCheckboxActive(false)

		}
	}, [checkboxToUncheck, label, dataTag])

	const [isCheckboxActive, setIsCheckboxActive] = useState(false)

	const handleCheckboxClick = (e:React.ChangeEvent<HTMLInputElement>) => {
		// Если checbox активен 
		if(e.target.checked){
			setIsCheckboxActive(true)
		} else {
			setIsCheckboxActive(false)
		}
	}

	if (type === 'checkbox') {
		return (
			<div 
			onClick={onClick}
			className={styles.container + "flex items-center"}>
				<input 
					data-tag={dataTag}
					data-checked={isCheckboxActive}
					type="checkbox" 
					id={label} 
					className={styles.checkbox} 
					style={{backgroundColor: checkBoxColor || 'white'}}
					onChange={(e)=>{
						onInputChange && onInputChange(e)
						handleCheckboxClick(e)
					}}
				/>
				<label 
					htmlFor={label} 
					className="text-sm pl-3"
				>
						{label || <>I accept <a href="" className="underline">the Terms</a></>}</label>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			{
				textarea ? 
				<textarea onClick={(onClick && undefined)} placeholder={placeholder} className={styles.input + styles.textarea}></textarea>
				:
				<input 
					type={type || 'text'} 
					placeholder={placeholder} 
					className={styles.input} 
					onChange={onInputChange}
				/>
			}
		</div>
	)
}

export default InputBlock