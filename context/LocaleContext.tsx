import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

type TranslationMap = Record<string, string>;

interface LocaleInfo {
  code: string;
  label: string;
  flag: string;
}

interface LocaleContextValue {
  locale: string;
  t: (key: string, fallback?: string) => string;
  locales: LocaleInfo[];
}

const LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'zh', label: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'ko', label: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
  { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
];

const LocaleContext = React.createContext<LocaleContextValue>({
  locale: 'en',
  t: (key: string) => key,
  locales: LOCALES,
});

function loadTranslations(locale: string): TranslationMap {
  try {
    return require(`../public/locales/${locale}/common.json`);
  } catch {
    try {
      return require(`../public/locales/en/common.json`);
    } catch {
      return {};
    }
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = router.locale || 'en';
  const [translations, setTranslations] = useState<TranslationMap>({});
  const [enTranslations, setEnTranslations] = useState<TranslationMap>({});

  useEffect(() => {
    setTranslations(loadTranslations(locale));
    if (locale !== 'en') {
      setEnTranslations(loadTranslations('en'));
    }
  }, [locale]);

  const t = useCallback(
    (key: string, fallback?: string) => {
      return translations[key] || enTranslations[key] || fallback || key;
    },
    [translations, enTranslations],
  );

  return (
    <LocaleContext.Provider value={{ locale, t, locales: LOCALES }}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  return React.useContext(LocaleContext);
}
