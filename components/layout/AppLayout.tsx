import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
	const { isDark } = useAppSelector((state) => state.darkMode);

	return (
		<div className={`${isDark ? 'dark' : ''}`}>
			<div className=' bg-white dark:bg-dark pl-[9.375vw] pr-[9.375vw]'>
				<Navbar />
				<main className='min-h-screen'>{children}</main>
				<Footer />
			</div>
		</div>
	);
}

export default AppLayout;
