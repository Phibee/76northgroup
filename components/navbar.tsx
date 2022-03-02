import Link from '../utils/activeLink';
import styles from '../styles/home.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeInDown, fadeInUp } from '../utils/animation';
import useFramerScrollAnimation from '../hooks/useFramerScrollAnimation';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useDisclosure from '../hooks/useDisclosure';

interface INavBar {
	brand: any;
	afterCloseClick?: () => void;
	afterItemClick?: () => void;
	isOpen?: boolean;
}

const NavBar = ({
	brand,
	afterCloseClick,
	afterItemClick,
	isOpen = true,
}: INavBar) => {
	const { ref, controls } = useFramerScrollAnimation(true);

	return (
		<div
			style={{ height: '100vh' }}
			className={isOpen ? 'menu-toggle-open' : 'menu-toggle-close'}>
			<motion.ul
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={fadeInDown}
				className={`${styles.navbar} drop-shadow-lg`}>
				<li className="brand-part flex-shrink">{brand}</li>
				<li className="flex flex-grow">
					<ul className="w-full flex flex-row justify-between">
						<li className="flex flex-row justify-end md:hidden">
							<span className="" onClick={() => afterCloseClick?.()}>
								<IoIosCloseCircleOutline size={32} />
							</span>
						</li>
						<li>
							<Link
								onClick={() => afterItemClick?.()}
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}>
								<span className={styles.navbarAnchor}>Home</span>
							</Link>
						</li>
						<li>
							<Link
								onClick={() => afterItemClick?.()}
								to="about"
								spy={true}
								smooth={true}>
								<span className={styles.navbarAnchor}>About</span>
							</Link>
						</li>
						<li>
							<Link
								onClick={() => afterItemClick?.()}
								to="capabilities"
								spy={true}
								smooth={true}>
								<span className={styles.navbarAnchor}>Capabilities</span>
							</Link>
						</li>
						<li>
							<Link
								onClick={() => afterItemClick?.()}
								to="leadership"
								spy={true}
								smooth={true}>
								<span className={styles.navbarAnchor}>Leadership</span>
							</Link>
						</li>
						<li>
							<Link
								onClick={() => afterItemClick?.()}
								to="contacts"
								spy={true}
								smooth={true}>
								<span className={styles.navbarAnchor}>Contacts</span>
							</Link>
						</li>
					</ul>
				</li>
			</motion.ul>
		</div>
	);
};

export default NavBar;
