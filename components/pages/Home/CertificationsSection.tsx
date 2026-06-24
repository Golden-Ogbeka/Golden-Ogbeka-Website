import Link from 'next/link';
import CertificationsData from '../../../data/Certifications';
import { trackEvent } from '../../../utils/analytics';
import { useTranslation } from 'next-i18next';

export default function CertificationsSection() {
  const { t } = useTranslation(['common', 'home', 'certifications']);
  const featuredCerts = CertificationsData.filter((c) => c.featured);

  return (
    <section className='py-20'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            {t('home:certifications.title')}
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            {t('home:certifications.subtitle')}
          </p>
        </div>
        <Link href='/certifications'>
          <a className='mt-6 md:mt-0 inline-flex items-center text-accent font-medium hover:text-blue-400 transition-colors' onClick={() => trackEvent('click', 'navigation', 'View All Certifications')}>
            {t('home:certifications.viewAll')}
            <svg
              className='w-5 h-5 ml-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {featuredCerts.map((cert, index) => (
          <div key={index} className='minimal-card p-6 flex flex-col'>
            <h3 className='text-lg font-semibold mb-2'>{t(`certifications:certification.${index}.title`, cert.title)}</h3>
            <p className='text-zinc-600 dark:text-zinc-400 mb-4'>{t(`certifications:certification.${index}.organization`, cert.organization)}</p>
            <div className='mt-auto flex items-center justify-between'>
              <span className='text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 py-1 rounded-full'>
                {cert.date}
              </span>
              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-accent hover:text-blue-400 p-2'
                  aria-label={t('a11y.viewCertificate').replace('{title}', t(`certifications:certification.${index}.title`, cert.title))}
                  onClick={() => trackEvent('click', 'certification', cert.title)}
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
