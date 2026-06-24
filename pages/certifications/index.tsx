import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import CertificationsData from '../../data/Certifications';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Certifications() {
  const { t } = useTranslation(['common', 'certifications']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='Certifications & Education | Golden Ogbeka'
        description='Academic degrees, professional certifications, and training achievements by Golden Ogbeka, Senior Software Engineer.'
      />
      <div className='pt-32 pb-20 min-h-screen'>
        <div className='mb-16 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl font-display font-semibold mb-4'>
            {t('common:certifications.title')}
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl'>
            {t('common:certifications.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {CertificationsData.map((cert, index) => (
            <div
              key={index}
              className='minimal-card p-6 animate-fade-in-up flex flex-col h-full'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='mb-4'>
                <span className='text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 py-1 rounded-full inline-block'>
                  {cert.date}
                </span>
              </div>
              <h2 className='text-xl font-semibold mb-2'>{t(`certifications:certification.${index}.title`, cert.title)}</h2>
              <p className='text-zinc-600 dark:text-zinc-400 mb-6 flex-1'>
                {t(`certifications:certification.${index}.organization`, cert.organization)}
              </p>

              {cert.link && cert.link !== '#' && (
                <div className='mt-auto'>
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center text-sm font-medium text-accent hover:text-blue-400 transition-colors'
                    onClick={() => trackEvent('click', 'certification', cert.title)}
                  >
                    {t('a11y.viewCertificate').replace('{title}', t(`certifications:certification.${index}.title`, cert.title))}
                    <svg
                      className='w-4 h-4 ml-1'
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'certifications'])),
    },
  };
}
