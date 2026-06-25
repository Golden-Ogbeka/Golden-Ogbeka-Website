import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../app/store';
import React from 'react';
import { setDarkMode } from '../app/slices/darkModeSlice';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { Provider } from 'react-redux';

interface I18NextPageProps {
  _nextI18Next?: {
    initialI18nStore: Record<string, Record<string, Record<string, unknown>>>;
    initialLocale: string;
    ns: string[];
    userConfig: { i18n: { defaultLocale: string; locales: string[] } };
  };
}

const RTL_LOCALES = ['ar'];

function MyApp({ Component, pageProps }: AppProps) {
  const p = pageProps as I18NextPageProps;
  const { store, props } = wrapper.useWrappedStore({ pageProps });
  const router = useRouter();

  React.useEffect(() => {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      store.dispatch(setDarkMode(currentTheme === 'dark' ? true : false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const dir = RTL_LOCALES.includes(router.locale || 'en') ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = router.locale || 'en';
  }, [router.locale]);

  const i18nInstance = React.useMemo(() => {
    const _nextI18Next = p._nextI18Next;
    if (!_nextI18Next) return null;

    const { initialI18nStore, initialLocale, ns, userConfig } = _nextI18Next;
    const locale = initialLocale || userConfig?.i18n?.defaultLocale || 'en';
    const namespaces = ns || ['common'];

    const config = {
      lng: locale,
      ns: namespaces,
      defaultNS: 'common',
      resources: initialI18nStore,
      fallbackLng: userConfig?.i18n?.defaultLocale || 'en',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      initImmediate: false,
      load: 'currentOnly' as const,
    };

    const instance = i18n.createInstance(config);
    if (!instance.isInitialized) {
      instance.init(config);
    }
    return instance;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p._nextI18Next]);

  const appContent = (
    <Provider store={store}>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-NZGV1R34HY'
        onError={() => console.log('Analytics unavailable (blocked by extension)')}
      />
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
      <Component {...props.pageProps} />
    </Provider>
  );

  if (!i18nInstance) return appContent;

  return (
    <I18nextProvider i18n={i18nInstance}>
      {appContent}
    </I18nextProvider>
  );
}

export default MyApp;
