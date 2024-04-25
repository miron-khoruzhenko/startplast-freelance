import React from 'react'

const CustomSection = () => {
	const styles = {
		custom: "bg-custom-bg bg-center bg-no-repeat bg-cover w-screen ",
		container : "container mx-auto py-16 sm:py-28 px-3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20 ",
		subheading: "text-white font-bold text-base uppercase mb-3 sm:mb-4 ",
		heading: "text-white font-bold text-4xl sm:text-5xl ",

		textContainer: "flex flex-col gap-9 text-white",
		descr: "",
		listContainer: "space-y-4 ",
		listItem: "list-disc list-inside pl-2",

		buttonContainer: "flex ",
		button : "rounded px-6 py-3 block  text-base ",
		primaryButton : "bg-main-pink border border-main-pink text-white ",
		secondaryButton : " text-white ",

		arrow: "inline-block border-r-2 border-t-2 border-white w-2 h-2 rotate-45 mb-[2px]",
	
	}
	return (
		<section className={styles.custom}>
			<div className={styles.container}>
				
				<div className="">
					<h3 className={styles.subheading}>Make your own</h3>
					<h2 className={styles.heading}>Custom container</h2>
				</div>

				<div className={styles.textContainer}>
					<p className={styles.descr}>
						We can custom make the bottle shape you need. <br className='hidden sm:block' /> 
						Here's what it takes:
					</p>

					<ul className={styles.listContainer}>
						<li className={styles.listItem}>Description</li>
						<li className={styles.listItem}>Blueprint</li>
						<li className={styles.listItem}>3D model</li>
					</ul>

					<div className={styles.buttonContainer}>
						<a href="" className={styles.button + styles.primaryButton}>Start project</a>
						<a href="" className={styles.button + styles.secondaryButton}>Contact us <div className={styles.arrow}></div></a>
					</div>

				</div>
			</div>
		</section>
	)
}

export default CustomSection