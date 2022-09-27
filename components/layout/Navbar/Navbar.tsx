import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';
import Tooltip from '../../reusable/Tooltip/Tooltip';

function Navbar() {
	const dispatch = useAppDispatch();

	const { isDark } = useAppSelector((state) => state.darkMode);

	return (
		<nav>
			Navbar
			<Tooltip hoverText={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
				<DarkModeSwitch
					checked={!isDark}
					onChange={() => dispatch(toggleDarkMode())}
					moonColor='#000'
					sunColor='#ffd700'
				/>
			</Tooltip>
		</nav>
	);
}

export default Navbar;
