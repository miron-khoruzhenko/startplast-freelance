
type CardProps = {
	sliderPosition: number,
	disableTransition: boolean,
	setDisableTransition: React.Dispatch<React.SetStateAction<boolean>>,
	setIsTicking: React.Dispatch<React.SetStateAction<boolean>>,
	itemCount : number,
	getRationalIndex : (arg0: number | undefined)=> number,

	img: string,
	title: string,
	link: string,
	text: string, 
	// sliderHeight: string,
	parentWidth: number,
	index: number,

	key: number | string,
}

const Card = (props : CardProps) => {
	const margin = 20, //px
				partCount =  props.parentWidth > 1024 ? 3 : props.parentWidth > 768 ? 2 : 1,
				cardWidth = Math.round(props.parentWidth / partCount) - margin;

	const styles = {
		li : `aspect-video top-0 left-0 list-none text-5xl relative inline-block rounded-md overflow-hidden `,
		active : 'scale-150 ',
		container: 'absoulte w-full h-full inline-flex items-end justify-end relative ',
		img : 'min-w-full min-h-full object-cover transition-opacity ',
	}

	const isActive = props.getRationalIndex(props.parentWidth) === props.index


	return (
		<li 
			className={styles.li} 
			style={{width: `${cardWidth}px`, 
							margin: `0 ${Math.round(margin/2)}px`,
							transform: `translate(${(cardWidth + margin) * props.sliderPosition}px)`,
							transition: props.disableTransition ? 'transform 50ms step-end' : 'transform 600ms, opacity 600ms',
						}} 
			onTransitionEnd={()=>{
				if(props.disableTransition)
					props.setDisableTransition(false)
					props.setIsTicking(false)
			}}
		>
				<div className={styles.container}>
					<div className="w-full h-full bg-white">
						<img src={props.img} alt="" 
							className={styles.img  + (isActive ? '' : 'opacity-60 ')} />
					</div>


				</div>
		</li>
	)
}

export default Card