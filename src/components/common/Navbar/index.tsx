import { Link, useLocation } from 'react-router-dom'
import logo from '/src/assets/common/logo.png'

import icon1 from '/src/assets/common/navbar-icons/search.svg'
import icon2 from '/src/assets/common/navbar-icons/user.svg'
import icon3 from '/src/assets/common/navbar-icons/shopping-cart.svg'
import icon4 from '/src/assets/common/navbar-icons/lang.svg'
import russian_icon from '/src/assets/common/navbar-icons/russian_flag.png'


import SidebarScreen from './SidebarScreen'

import links from './navbar_links'
import { useState } from 'react'
import  { LoginPopup } from '../popups/Popups'
import RegistrationPopup from '../popups/Popups'

const styles = {
	navbar: "border-b block fixed top-0 left-0 bg-white border-black/20 w-full max-w-screen py-3 px-5 sm:px-0 z-50 overflow-visible ",
	container: "container mx-auto flex justify-between items-center relative overflow-visible ",
	logo : "h-[50px] ",
	navItems: "gap-8 hidden sm:flex ",
	navItem: "",
	navIcons: "flex gap-5 cursor-pointer overflow-hidden ",
	navIcon: "h-6 ",
	navIconImg: "",
	
}


const langList = [
	{
		name: 'English',
		icon: icon4
	},
	{
		name: 'Russian',
		icon: russian_icon
	}
]




const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false) 
	const [currentLang, setCurrentLang] = useState({
		name: 'English',
		icon: icon4,
	})
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	const handleLangClick  = (lang : {name: string,icon: string}) => {		
		setCurrentLang(lang)
		setIsOpen(false)
	}


	const dropdownStyles={
		dropdown: `absolute right-0 top-full  bg-white shadow-lg min-w-[200px]  py-6 border ${isOpen ? 'block' : 'hidden'} `,
		dropdownItem: 'cursor-pointer hover:bg-main-gray py-2 px-4',
	}
	const location = useLocation()

	const show_login = true

	return (
		<nav className={styles.navbar}>
			{ show_login ? 
				<LoginPopup isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> :
				<RegistrationPopup isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> 
			}
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
							<li className={styles.navIcon} onClick={()=>setIsModalOpen(true)}>
								<img src={icon2} alt="" className={styles.navIconImg} />
								</li>
							<li className={styles.navIcon}>
								<img src={icon3} alt="" className={styles.navIconImg} /></li>
							<li className={styles.navIcon} onClick={()=>setIsOpen(!isOpen)}>
								<img src={currentLang.icon} alt="" className={styles.navIconImg + 'max-h-6 max-w-6 rounded-full'} />
								<ul className={dropdownStyles.dropdown}>
								{
									langList.map((lang, index) => {
										if (lang.name === currentLang.name)
											return null
										return (
										<li key={index} className={dropdownStyles.dropdownItem} onClick={()=>handleLangClick(lang)}> 
											<img src={lang.icon} alt="" className={' max-h-6 max-w-6 object-cover mr-2 rounded-full inline-block '} />
											{lang.name}	
										</li>
									)})
								}

							</ul>
								</li>
						</ul>
					</li>
				</ul>

				<SidebarScreen />
			</div>
		</nav>
	)
}

export default Navbar