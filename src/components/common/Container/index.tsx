
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode,
	className?: string,
	zeroPadding?: boolean,
}

/**
 * Container with **112px** (64px for sm) y-axis padding and **20px** x-axis padding.
 */
const Container = ({children, className, zeroPadding} : ContainerProps) => {
	const styles = {
		container: `container mx-auto ${zeroPadding? '' : 'py-16 sm:py-28 ' } px-5 ` + className,
	}

	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default Container