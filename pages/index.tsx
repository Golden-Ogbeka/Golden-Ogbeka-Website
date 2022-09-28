import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
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
		</AppLayout>
	);
};

export default Home;
