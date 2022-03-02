import { motion } from 'framer-motion';
import useFramerScrollAnimation from '../hooks/useFramerScrollAnimation';
import { fadeInUp } from '../utils/animation';

interface ISectionTitle {
	title: string;
	subTitle: string;
}

const SectionTitle = ({ title, subTitle }: ISectionTitle) => {
	return (
		<motion.div
			animate={'visible'}
			initial="hidden"
			variants={fadeInUp}
			className="section-title">
			<div className="subTitle">{subTitle}</div>
			<div className="title">{title}</div>
		</motion.div>
	);
};

export default SectionTitle;
