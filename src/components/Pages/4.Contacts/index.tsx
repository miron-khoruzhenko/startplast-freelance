import { useEffect } from "react"
import Products from "../1.Home/2.Products"
import ForCompanies from "../1.Home/6.ForCompanies"
import Hero from "./1.ContactsHero"

const Contacts = () => {
	useEffect(() => {
			window.scrollTo(0, 0);
		}, [])

	return (
		<>
			<Hero />
			<Products />
			<ForCompanies />	
		</>
	)
}

export default Contacts