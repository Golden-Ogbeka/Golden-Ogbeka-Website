import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return <AppLayout>Home</AppLayout>;
};

export default Home;
