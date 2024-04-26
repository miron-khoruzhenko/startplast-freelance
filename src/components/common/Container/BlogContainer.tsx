import { ContainerProps } from "."

const BlogContainer = ({children, className} : ContainerProps) => {
	const styles = {
		container: 'max-w-[768px] container mx-auto px-4 py-8 ' + className,
	}

	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default BlogContainer