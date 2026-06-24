import Link from 'next/link';
import ExperiencesData from '../../../data/Experiences';
import { trackEvent } from '../../../utils/analytics';
import { useTranslation } from '../../../context/LocaleContext';

export default function ExperienceSection() {
  const { t } = useTranslation();
  const topExperiences = ExperiencesData.slice(0, 5);

  return (
    <section className='py-20 '>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            {t('home.experience.title')}
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            {t('home.experience.subtitle')}
          </p>
        </div>
        <Link href='/experiences'>
          <a className='mt-6 md:mt-0 inline-flex items-center text-accent font-medium hover:text-blue-400 transition-colors' onClick={() => trackEvent('click', 'navigation', 'View All Experiences')}>
            {t('home.experience.viewAll')}
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

      <div className='space-y-8'>
        {topExperiences.map((exp, index) => (
          <div key={index} className='minimal-card p-6 md:p-8'>
            <div className='flex flex-col md:flex-row md:items-start gap-6 mb-4'>
              <div className='flex-1'>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-1'>
                  <h3 className='text-xl font-semibold'>{t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.role`, exp.role)}</h3>
                  <span className='text-sm font-medium text-zinc-500 mt-1 md:mt-0'>
                    {exp.date}
                  </span>
                </div>
                <div className='text-zinc-600 dark:text-zinc-400 font-medium mb-4'>
                  {t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.company`, exp.company)}
                </div>

                <div className='space-y-2 relative'>
                  {exp.tasksAchieved.slice(0, 3).map((task, idx) => (
                    <div key={idx} className='flex items-start'>
                      <span className='w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-2 mr-3 shrink-0'></span>
                      <span className='text-zinc-700 dark:text-zinc-300 line-clamp-2'>
                        {t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.tasks.${idx}`, task)}
                      </span>
                    </div>
                  ))}
                  {exp.tasksAchieved.length > 3 && (
                    <div className='pt-4'>
                      <Link href='/experiences'>
                        <a className='text-sm font-medium text-accent hover:underline' onClick={() => trackEvent('click', 'navigation', `See more - ${exp.role}`)}>
                          {t('home.experience.seeMore')}
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
