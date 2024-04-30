import Card from "./Card"
import { useEffect, useRef, useState } from "react"
import items from "./itemsB"
// import global_styles from "../../../assets/styles/global_styles"
// import global_styles from '../../../../assets/styles/global_styles'
// import { Button } from "../../features/Button"
// import { Button } from '../../../features/Buttons/Button1'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

// const sliderHeight = 'h-60'
// * Не все h- работают. Например h-15

const Coarusell = () => {

	const itemsClone = [ ...items.slice(-2), ...items, ...items.slice(0,2)]
	const cloneLen = itemsClone.length

	const ulContainerRef = useRef<HTMLInputElement>(null);


	const [ulWidth, setUlWitdth] = useState(0);
	const [intervalId, setIntervalId] = useState<number | undefined>(0);
	const [sliderPosition, setSliderPosition] = useState(items.length + 1)
	const [isTicking, setIsTicking] = useState(false)
	const [disableTransition, setDisableTransition] = useState(false)

	// ==== Functions ====================================

		const twistSlider = (direction : string | null = 'next', toPosition : null | number = null) => {
			if(!isTicking){
				let position = toPosition || sliderPosition

				if(!toPosition){
					if(direction === 'prev'){
						position += 1;
					}else if(direction === 'next'){
						position -= 1;
					}
					// Что бы не было перебора но и небыло начала с нуля
					if(position < 0){
						position += cloneLen
					}
					position = position % cloneLen
				}

			setSliderPosition(position)
			setIsTicking(true)
		}
	}


	const handleResize = () => {
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
	}

	const handleDotClick : React.MouseEventHandler<HTMLSpanElement> = (e) => {
		const index : number | null = parseInt(e.currentTarget?.getAttribute('data-index') || '')

		const cardPosition = items.length + 1 - (index || 0)
		twistSlider('', cardPosition)
	}

	const getRationalIndex = (parentWidth = 1024) => {

		let rationalIndex = (items.length - sliderPosition + (parentWidth >= 1024 ? 1 : 0)) % items.length
						

		if (rationalIndex < 0){
			rationalIndex += items.length
		}

		return rationalIndex;
	}

	const sleep = (ms = 0) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};


	// ==== useEffects ====================================

	useEffect(()=>{
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
		addEventListener('resize', handleResize)

		console.log('==== Coarusell Mounted ====================')

		return ()=>{
			removeEventListener('resize', handleResize)
			console.log('xxxx Coarusell Unmounted xxxxxxxxxxxxxxxxxxxx')

		}
	}, [])

	useEffect(() => {
		const id = setInterval(()=>{
				twistSlider('next')
			}, 3000)
		setIntervalId(id)

		return()=>{
			clearInterval(id)
			clearInterval(intervalId);
		}
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sliderPosition, isTicking])
	

	useEffect(()=>{
		if(isTicking){
			sleep(350).then(()=>{
				if(sliderPosition === 1 || sliderPosition === cloneLen - 2){
					const isLastCopy = sliderPosition === cloneLen - 2;

					setDisableTransition(true)
					
					if (isLastCopy) {
						setSliderPosition(2);
					} else {
						setSliderPosition(items.length + 1);
					}
				}
					
				// setIsTicking(false)
			})
		}
	},[isTicking, cloneLen, sliderPosition])


	// ====================================================

	return (
		<section className={styles.carousel}>
			{/* <h3 className={styles.subheading}>Some of</h3>
			<h2 className={styles.heading}>Our Works</h2> */}
			<div className={styles.container}>

				<div className={styles.div} ref={ulContainerRef}>

					<ul className={styles.ul}>
						{itemsClone.map((item, index) => {
							return (
								<Card 
									sliderPosition={sliderPosition - cloneLen + 2}
									disableTransition={disableTransition}
									setDisableTransition={setDisableTransition}
									setIsTicking={setIsTicking}
									itemCount={cloneLen}
									getRationalIndex={getRationalIndex}
									
									img={item.img} 
									title={item.title} 
									// title={String(sliderPosition)} 
									link={item.link}
									text={item.text}
									// sliderHeight={sliderHeight}
									parentWidth={ulWidth}
									index={item.index}
									
									key={index > 1 && index < cloneLen - 2 ? item.index : item.index + 'clone'} 
								/>)
						})}
					</ul>
				</div>
			</div>

			<div className="flex justify-between items-center mt-12 ">

				{/* Slider Dots */}
						<div className="text-center space-x-2">
				{
					items.map((item)=>{
						const rationalIndex = getRationalIndex()
						
						return(
							<span 
								className={styles.dot + ( rationalIndex === item.index ? styles.dotActive : styles.dotInactive)}
								onClick={handleDotClick}
								key={item.index + 'dot'}
								data-index={item.index}></span>
						)
					})
				}
			</div>


			<div className="flex gap-4 ">

				{/* Стрелка налево */}
				{/* DIV нужен что бы стрелка не обрезалась  */}
				<div 
					className={styles.btn}
					data-direction="prev"
					onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}
				>
					<FontAwesomeIcon className="block" icon={faArrowLeft}/>
				</div>
				<div 
					className={styles.btn}
					data-direction="next"
					onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}
				>
					<FontAwesomeIcon className="block" icon={faArrowRight}/>
				</div>
			</div>
			</div>
			


		</section>
	)
}


const styles = {
	carousel: ' ',
	container : "",
	div : "w-screen  lg:text-black ",
	ul : "gap-8 relative w-max py-4 ",
	btn : " hidden md:block text-white text-2xl rounded-full border p-4 ",
	dot : "inline-block w-2 h-2 rounded-full cursor-pointer  dark:border-0 ",
	dotActive : "bg-white border-0 ",
	dotInactive : "bg-[#8D8D8D]  ",
}

export default Coarusell


