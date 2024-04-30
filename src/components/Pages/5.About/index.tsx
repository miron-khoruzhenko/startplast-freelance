import BlogContainer from "../../common/Container/BlogContainer"
import { BlogHeading } from "../../common/Headings"
import Partners from "./Partners"

import { FormatedParagraphs, ImgBlockWithCaption } from "../../common/BlogComponents"


import img0 from '/src/assets/about_us/img0.jpg'
import img1 from '/src/assets/about_us/img1.jpg'
import img2 from '/src/assets/about_us/img2.jpg'
import img3 from '/src/assets/about_us/img3.jpg'

import letter_img0 from '/src/assets/certificates/letter0.png'
import letter_img2 from '/src/assets/certificates/letter2.png'


const About = () => {
	return (
		<>
		<BlogContainer>
			<BlogHeading>About us</BlogHeading>
				<FormatedParagraphs paragraphs={textParagraphs[0]} />
				<ImgBlockWithCaption img={img0} alt="Company logo" displayAlt={true} />
				<FormatedParagraphs paragraphs={textParagraphs.slice(1,4)} />
				<ImgBlockWithCaption img={letter_img0} alt="Certificates" imgClassName="max-w-[223px] " />

			<BlogHeading>Our products</BlogHeading>
				<FormatedParagraphs paragraphs={textParagraphs.slice(4, 6)} />
				<p className="">In addition to locally produced PET Tare, we offer:</p>
				<ul className="">
					{weOfferList.map((item, index) => {
						return (
							<li key={index} className="list-inside list-disc pl-1">{item}</li>
					)})}
				</ul>
				<ImgBlockWithCaption img={img1} alt="PET Tare" displayAlt={false} />

			<BlogHeading>Production process</BlogHeading>
				<FormatedParagraphs paragraphs={textParagraphs[6]} />
				<ImgBlockWithCaption img={img2} alt="Production process" displayAlt={false} />

			<BlogHeading>What is PET?</BlogHeading>
				<FormatedParagraphs paragraphs={textParagraphs.slice(7, 9)} />
				<ImgBlockWithCaption img={img3} alt="PET bottles" displayAlt={false} />
				<ImgBlockWithCaption img={letter_img2} alt="Certificates" />
		</BlogContainer>
		<Partners />
		</>
	)
}


const textParagraphs = [
	"VKM Trading OÜ was founded in 2007. in the year following the merger of two companies, Senderlen LLC and Starplast LLC. Starplast Ltd was involved in the production of PET Tare in 1997. since, Senderlen LLC 1999. year.",

	"Today, VKM Trading OÜ is the only company in Estonia that is engaged in the production of PET Tare in such a wide range. Years of experience have brought quality and reliability, as evidenced by ISO 9001 and ISO 14001 certificates.",
	"We consider it very important to attach the UN certificate to the 1L transparent and black plastic bottle. The UN certificate is held only by VKM Trading OÜ in Estonia and allows our partners to safely market and transport flammable liquid both in Estonia and abroad.",
	"The safety of PET Tare for food packaging is guaranteed by regular tests at the Health Board’s central laboratory in Tallinn, Paldiski mnt. 81",

	"We specialize only in the production of PET Tare (0.1 L – 10L).",
	"We offer PP caps and handles for manufactured plastic containers.",

	"The production of PET Tare begins with the purchase of raw materials. VKM Trading OÜ uses preformes produced in Lithuania for this purpose. We then select a form with a suitable design from more than 100 Press forms, which the technician assembles into an automated bottle blowing machine. If there is a desire to have an exciting and unique bottle shape, then we will help in the completion of the new press form. Contact us info@starplast.ee)",

	"PET bottles were patented in 1973. in and 1977. in the year began their industrial recycling. The widespread introduction of PET Tare was due to the favorable price and practicality. In terms of environmental sustainability, a lot of attention is paid to the collection and recycling of used PET Tare. However, it should be noted that a large proportion of the material is made up of short-lived plastic products. Worldwide, 20,000 plastic bottles are produced every second, most of which are later recycled.",
	"According to statistics, almost 90% of plastic containers have been collected in Estonia between 2012 and 2015, most of which are recycled"
]

const weOfferList = [
	"HDPE cans",
	"PET jars",
	"PET preforms e. blanks",
	"PP caps, lids and handles",
	"Design and manufacture of personal press form",
]


export default About