import React from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useFramerScrollAnimation = (resetOnceOutsideView: boolean = false) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	React.useEffect(() => {
		if (inView) controls.start('visible');
		else {
			if (resetOnceOutsideView) controls.start('hidden');
		}
	}, [controls, inView]);

	return { controls, ref };
};

export default useFramerScrollAnimation;
