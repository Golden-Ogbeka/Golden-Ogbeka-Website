import { CssBaseline, ThemeProvider } from '@mui/material';
import { wrapper } from '../store/store';
import '../styles/globals.css';
import createEmotionCache from '../utils/createEmotionCache';
import { theme } from '../utils/theme';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />

				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />

				{/* <!-- Main Tags --> */}
				<title>{'Golden Ogbeka'}</title>
				<meta name='title' content={'Golden Ogbeka'} />
				<meta
					name='description'
					content='A website developer with knowledge of business and people'
				/>

				{/* <!-- Google meta tags --> */}
				<meta itemProp='name' content={'Golden Ogbeka'} />
				<meta
					itemProp='description'
					content='A website developer with knowledge of business and people'
				/>
				<meta itemProp='image' content='https://goldenogbeka.vercel.app/favicon.ico' />

				{/* <!-- Facebook meta tags --> */}
				<meta property='og:url' content='https://goldenogbeka.vercel.app' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={'Golden Ogbeka'} />
				<meta
					property='og:description'
					content='A website developer with knowledge of business and people'
				/>
				<meta property='og:image' content='https://goldenogbeka.vercel.app/favicon.ico' />

				{/* <!-- Twitter meta tags --> */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={'Golden Ogbeka'} />
				<meta
					name='twitter:description'
					content='A website developer with knowledge of business and people'
				/>
				<meta name='twitter:image' content='https://goldenogbeka.vercel.app/favicon.ico' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default wrapper.withRedux(MyApp);
