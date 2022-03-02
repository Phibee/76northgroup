import Link from '../utils/activeLink';
import styles from '../styles/home.module.css';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { fadeInDown } from '../utils/animation';
import useFramerScrollAnimation from '../hooks/useFramerScrollAnimation';

interface INavBar {
	brand: any;
}

const NavBar = ({ brand }: INavBar) => {
	const { ref, controls } = useFramerScrollAnimation(true);

	return (
		<motion.ul
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={fadeInDown}
			className={styles.navbar}>
			<li className="brand-part">{brand}</li>
			<li>
				<Link activeClass="active" to="home" spy={true} smooth={true}>
					<span className={styles.navbarAnchor}>Home</span>
				</Link>
			</li>
			<li>
				<Link to="about" spy={true} smooth={true}>
					<span className={styles.navbarAnchor}>About</span>
				</Link>
			</li>
			<li>
				<Link to="capabilities" spy={true} smooth={true}>
					<span className={styles.navbarAnchor}>Capabilities</span>
				</Link>
			</li>
			<li>
				<Link to="leadership" spy={true} smooth={true}>
					<span className={styles.navbarAnchor}>Leadership</span>
				</Link>
			</li>
			<li>
				<Link to="contacts" spy={true} smooth={true}>
					<span className={styles.navbarAnchor}>Contacts</span>
				</Link>
			</li>
		</motion.ul>
	);
};

export default NavBar;
