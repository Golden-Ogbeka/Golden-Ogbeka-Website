import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';
import { wrapper } from '../app/store';
import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { setDarkMode } from '../app/slices/darkModeSlice';

function MyApp({ Component, pageProps }: AppProps) {
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		let currentTheme = localStorage.getItem('theme');
		if (currentTheme) {
			let currentThemeCondition = currentTheme === 'dark' ? true : false;
			dispatch(setDarkMode(currentThemeCondition));
		}
	}, []);
	return (
		<>
			<HeadElement />
			<Component {...pageProps} />
		</>
	);
}

export default wrapper.withRedux(MyApp);
