import { useEffect, useState } from "react"

// import navbar_links from "./navbar_links";
import Hamburger from "./Hamburger";

// import { Link } from "react-router-dom";

const SidebarScreen = () => {

	const closeMode = "opacity-0 translate-x-full",
				openMode = "opacity-100 translate-x-0 ";

	const styles = {
		container : ` flex flex-col sm:hidden w-screen h-[100svh] absolute top-0 left-0 justify-center items-center transition-all duration-700 z-10 `,
		containerBg : ' bg-white/50 dark:bg-black backdrop-blur-md dark:bg-opacity-80 bg-opacity-80 ',
		// div : "absolute bottom-5 right-5 scale-125",
		hamburger : "block sm:hidden z-20 -mb-2 relative select-none  ",
		hamburgerPsu : "after:block after:absolute after:w-14 after:h-14 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 ",
		navItem: "",

	}

	// const linkStyles = {
	// 	links : "relative transition-colors dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50   ",
	// 	linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 `,
	// 	activeLink : 'dark:text-zinc-50 '
	// }

	const [modeStyles, setModeStyles] = useState('')
	const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	// const handleClick : React.MouseEventHandler<HTMLDivElement> = e => {
	// 	const target = e.target as HTMLElement

	// 	if ('A' === target.tagName){
	// 		setIsBurgerPressed(false)
	// 		setModeStyles(closeMode)
	// 	}
	// }

	const handleBurgerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault()

		setIsBurgerPressed(!isBurgerPressed)
	}


	useEffect(()=>{
		console.log(modeStyles)
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
		<div className={styles.hamburger + styles.hamburgerPsu} onClick={handleBurgerClick}>
			<Hamburger isButtonPressed={isBurgerPressed}/>
		</div>

		{/* <aside 
			className={styles.container + styles.containerBg + modeStyles}
			onClick={handleClick}
			>

			{navbar_links.map((link) => (
				<li key={link.index} className={styles.navItem + (location.pathname === link.link ? "font-bold " : "")}>
					<Link to={link.link}>{link.title}</Link>
				</li>
			))}
		</aside> */}
		</>
	)
}

export default SidebarScreen