import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useFramerScrollAnimation from '../../hooks/useFramerScrollAnimation';
import Modal from '../Modal';
import useDisclosure from '../../hooks/useDisclosure';
import leadershipData from '../../utils/leadership.data';

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, translateY: 55, transition: { delay: 1 } },
	visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
};

const LeadershipSection = () => {
	const { ref, controls } = useFramerScrollAnimation(true);
	const { isOpen: isModalOpen, onToggle: dialogueOpenToggle } = useDisclosure(
		{}
	);

	const [modalData, setModalData] = React.useState<any>();

	const handleItemClick = React.useCallback((value: any) => {
		setModalData(value);
		dialogueOpenToggle();
	}, []);

	const listItems = React.useMemo(
		() =>
			Object.values(leadershipData).map((value: any) => (
				<motion.div
					variants={item}
					className="px-4 leadership-item-wrapper mb-10">
					<Image
						onClick={() => handleItemClick(value)}
						src={value.image}
						alt={value.name}
						width="554px"
						height="570px"
					/>
					<div
						onClick={() => handleItemClick(value)}
						className="my-2 text-center text-xl font-semibold hover:cursor-pointer">
						{value.name}
					</div>
					<div className="text-center font-light">{value.position}</div>
					<div className="text-center">{value.company}</div>
				</motion.div>
			)),
		[setModalData, dialogueOpenToggle, controls, ref]
	);

	return (
		<div ref={ref} id="leadership" className={'container-fluid mb-20'}>
			<h1 className="font-semibold text-5xl text-center mt-5 md:mt-10 mb-12">
				Leadership
			</h1>
			<motion.div
				variants={container}
				initial="hidden"
				animate={controls}
				className="grid md:grid-cols-3">
				{listItems}
			</motion.div>

			<Modal
				isOpen={isModalOpen}
				onCloseButtonClick={() => dialogueOpenToggle()}>
				<div className="flex flex-col md:flex-row">
					<div>
						<Image
							src={modalData?.image}
							alt={modalData?.name}
							width="254px"
							height="270px"
						/>
					</div>
					<div className="md:pl-8 flex flex-col justify-center">
						<div className="text-white my-2 text-xl font-semibold">
							{modalData?.name}
						</div>
						<div className="text-white font-light">{modalData?.position}</div>
						<div className="text-white">{modalData?.company}</div>
					</div>
				</div>
				{modalData?.description.map((value: any) => (
					<p className="pt-4 text-white">{value}</p>
				))}
			</Modal>
		</div>
	);
};

export default React.memo(LeadershipSection);
