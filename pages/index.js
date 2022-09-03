import React from 'react';
import AboutSection from '../components/Homepage/AboutSection/AboutSection';
import ContactSection from '../components/Homepage/ContactSection/ContactSection';
import WelcomeSection from '../components/Homepage/WelcomeSection/WelcomeSection';
import PublicLayout from '../components/layout/AppLayouts/PublicLayout';
// import styles from '../styles/Home.module.css';

export default function Home() {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<PublicLayout>
			<WelcomeSection />
			<AboutSection />
			<ContactSection />
		</PublicLayout>
	);
}
