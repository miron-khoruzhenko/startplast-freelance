
/** 
* Image container that displays images in a 3x1 grid. 
*/
export const ImageContainer = ({imgArr} : {imgArr:string[]}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 my-11 gap-7 ">
			{imgArr.map((img, index) => {
				return (
					<BorderedImageBlock img={img} key={index} />
				)
			})}
		</div>
	)
}

/** 
* Bordered and squared image block. Normally used for certificates and other images that need to be displayed in a grid.
*/
export const BorderedImageBlock = ({img, isSquare=true, className}:{img:string, isSquare?:boolean, className?:string}) => {
	return (
		<div className={`border border-black/20 ${isSquare ? ' aspect-square ' : ''}  flex justify-center items-center rounded-lg ` + className }>
			<img src={img} alt="" className="" />
		</div>
	)
}

/**
 * Solo image block with 310px max width. Normally used for images that need to be displayed alone.
 */
export const SoloImage = ({img}:{img:string}) => {
	return (
		<div className={`border border-black/20  flex justify-center items-center rounded-lg py-8 mb-8` }>
			<img src={img} alt="" className="max-w-[310px]" />
		</div>
	)
}

/**
 * Formated paragraphs with line breaks if the input is a array of strings otherwise it will return a single paragraph.
 */
export const FormatedParagraphs = ({ paragraphs } : { paragraphs: string[] | string }) => {

	if (typeof paragraphs === 'string') {
		return (
			<p className="mb-4">{paragraphs}</p>
		)
	}
	return(<>
		{paragraphs.map((paragraph, index) => {
			return (
				<p key={index} className="">{paragraph} <br /><br /></p>
		)})}
		</>)
}



/**
 * Image block with caption if needed.
 */
export const ImgBlockWithCaption = (
	{ img, alt, displayAlt, className, imgClassName } : 
	{ img:string, alt?:string, displayAlt?:boolean, className?:string, imgClassName?: string  }
) => {
	return (
		<div className={"mx-auto py-12 " + (className? className : '')} >
			<img src={img} alt={''} className={'mx-auto ' + (imgClassName ? imgClassName : '')}/>
			{displayAlt && <p className="border-l-2 border-black mt-4 pl-2 text-sm">{alt}</p>}
		</div>
	)
}