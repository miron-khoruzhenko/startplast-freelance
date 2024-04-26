
const InputBlock = ({label, type, placeholder, textarea} : {label:string, type?:string, placeholder:string, textarea?:boolean}) => {
	const styles = {
		container: 'mb-6 ',
		label: 'block mb-2',
		checkbox: "border ml-px h-5 w-5 border-black appearance-none checked:bg-black checked:border-transparent",
		input: 'w-full p-3 border border-black rounded placeholder:text-[#505050] ',
		textarea: 'h-[180px] ',
	}

	if (type === 'checkbox') {
		return (
			<div className={styles.container + "flex items-center"}>
				<input type="checkbox" id={label} className={styles.checkbox} />
				<label htmlFor={label} className="text-sm ml-3">I accept <a href="" className="underline">the Terms</a></label>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			{
				textarea ? 
				<textarea placeholder={placeholder} className={styles.input + styles.textarea}></textarea>
				:
				<input type={type || 'text'} placeholder={placeholder} className={styles.input} />
			}
		</div>
	)
}

export default InputBlock