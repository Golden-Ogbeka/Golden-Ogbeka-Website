import { useTranslation } from 'next-i18next';
import HighlightedText from '../../reusable/HighlightedText/HighlightedText';
import ContactCard from './ContactCard';

const CONTACTS = [
  { key: 'footer.sendEmail', value: 'ogbekagolden@gmail.com', href: 'mailto:ogbekagolden@gmail.com' },
  { key: 'footer.linkedin', value: 'in/goldenogbeka', href: 'https://www.linkedin.com/in/goldenogbeka/' },
  { key: 'footer.sendMessage', value: 'WhatsApp', href: 'https://wa.me/2348169200454' },
  { key: 'footer.github', value: 'Golden-Ogbeka', href: 'https://github.com/Golden-Ogbeka' },
];

function Footer() {
  const { t } = useTranslation(['common']);
  const year = new Date().getFullYear();

  return (
    <footer id='contact' className='mt-24 md:mt-32 border-t border-zinc-200 dark:border-zinc-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='md:col-span-7'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05]'>
            <HighlightedText text={t('footer.ctaTitle')} highlight={t('footer.ctaHighlight')} />
          </h2>
          <p className='mt-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed'>
            {t('footer.ctaSubtitle')}
          </p>
          <a
            href='mailto:ogbekagolden@gmail.com'
            className='mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'
          >
            {t('footer.ctaButton')}
            <svg className='w-4 h-4 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14m-6-6 6 6-6 6' />
            </svg>
          </a>
        </div>
        <div className='md:col-span-5 md:self-end'>
          <h3 className='text-xs font-sans font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400 mb-2'>
            {t('footer.title')}
          </h3>
          <ul className='border-t border-zinc-200 dark:border-zinc-800'>
            {CONTACTS.map((c) => (
              <li key={c.key}>
                <ContactCard text={t(c.key)} value={c.value} href={c.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='border-t border-zinc-200 dark:border-zinc-800'>
        <p className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-zinc-500 dark:text-zinc-400'>
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
