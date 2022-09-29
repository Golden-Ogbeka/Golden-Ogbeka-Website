import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import SectionDivider from '../components/layout/SectionDivider';
import EducationSection from '../components/pages/Home/EducationSection';
import ExperienceSection from '../components/pages/Home/ExperienceSection';
import FeaturedProjects from '../components/pages/Home/FeaturedProjects';
import Intro from '../components/pages/Home/Intro';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<AppLayout>
			<Intro />
			<FeaturedProjects />
			<SectionDivider />
			<ExperienceSection />
			<SectionDivider />
			<EducationSection />
			<SectionDivider />
		</AppLayout>
	);
};

export default Home;
