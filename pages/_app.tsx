import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';
import { wrapper } from '../app/store';
import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { setDarkMode } from '../app/slices/darkModeSlice';
import Script from 'next/script';

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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-NZGV1R34HY' />
      <Script id='google-analytics'>
        {`
						window.dataLayer = window.dataLayer || [];
						window.gtag = function () {
            dataLayer.push(arguments);
            };
            window.gtag('js', new Date());

						window.gtag('config', 'G-NZGV1R34HY');
        `}
      </Script>
      <HeadElement />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
