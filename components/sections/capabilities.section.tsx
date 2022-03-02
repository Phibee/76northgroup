import React from 'react';
import styles from '../../styles/capabilities.module.css';
import { motion } from 'framer-motion';
import useFramerScrollAnimation from '../../hooks/useFramerScrollAnimation';
import { fadeInDown, fadeInUp } from '../../utils/animation';

const fadeInRight = {
	visible: {
		opacity: 1,
		translateX: 35,
		transition: { duration: 0.75 },
	},
	hidden: { opacity: 0, translateX: -5, transition: { delay: 1 } },
};

const CapabilitiesSection = () => {
	const { ref, controls } = useFramerScrollAnimation(true);

	return (
		<div id="capabilities" ref={ref}>
			<div className="flex flex-row flex-wrap w-full md:h-full">
				<div className={`w-full md:w-1/4 ${styles.leftContainer}`}>
					<motion.div
						animate={controls}
						initial="hidden"
						variants={fadeInRight}
						className={styles.leftContent}>
						<h1 className="text-4xl font-medium text-white title">
							Capabilities
						</h1>
					</motion.div>
				</div>
				<div
					className={`w-full md:w-3/4 md:pl-32 pt-20 px-12 py-12 ${styles.rightContent}`}>
					<div className="grid md:grid-cols-2">
						<div className="mb-12">
							<motion.div
								initial="hidden"
								variants={fadeInUp}
								animate={controls}
								className="text-lg font-semibold mb-2 underline">
								Transportation &amp; Logistics
							</motion.div>
							<motion.ul
								animate="visible"
								initial="hidden"
								variants={fadeInDown}
								className="list-disc pl-5">
								<li>Air &amp; Port Operations</li>
								<li>Vehicle Operations</li>
								<li>Support Operations</li>
							</motion.ul>
						</div>
						<div className="mb-12">
							<motion.div
								initial="hidden"
								variants={fadeInUp}
								animate={controls}
								className="text-lg font-semibold mb-2 underline">
								Services
							</motion.div>
							<motion.ul
								animate="visible"
								initial="hidden"
								variants={fadeInDown}
								className="list-disc pl-5">
								<li>Public Safety Services</li>
								<li>Resident Services</li>
								<li>MWR Services</li>
							</motion.ul>
						</div>
						<div className="mb-12">
							<motion.div
								initial="hidden"
								variants={fadeInUp}
								animate={controls}
								className="text-lg font-semibold mb-2 underline">
								Operations &amp; Maintenance
							</motion.div>
							<motion.ul
								animate="visible"
								initial="hidden"
								variants={fadeInDown}
								className="list-disc pl-5">
								<li>Civil Engineering</li>
								<li>Utilities</li>
								<li>Facilities</li>
							</motion.ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CapabilitiesSection;
