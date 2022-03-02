import SectionTitle from '../section.title';
import Image from 'next/image';
import logoImg from '../../assets/images/brand-logo.png';
import img from '../../assets/images/about_us_section_img.jpg';
import useFramerScrollAnimation from '../../hooks/useFramerScrollAnimation';
import { motion } from 'framer-motion';
import { fade, fadeInRight, fadeInUp } from '../../utils/animation';

const AboutSection = () => {
	const { ref, controls } = useFramerScrollAnimation(true);

	return (
		<div
			ref={ref}
			id="about"
			className="container-fluid mt-4 pt-40"
			style={{ minHeight: 500 }}>
			<SectionTitle title="About Us" subTitle="Who we are" />

			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<motion.div
						animate={controls}
						initial="hidden"
						variants={{
							hidden: { ...fade.hidden },
							visible: {
								...fade.visible,
								transition: { duration: 0.75, delay: 0.5 },
							},
						}}
						className="mt-4">
						<Image
							src={logoImg}
							alt="76 North Group Logo"
							width="150px"
							height="30px"
						/>
					</motion.div>

					<motion.p
						animate={controls}
						initial="hidden"
						variants={{
							hidden: { ...fadeInUp.hidden },
							visible: {
								...fadeInUp.visible,
								transition: { duration: 0.75, delay: 0.5 },
							},
						}}
						className="mt-5">
						76North Group is a joint venture between Omni Technical Solutions
						A/S (Omni), SOS International LLC (SOSi), and Munck Gruppen A/S
						(Munck). We offer comprehensive and customizable integrated
						solutions to the global market. Our expertise operating in some of
						the world’s most austere and remote environments comprises of a
						shared vision of innovating sustainable mission advancements. Our
						combined 80 years of technical expertise and diverse capabilities
						allow us to conduct large-scale operations from start to finish with
						flexibility, fast deployments, and fully-integratable technologies.
					</motion.p>

					<motion.h2
						animate={controls}
						initial="hidden"
						variants={{
							hidden: { ...fadeInUp.hidden },
							visible: {
								...fadeInUp.visible,
								transition: { duration: 0.75, delay: 0.7 },
							},
						}}
						className="mt-8 mb-2 text-2xl font-bold">
						Our Mission
					</motion.h2>

					<motion.p
						animate={controls}
						initial="hidden"
						variants={{
							hidden: { ...fadeInUp.hidden },
							visible: {
								...fadeInUp.visible,
								transition: { duration: 0.75, delay: 0.7 },
							},
						}}
						className="mt-5">
						To create a global network of scalable integrated solutions through
						sustainable innovations in project operations and infrastructure
						development.
					</motion.p>
				</div>
				<div className="w-full mt-10 md:w-1/2 flex flex-row justify-center md:justify-end">
					<div className="image-wrapper">
						<motion.div
							animate={controls}
							initial="hidden"
							variants={{
								hidden: { ...fadeInRight.hidden },
								visible: {
									...fadeInRight.visible,
									transition: { duration: 0.75, delay: 0.5 },
								},
							}}>
							<Image
								src={img}
								alt="Picture of the author"
								width="396px"
								height="250px"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
