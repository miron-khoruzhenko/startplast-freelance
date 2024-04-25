import footer_links from "./footer_links"
import logo from '/src/assets/common/logo.png'

const Footer = () => {
	const styles = {
		footer : 'bg-main-gray px-5 py-20',
		logo : "h-[50px] ",
		container : 'container mx-auto ',
		grid : 'grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-5 pb-20 border-b border-black',
		bottom : 'py-8 flex flex-col sm:flex-row justify-center items-start md:items-center gap-6',
		staticList : "flex flex-col items-start justify-start gap-7",
		listContainer : "flex flex-col gap-6 ",
		dynamicList : "flex flex-col gap-4 ",
		listTitle : "text-base font-semibold text-black",
		listLink : "text-black text-sm ",
	}

	// Caps Handles Billets


	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<ul className={styles.staticList}>
						<li className="">
							<img src={logo} alt="" className={styles.logo} />
						</li>
						<li className="">
							<h3 className={styles.listTitle}>Email</h3>
							<a href={"mailto:info@starplast.ee"} className={styles.listLink + "underline"}>info@starplast.ee</a>
						</li>

						<li className="">
							<h3 className={styles.listTitle}>Phone</h3>
							<a href={'tel:+3726091403'} className={styles.listLink}>+372 609 1403</a>
						</li>
					</ul>
					{
						footer_links.map((link) => (
							<div key={link.index} className={styles.listContainer}>
								<h3 className={styles.listTitle}>{link.title}</h3>
								<ul className={styles.dynamicList}>
									{
										link.sublinks.map((sublink) => (
											<li key={sublink.title} className="">
												<a href={sublink.href} className={styles.listLink}>{sublink.title}</a>
											</li>
										))
									}
								</ul>
							</div>
						))
					
					}

				</div>

				<div className={styles.bottom}>
					<p className="text-black text-sm">© 2024 Starplast. All rights reserved.</p>
					<a href="#" className="underline text-sm">Privacy Policy</a>
					<a href="#" className="underline text-sm">Terms of Service</a>
					<a href="#" className="underline text-sm">Cookies Settings</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer