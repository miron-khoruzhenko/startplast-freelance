import { useState } from "react"

import categories_db from "./categories_db"
import news_blocks_db from "./news_blocks_db"

import Container from "../../common/Container"
import { Link } from "react-router-dom"

const NewsGrid = () => {
	const [activeCategory, setActiveCategory] = useState(0)

	const styles = {
		grid: 'grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-10 sm:gap-y-16',
	}
	return (
		<Container className="">
			<Navigation className="mb-16 " activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<div className={styles.grid}>
				{news_blocks_db.map(block => (
					<NewsBlock key={block.index} {...block} />
				))}
			</div>
		</Container>
	)
}

const NewsBlock = (
	{title, category, descr, href, img}:
	{title:string, category:string, descr:string, href:string, img:string}
) => {
	return (
			<Link to={href} className="">
				<div className="h-[300px] mb-6 rounded-md overflow-hidden">
					<img src={img} alt={title} className="min-w-full min-h-full object-cover" />
				</div>
				<div className="space-y-2">
					<strong className="">{category}</strong>
					<h3 className="text-2xl font-bold">{title}</h3>
					<p className="text-base">{descr}</p>
				</div>
			</Link>
	)
}

const Navigation = (
	{activeCategory, setActiveCategory, className} : 
	{activeCategory:number, setActiveCategory:React.Dispatch<React.SetStateAction<number>>, className?:string}
) => {
	const styles = {
		navList : "flex justify-start sm:justify-center overflow-y-scroll no-scrollbar -mr-5 ",
		navItem : "px-4 py-2 border rounded  cursor-pointer whitespace-nowrap "
	}

	const hanldeClick = (index:number) => {
		setActiveCategory(index)
	}

	return (
		<ul className={styles.navList + className}>
			{categories_db.map(category => (
				<li 
					key={category.index} 
					className={styles.navItem + (activeCategory === category.index ? " border-black " : "border-white ")}
					onClick={() => hanldeClick(category.index)}
				>{category.title}</li>
			))}
		</ul>
	)
}

export default NewsGrid