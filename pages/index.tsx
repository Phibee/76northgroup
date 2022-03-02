import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar';
import styles from '../styles/home.module.css';
import srcImg from '../assets/images/brand-logo.png';
import HomeSection from '../components/sections/home.section';
import AboutSection from '../components/sections/about.section';
import CapabilitiesSection from '../components/sections/capabilities.section';
import LeadershipSection from '../components/sections/leadership.section';
import ContactSection from '../components/sections/contact.section';
import Footer from '../components/footer';
import { GiHamburgerMenu } from 'react-icons/gi';
import useDisclosure from '../hooks/useDisclosure';

const Home: NextPage = () => {
	const { isOpen: isMenuOpen, onToggle: menuToggle } = useDisclosure({});

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;700&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"></meta>
			</Head>

			<div className="mobile-top-bar flex flex-row py-3 align-middle fixed drop-shadow-xl bg-white w-full md:hidden">
				<div className="flex-grow ml-2">
					<Image
						src={srcImg}
						alt="Picture of the author"
						width="140px"
						height="30px"
					/>
				</div>
				<div className="flex-shrink">
					<span className="hamburger" onClick={() => menuToggle()}>
						<GiHamburgerMenu size={32} />
					</span>
				</div>
			</div>

			<div className={styles.container}>
				<div className="sideNav container-fluid">
					<NavBar
						isOpen={isMenuOpen}
						afterItemClick={() => menuToggle()}
						afterCloseClick={() => menuToggle()}
						brand={
							<Image
								src={srcImg}
								alt="Picture of the author"
								width="150px"
								height="30px"
							/>
						}
					/>
				</div>

				<HomeSection />
				<AboutSection />
				<CapabilitiesSection />
				<LeadershipSection />
				<ContactSection />

				<Footer />
			</div>
		</>
	);
};

export default Home
