const styles = {
	heading : "mb-6 text-main-indigo font-bold text-4xl sm:text-5xl ",
	blogHeading : "mb-6 text-main-indigo font-bold text-[32px] sm:text-[40px] ",

	subheading : "mb-4 text-main-pink font-bold text-base uppercase ",

}

const Heading = (props : React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2 className={styles.heading + props.className }>
			{props.children}
		</h2>
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