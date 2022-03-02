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

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className={styles.container}>
				<div className="sideNav container-fluid">
					<NavBar
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
