import { Link } from 'react-router-dom'
import logo from '/src/assets/common/logo.png'

import icon1 from '/src/assets/common/navbar-icons/search.svg'
import icon2 from '/src/assets/common/navbar-icons/user.svg'
import icon3 from '/src/assets/common/navbar-icons/shopping-cart.svg'
import icon4 from '/src/assets/common/navbar-icons/lang.svg'

import SidebarScreen from './SidebarScreen'

import links from './navbar_links'

const styles = {
	navbar: "border-b block fixed top-0 left-0 bg-white border-black/20 w-full max-w-screen py-3 px-5 sm:px-0 z-50 overflow-visible ",
	container: "container mx-auto flex justify-between items-center ",
	logo : "h-[50px] ",
	navItems: "gap-8 hidden sm:flex ",
	navItem: "",
	navIcons: "flex gap-5 ",
	navIcon: "h-6 ",
	navIconImg: "",
}



const Navbar = () => {


	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Link to="/">
					<img src={logo} alt="" className={styles.logo}/>
				</Link>
				<ul className={styles.navItems}>
					{links.map((link) => (
							<li key={link.index} className={styles.navItem + (location.pathname === link.link ? "font-bold " : "")}>
								<Link to={link.link}>{link.title}</Link>
							</li>
					))}

					<li className={styles.navItem}>
						<ul className={styles.navIcons}>
							<li className={styles.navIcon}>
								<img src={icon1} alt="" className={styles.navIconImg} /></li>
							<li className={styles.navIcon}>
								<img src={icon2} alt="" className={styles.navIconImg} /></li>
							<li className={styles.navIcon}>
								<img src={icon3} alt="" className={styles.navIconImg} /></li>
							<li className={styles.navIcon}>
								<img src={icon4} alt="" className={styles.navIconImg + 'rounded-full'} /></li>
						</ul>
					</li>
				</ul>

				<SidebarScreen />
			</div>
		</nav>
	)
}

export default Navbar