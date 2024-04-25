import React from 'react'

const CustomSection = () => {
	const styles = {
		custom: "bg-custom-bg bg-center bg-no-repeat bg-cover w-screen h-[400px] ",
		container : "container mx-auto py-28 px-3 flex gap-20 justify-between items-center",
		subheading: "text-white font-bold text-base uppercase mb-4 ",
		heading: "text-white font-bold text-4xl sm:text-5xl mb-6",

		button : "rounded px-6 py-3 block border text-base ",
		primaryButton : "bg-main-pink border-main-pink text-white ",
		secondaryButton : " text-white ",
	
	}
	return (
		<section className={styles.custom}>
			<div className={styles.container}>
				
				<div className="">
					<h3 className={styles.subheading}>Make your own</h3>
					<h2 className={styles.heading}>Custom container</h2>
				</div>

				<div className="">
					<p className=""></p>
					<ul className="">
						<li className=""></li>
						<li className=""></li>
						<li className=""></li>
					</ul>
					<div className="">
						<a href="" className={styles.button + styles.primaryButton}></a>
						<a href="" className={styles.button + styles.secondaryButton}></a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomSection