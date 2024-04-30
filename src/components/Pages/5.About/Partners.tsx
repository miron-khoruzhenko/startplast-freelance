import Flickity from "react-flickity-component"
import Container from "../../common/Container"
import { useEffect } from "react"
import React from "react"

import img0 from '/src/assets/about_us/slider/img0.jpg'
import img1 from '/src/assets/about_us/slider/img1.jpg'
import img2 from '/src/assets/about_us/slider/img2.jpg'
import img3 from '/src/assets/about_us/slider/img3.jpg'
import img4 from '/src/assets/about_us/slider/img4.jpg'
import img5 from '/src/assets/about_us/slider/img5.jpg'
import img6 from '/src/assets/about_us/slider/img6.jpg'
import img7 from '/src/assets/about_us/slider/img7.jpg'
import img8 from '/src/assets/about_us/slider/img8.jpg'
import img9 from '/src/assets/about_us/slider/img9.jpg'

import './slider.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const imgArr = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9]

const Partners = () => {
	const [flickity, setFlickity] = React.useState<Flickity | null>(null);

	// useEffect(() => {
	// 		console.log(flickity)
	// 		if (flickity) {
	// 			flickity.on('scroll', (progress: number) => {
	// 				console.log('progress', progress);
	// 				console.log(`current index is ${flickity.selectedIndex}`)
	// 			});
	// 		}
	// }, [flickity])


	const styles = {
		partners: "bg-main-indigo ",
		container: 'w-full overflow-visible relative ',
		heading: "text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-20",
		carousel: "",

		carouselItem : "h-full mr-2 sm:mr-8 overflow-hidden bg-white aspect-video rounded flex justify-center items-center",
		carouselImg : 'object-contain min-w-full min-h-full',

		btn : " block text-white text-md sm:text-2xl rounded-full border p-3 sm:p-4 cursor-pointer ",
		dot : "inline-block w-2 h-2 rounded-full cursor-pointer  dark:border-0 ",
		dotActive : "bg-white border-0 ",
		dotInactive : "bg-[#8D8D8D]  ",
	}

	const twistSlider = (direction : string, flickity :  Flickity ) => {
				if(direction === 'prev')
					flickity.previous();
				else if(direction === 'next')
					flickity.next();

	}


	return (
		<section className={styles.partners}>
			<Container className={styles.container}>
				<h2 className={styles.heading}>Our partners</h2>
				
				{/* <Coarusell /> */}
				<Flickity
					flickityRef={c => setFlickity(c)}
					className={styles.carousel + 'w-screen'}
					elementType="div"
					options={{
						initialIndex: 2,
						contain: true,
						prevNextButtons: false,
						pageDots: false,
						wrapAround: true,
					}}
					disableImagesLoaded={false} // default false
					reloadOnUpdate
					static
				>
					{imgArr.map((img, index) => (
						<div key={index} className={styles.carouselItem}>
							<img src={img} alt="" className={styles.carouselImg} />
						</div>
					))}

				</Flickity>
				<div className="flex gap-4 justify-between items-center mt-12 ">
				{
					flickity ? <>
					<Pagination flickity={flickity} />
					<div className="flex gap-4" >

						<div 
							className={styles.btn}
							data-direction="prev"
							onClick={()=>twistSlider('prev', flickity)}
						>
							<FontAwesomeIcon className="block" icon={faArrowLeft}/>
						</div>
						<div 
							className={styles.btn}
							data-direction="next"
							onClick={()=>twistSlider('next', flickity)}
						>
							<FontAwesomeIcon className="block" icon={faArrowRight}/>
						</div>
					</div>

					</> : ''
				}
				



			</div>

			</Container>
		</section>
	)
}

const Pagination = ({ flickity }: { flickity: Flickity }) => {
	const dots = Array.from({ length: flickity.slides.length }, (_, i) => i);
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const handleClick = (index: number) => {
		flickity.select(index);
		setCurrentIndex(index);
	};

	useEffect(() => {
		const handleScroll = () => {
			console.log(`current index is ${flickity.selectedIndex}`);
			setCurrentIndex(flickity.selectedIndex);
		};

		flickity.on("scroll", handleScroll);

		return () => {
			flickity.off("scroll", handleScroll);
		};
	}, [flickity]);

	return (
		<div className="flex justify-start items-center gap-2 ">
			{dots.map((index) => (
				<span
					key={index}
					className={`w-2 h-2 rounded-full cursor-pointer ${
						index === currentIndex ? "bg-white" : "bg-[#8D8D8D]"
					}`}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};




export default Partners