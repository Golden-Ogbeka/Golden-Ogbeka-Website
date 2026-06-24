import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';
import { wrapper } from '../app/store';
import React from 'react';
import { setDarkMode } from '../app/slices/darkModeSlice';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore({ pageProps });

  React.useEffect(() => {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      store.dispatch(setDarkMode(currentTheme === 'dark' ? true : false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
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
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
