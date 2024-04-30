import { ContainerProps } from "."

const BlogContainer = ({children, className} : ContainerProps) => {
	const styles = {
		container: 'max-w-[768px] container mx-auto py-16 sm:py-28 px-5 ' + className,
	}

	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default BlogContainer