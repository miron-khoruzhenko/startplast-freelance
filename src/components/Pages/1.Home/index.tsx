import { useEffect } from "react"
import Hero from "./1.Hero"
import Products from "./2.Products"
import CustomSection from "./3.Custom"
import AboutUs from "./4.AboutUs"
import Advantages from "./5.Advantages"
import ForCompanies from "./6.ForCompanies"
import News from "./7.News"
import ContactUs from "./8.ContactUs"


const Home = () => {
	useEffect(() => {
			window.scrollTo(0, 0);
		}, [])

	return (
		<div>
			<Hero />
			<Products />
			<CustomSection />
			<AboutUs />
			<Advantages />
			<ForCompanies />
			<News />
			<ContactUs />
		</div>
	)
}

export default Home