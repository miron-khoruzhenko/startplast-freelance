import img from '/src/assets/news/subpage_img0.jpg'

import Hero from './1.NewsHero'
import Heading from '../../../common/Headings'
import BlogContainer from '../../../common/Container/BlogContainer'
import { FormatedParagraphs, ImgBlockWithCaption } from '../../../common/BlogComponents'

import socials_db from './socials_db'
import News from '../../1.Home/7.News'

const NewsPage = () => {
	return (
		<>
			<Hero />
			<ContentSection />
			<News title='Related posts' transBG={true} />

		</>
	)
}

const ContentSection = () => {
	const styles = {
		container: '',
		strong: 'text-lg sm:text-xl mt-5 mb-4 block ',
	}

	return (
		<BlogContainer className={styles.container}>
			<Heading>Introduction</Heading>
				<FormatedParagraphs paragraphs={paragraphs.slice(0,2)} />
				<ImgBlockWithCaption img={img} displayAlt={true} alt='Image caption goes here' />
				<strong className={styles.strong}>{paragraphs[2]}</strong>
				<FormatedParagraphs paragraphs={paragraphs[3]} />
				<CaptionBlock text={paragraphs[4]} />
				<FormatedParagraphs paragraphs={paragraphs[5]} />
			
			<Heading className='mt-10'>Conclusion</Heading>
				<FormatedParagraphs paragraphs={paragraphs.slice(6,9)} />
				<ShareBlock />
		</BlogContainer>
	)
}

const ShareBlock = () => {
	const styles = {
		container: 'flex flex-col justify-center items-center gap-4 mt-16 pb-12 border-b border-black/20',
		title: "text-lg font-bold ",
		socials: "flex  justify-center items-center gap-2",
		socialBlock: 'w-8 h-8 flex justify-center items-center rounded-full bg-main-gray ',
		img: '',
	}

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Share this post</h3>

			<div className={styles.socials}>
				{socials_db.map((social, i) => (
					<a href={social.href} key={i} className={styles.socialBlock}>
						<img src={social.icon} alt='social icon' className={styles.img} />
					</a>
				))}
			</div>
		</div>
	)
}

const CaptionBlock = ({text}:{text:string}) => {
	const styles = {
		container: 'border-l-2 border-black text-xl px-5 my-9 italic',
	}

	return (
		<p className={styles.container}>
			{text}
		</p>
	)
}

const paragraphs = [
	"Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
	"Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",

	"Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",

	"Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",

	'"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."',

	"Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",

	"Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
	"Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
	"Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",


]


export default NewsPage