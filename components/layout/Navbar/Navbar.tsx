import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';
import AvatarImage from '../../../public/brand/golden-ogbeka.jpg';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	const dispatch = useAppDispatch();

	const { isDark } = useAppSelector((state) => state.darkMode);

	return (
		<nav className='pt-10 pb-10'>
			<div className='flex flex-row items-center justify-between'>
				<Link href='/'>
					<Image
						src={AvatarImage}
						alt='Golden Ogbeka'
						width={50}
						height={50}
						objectFit='cover'
						className='rounded-full cursor-pointer'
					/>
				</Link>
				<div className='flex flex-row items-center gap-[30px]'>
					<Link href='/#projects'>
						<span className='dark:text-white cursor-pointer hover:text-secondary hidden md:block'>
							Projects
						</span>
					</Link>
					<Link href='#contact'>
						<span className='dark:text-white cursor-pointer hover:text-secondary'>Contact</span>
					</Link>
					<a
						href='/brand/Resume-Golden-Ogbeka.pdf'
						target='_blank'
						rel='noopener noreferrer'
						download='Golden_Ogbeka_Resume'
					>
						<span className='dark:text-white hover:text-secondary'>Resume</span>
					</a>
					<DarkModeSwitch
						checked={!isDark}
						onChange={() => dispatch(toggleDarkMode())}
						moonColor='#000'
						sunColor='#fff'
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
