import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';

function Navbar() {
	const dispatch = useAppDispatch();

	const { isDark } = useAppSelector((state) => state.darkMode);

	return (
		<nav>
			Navbar
			<DarkModeSwitch checked={isDark} onChange={() => dispatch(toggleDarkMode())} />
		</nav>
	);
}

export default Navbar;
