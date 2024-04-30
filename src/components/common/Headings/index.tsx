const styles = {
	heading : "mb-6 text-main-indigo font-bold text-4xl sm:text-5xl ",
	mainHeading: "text-[40px] sm:text-[56px] leading-[48px] font-bold text-main-indigo ",
	blogHeading : "mb-6 text-main-indigo font-bold text-[32px] sm:text-[40px] ",

	subheading : "mb-4 text-main-pink font-bold text-base uppercase ",

}


/**
 * Heading component with **48px** (36px for sm).
 */
const Heading = (props : React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2 className={styles.heading + props.className }>
			{props.children}
		</h2>
	)
}

export const MainHeading = (props : React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1 className={styles.mainHeading + props.className }>
			{props.children}
		</h1>
	)
}


export const Subheading = (props : React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h3 className={styles.subheading + props.className}>
			{props.children}
		</h3>
	)
}

export const BlogHeading = (props : React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2 className={styles.blogHeading + props.className }>
			{props.children}
		</h2>
	)
}


export default Heading