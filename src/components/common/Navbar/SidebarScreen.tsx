import { useEffect, useState } from "react"

import icon1 from '/src/assets/common/navbar-icons/search.svg'
import icon2 from '/src/assets/common/navbar-icons/lang.svg'
import navbar_links from "./navbar_links";

import Hamburger from "./Hamburger";

import { Link } from "react-router-dom";

const SidebarScreen = () => {

	const closeMode = "opacity-0 translate-x-full",
				openMode = "opacity-100 translate-x-0 ";

	const styles = {
		container : ` flex sm:hidden w-screen h-[calc(100svh-100%)] absolute top-full left-0 transition-[opacity,transform] duration-700 z-10 py-7 px-5`,
		containerBg : ' bg-white ',
		// div : "absolute bottom-5 right-5 scale-125",
		hamburger : "block sm:hidden z-20 -mb-2 relative select-none  ",
		hamburgerPsu : "after:block after:absolute after:w-14 after:h-14 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 ",

		navList: "flex flex-col gap-6 w-full", 
		navListItem: "list-none text-lg ",

		arrow: "inline-block border-r-2 border-b-2 border-black w-2 h-2 rotate-45 mb-[2px] mx-2",
	}

	// const linkStyles = {
	// 	links : "relative transition-colors dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50   ",
	// 	linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 `,
	// 	activeLink : 'dark:text-zinc-50 '
	// }

	const [modeStyles, setModeStyles] = useState('')
	const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const handleClick : React.MouseEventHandler<HTMLDivElement> = e => {
		const target = e.target as HTMLElement

		if ('A' === target.tagName){
			setIsBurgerPressed(false)
			setModeStyles(closeMode)
		}
	}

	const handleBurgerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault()

		setIsBurgerPressed(!isBurgerPressed)
	}


	useEffect(()=>{
		// console.log(modeStyles)
		if(isBurgerPressed){
			setModeStyles(openMode)
			document.body.style.overflow = 'hidden'
		}else{
			setModeStyles(closeMode)
			document.body.style.overflow = 'scroll'
		}

	}, [isBurgerPressed])


	return (
		<>
		{/* <div className={styles.hamburger + styles.hamburgerPsu} onClick={handleBurgerClick}> */}
		<div className={styles.hamburger } onClick={handleBurgerClick}>
			<Hamburger isButtonPressed={isBurgerPressed}/>
		</div>

		<aside 
			className={styles.container + styles.containerBg + modeStyles}
			onClick={handleClick}
			>

			<ul className={styles.navList}>
			{navbar_links.map((link, index) => (
				<li key={link.index} 
					className={styles.navListItem + (index === 0 ? " font-bold " : '') + (location.pathname === link.link ? " font-bold " : "")}>
					<Link to={link.link}>{link.title}</Link>
				</li>
			))}
			
			<li className={styles.navListItem + 'flex justify-between cursor-pointer'}>English 
				<div className="">
					<img src={icon2} alt="" className={'h-6 w-6 rounded-full inline-block'} />
					<div className={styles.arrow}></div>
				</div>
			</li>
			<li className={styles.navListItem}>
				<label className="border border-black rounded flex p-3">
					<input type="text" className="w-full outline-none" placeholder="Search" />
					<img src={icon1} alt="" className="" />
				</label>
			</li>
			</ul>
		</aside>
		</>
	)
}

export default SidebarScreen