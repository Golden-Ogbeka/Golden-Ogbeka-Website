import CertificationsData from '../../../data/Certifications';
import { trackEvent } from '../../../utils/analytics';
import { useTranslation } from 'next-i18next';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';

const IN_PROGRESS = 'In Progress';

export default function CertificationsSection() {
  const { t } = useTranslation(['common', 'home', 'certifications']);

  // Featured credentials in data order, with in-progress ones first so current study leads.
  const featured = CertificationsData.map((cert, index) => ({ cert, index }))
    .filter(({ cert }) => cert.featured)
    .sort((a, b) => Number(b.cert.date === IN_PROGRESS) - Number(a.cert.date === IN_PROGRESS));

  const viewAll = (
    <ViewAllLink
      href='/certifications'
      label={t('home:certifications.viewAll')}
      count={CertificationsData.length}
      trackLabel='View All Certifications'
    />
  );

  return (
    <section aria-labelledby='credentials-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='credentials-title'
        title={t('home:certifications.title')}
        highlight={t('home:certifications.highlight')}
        subtitle={t('home:certifications.subtitle')}
        action={viewAll}
      />

      <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-x-14 border-t border-zinc-200 dark:border-zinc-800 md:border-t-0'>
        {featured.map(({ cert, index }) => {
          const title = t(`certifications:certification.${index}.title`, cert.title);
          const inProgress = cert.date === IN_PROGRESS;
          return (
            <li
              key={index}
              className='flex items-start justify-between gap-6 py-5 border-b border-zinc-200 dark:border-zinc-800 md:first:border-t md:[&:nth-child(2)]:border-t'
            >
              <div className='min-w-0'>
                <h3 className='font-sans text-base font-medium text-zinc-900 dark:text-zinc-100 tracking-normal'>{title}</h3>
                <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-0.5'>
                  {t(`certifications:certification.${index}.organization`, cert.organization)}
                </p>
                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noreferrer'
                    className='group mt-1 inline-flex items-center gap-1.5 py-1.5 text-sm text-accent rounded-sm'
                    aria-label={t('a11y.viewCertificate').replace('{title}', title)}
                    onClick={() => trackEvent('click', 'certification', cert.title)}
                  >
                    <span className='link-underline'>{t('certifications:viewCertificate')}</span>
                    <svg className='w-3.5 h-3.5 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17 17 7M9 7h8v8' />
                    </svg>
                  </a>
                )}
              </div>
              <span
                className={`text-sm whitespace-nowrap shrink-0 ${
                  inProgress ? 'text-accent font-medium' : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {inProgress ? t('certifications:inProgress') : cert.date}
              </span>
            </li>
          );
        })}
      </ul>

      <div className='mt-10 md:hidden'>{viewAll}</div>
    </section>
  );
}
