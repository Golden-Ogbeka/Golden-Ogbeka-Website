import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
	const { isDark } = useAppSelector((state) => state.darkMode);

	return (
		<div className={`${isDark ? 'dark' : ''}`}>
			<Navbar />
			<main className='min-h-screen bg-red-500 dark:bg-green-600'>{children}</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
