import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import ExperiencesData from '../../data/Experiences';
import { useTranslation } from '../../context/LocaleContext';
import { trackEvent } from '../../utils/analytics';

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <HeadElement
        pageTitle='Professional Experience | Golden Ogbeka'
        description='My professional work experience and roles.'
      />
      <div className='pt-32 pb-20 min-h-screen'>
        <div className='mb-16 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl font-display font-semibold mb-4'>
            {t('experiences.title')}
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl'>
            {t('experiences.subtitle')}
          </p>
        </div>

        <div className='space-y-12'>
          {ExperiencesData.map((exp, index) => (
            <article
              key={index}
              className='minimal-card p-8 animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='flex flex-col md:flex-row md:items-start gap-6'>
                <div className='flex-1'>
                  <div className='flex flex-col md:flex-row md:items-center justify-between mb-2'>
                    <h2 className='text-2xl font-semibold'>{t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.role`, exp.role)}</h2>
                    <span className='text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block w-max'>
                      {exp.date}
                    </span>
                  </div>
                  <div className='mb-6'>
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target='_blank'
                        rel='noreferrer'
                        className='text-lg text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors font-medium'
                        onClick={() => trackEvent('click', 'company_link', exp.company)}
                      >
                        {t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.company`, exp.company)}
                      </a>
                    ) : (
                      <span className='text-lg text-zinc-600 dark:text-zinc-400 font-medium'>
                        {t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.company`, exp.company)}
                      </span>
                    )}
                  </div>

                  <ul className='space-y-3'>
                    {exp.tasksAchieved.map((task, idx) => (
                      <li key={idx} className='flex items-start'>
                        <span className='w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-2 mr-3 shrink-0'></span>
                        <span className='text-zinc-700 dark:text-zinc-300 leading-relaxed'>
                          {t(`experience.${exp.role.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}-${exp.company.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '')}.tasks.${idx}`, task)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
