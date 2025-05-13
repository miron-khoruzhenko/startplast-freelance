import { useEffect } from "react"
import Container from "../../common/Container"
import { MainHeading } from "../../common/Headings"
import Products from "../1.Home/2.Products"
import NewsGrid from "./NewsGrid"

const News = () => {
	useEffect(() => {
			window.scrollTo(0, 0);
		}, [])

	return (
		<div>
			<Hero />
			<NewsGrid />
			<Products />
		</div>
	)
}

const Hero = () => {
	return (
		<Container className="flex flex-col items-center justify-center text-center max-w-[768px]">
			<MainHeading className=" mb-6 ">Latest News & Insights</MainHeading>
			<p className="text-lg">Stay up-to-date with the latest developments and insights in plastic bottles and PET containers. Explore our curated selection of news articles covering innovations, sustainability, and industry trends.</p>
		</Container>
	)
}

export default News