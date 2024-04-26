import BlogContainer from "../../common/Container/BlogContainer"
import {BlogHeading} from "../../common/Headings"

import img0 from '/src/assets/certificates/img0.png'
import img1 from '/src/assets/certificates/img1.png'
import img2 from '/src/assets/certificates/img2.png'

import img3 from '/src/assets/certificates/img3.png'
import img4 from '/src/assets/certificates/img4.png'
import img5 from '/src/assets/certificates/img5.png'

import letter_img0 from '/src/assets/certificates/letter0.png'
import letter_img1 from '/src/assets/certificates/letter1.png'
import letter_img2 from '/src/assets/certificates/letter2.png'

import solo_img0 from '/src/assets/certificates/solo_img0.png'
import solo_img1 from '/src/assets/certificates/solo_img1.png'

import certificates from "./certificates_db"

const Certificates = () => {
	const styles = {
		strong: 'text-xl mt-12 mb-9 block ',
		letterImg: "max-w-[330px] mx-auto ",
		certificatesLink: " underline"
	}



	return (
		<BlogContainer>
			<BlogHeading>Certificates & Grants</BlogHeading>
			<p className="">VKM Trading OÜ has been issued certificates to prove the quality and safety of the products. VKM Trading OÜ produces plastic products suitable for food industry (certificate of Estonian Health Authority) , also plastic products suitable for packing and transporting various chemicals (NET Emballasje- og Produkttesting AS).
			<br /><br />
			Environmental Investment Center (KIK) and Enterprise Estonia (EAS) have provided us with guidance and support to transform VKM Trading OÜ to more energy efficient company and increased the level of user experience, as well as efficiency of manufacturing resources.</p>

			<ImageContainer imgArr={[img0, img1, img2]} />

			<strong className={styles.strong}>ISO 9001:2015, ISO 14001:2015 Certificates are proof of company’s trustworthiness and level of quality</strong>

			<img src={letter_img0} alt="" className={styles.letterImg} />

			<ImageContainer imgArr={[img3, img4, img5]} />

			<strong className={styles.strong}>VKM Trading OÜ holds the UN Certificate for 1L plastic container as a specially designed for packing, transporting and storing chemicals (such as an ignition fluid etc.)</strong>

			<img src={letter_img1} alt="" className={styles.letterImg} />

			<strong className={styles.strong}>For packing food products we hold certificates from manufacturer of raw materials and Estonian Health Authority (Terviseamet AS).</strong>

			<SoloImage img={solo_img0} />

			<div className="">
				{certificates.map((certificate, index) => {
					return (
						<>
						<a key={index} 
							href={certificate.href} 
							className={styles.certificatesLink}
						>
								{certificate.title}
						</a> 
						{index === certificates.length - 1 ? '' : ' - ' }</>
					)
				})}
			</div>

			<div className="mt-5 flex flex-col gap-4">
				<h4 className={"font-bold text-xl"}>SA Keskkonnainvesteeringute Keskus (KIK):</h4>
				<p className="">VKM Trading OÜ vaikeprojekti investeering</p>
				<p className="">PROJEKTI EESMÄRK ON PARANDADA TOOTMISE RESSURSIKASUTUST <br /> Projekti raames soetatakse uus puhumisseade, kompressor ja paigaldatakse tootmisesse energiasäästlikud LED-valgustid.</p>
			</div>

			<strong className={styles.strong}>Ettevõtluse Arendamise Sihtasutus (EAS):</strong>

			<SoloImage img={solo_img1} />

			<img src={letter_img2} alt="" className={'mx-auto'} />


		</BlogContainer>
	)
}

const ImageContainer = ({imgArr} : {imgArr:string[]}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 my-11 gap-7 ">
			{imgArr.map((img, index) => {
				return (
					<ImageBlock img={img} key={index} />
				)
			})}
		</div>
	)
}

const ImageBlock = ({img, isSquare=true, className}:{img:string, isSquare?:boolean, className?:string}) => {
	return (
		<div className={`border border-black/20 ${isSquare ? ' aspect-square ' : ''}  flex justify-center items-center rounded-lg ` + className }>
			<img src={img} alt="" className="" />
		</div>
	)
}

const SoloImage = ({img}:{img:string}) => {
	return (
		<div className={`border border-black/20  flex justify-center items-center rounded-lg py-8 mb-8` }>
			<img src={img} alt="" className="max-w-[310px]" />
		</div>
	)
}
export default Certificates