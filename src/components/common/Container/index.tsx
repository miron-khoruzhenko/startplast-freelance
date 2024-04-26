
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode,
	className?: string,
}

const Container = ({children, className} : ContainerProps) => {
	const styles = {
		container: 'container mx-auto py-16 sm:py-28 px-5 ' + className,
	}

	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default Container