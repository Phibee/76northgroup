import styles from '../../styles/contact.module.css';
import logoImg from '../../assets/images/brand-logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useFramerScrollAnimation from '../../hooks/useFramerScrollAnimation';
import { fadeInUp } from '../../utils/animation';

const ContactSection = () => {
	const { ref, controls } = useFramerScrollAnimation(true);
	return (
		<div
			id="contacts"
			ref={ref}
			style={{ minHeight: 500 }}
			className={`container-fluid ${styles.contact}`}>
			<motion.div animate={controls} initial="hidden" variants={fadeInUp}>
				<Image
					src={logoImg}
					alt="76 North Group Logo"
					width="150px"
					height="30px"
				/>

				<div className="mt-5 mb-1 text-white text-sm font-light uppercase">
					Email Address:
				</div>
				<div className="text-white">info@76northgroup.com</div>
			</motion.div>
		</div>
	);
};

export default ContactSection;
