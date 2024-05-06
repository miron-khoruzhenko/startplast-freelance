import { Link } from "react-router-dom"
import Container from "../../../common/Container"
import Heading from "../../../common/Headings"

import news_data from "./news_data"

const News = (
	{transBG=false, title} 
	: {transBG? : boolean, title?:string}
) => {

	const styles = {
		container: 'text-center ',
		heading : "mb-6 ",
		descr: "mb-20 text-base sm:text-lg",

		grid: "grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-16",

		btn: "py-3 px-6 border border-black rounded font-bold hover:bg-main-gray transition-colors"
	}

	return (
		<div className={transBG ? "bg-white " : "bg-main-gray"}>
			<Container className={styles.container}>
				<Heading className="mb-6">{title || "Latest News & Insights"}</Heading>
				<p className={styles.descr}>Stay up-to-date with the latest developments and insights in plastic bottles and PET containers. <br className="hidden sm:block" /> Explore our curated selection of news articles covering innovations, sustainability, and industry trends.</p>

				<div className={styles.grid}>
					{news_data.map((news) => (
						<NewsBlock key={news.index} title={news.title} text={news.text} img={news.img} />))}
				</div>

				<Link className={styles.btn} to="/news">View all</Link>

				
			</Container>
		</div>
	)
}

const NewsBlock = ({title, text, img} : {title:string, text:string, img:string}) => {
	const styles = {
		card: 'bg-white border border-black/20 rounded ',
		
		imgContainer: 'h-[300px] overflow-hidden ',
		img: 'min-w-full min-h-full object-cover ',
		textContainer: 'p-8 text-left',

		tagContainer: "flex items-center gap-4 text-sm mb-4",
		categoryBlock: 'bg-main-gray px-2 py-1 font-bold block',
		minRead: "font-bold ",
		
		title: 'text-xl sm:text-2xl font-bold mb-4',
		text: 'text-base mb-6',

		arrow: "inline-block border-r-2 border-t-2 border-black w-2 h-2 rotate-45 mb-[2px] ml-2",
	}

	return (
		<div className={styles.card}>
			<div className={styles.imgContainer}>
				<img src={img} alt="" className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.tagContainer}>
					<span className={styles.categoryBlock}>Category</span>
					<span className={styles.minRead}>5 min read</span>
				</div>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>

				<Link to="/news/news-page" className="">Read More <div className={styles.arrow}></div></Link>
			</div>
		</div>
	)
}
export default News