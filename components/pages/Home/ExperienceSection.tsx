import Image from 'next/image';
import ExperiencesData from '../../../data/Experiences';
import { trackEvent } from '../../../utils/analytics';
import { useTranslation } from 'next-i18next';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[()&]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function slugifyCompany(str: string): string {
  return str
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/-$/g, '');
}

function getExpKey(role: string, company: string): string {
  return `${slugify(role)}-${slugifyCompany(company)}`;
}

export default function ExperienceSection() {
  const { t } = useTranslation(['common', 'home', 'experiences']);
  const topExperiences = ExperiencesData.slice(0, 5);

  const viewAll = (
    <ViewAllLink
      href='/experiences'
      label={t('home:experience.viewAll')}
      count={ExperiencesData.length}
      trackLabel='View All Experiences'
    />
  );

  return (
    <section aria-labelledby='experience-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='experience-title'
        title={t('home:experience.title')}
        highlight={t('home:experience.highlight')}
        subtitle={t('home:experience.subtitle')}
        action={viewAll}
      />

      <ol className='border-t border-zinc-200 dark:border-zinc-800'>
        {topExperiences.map((exp) => {
          const key = getExpKey(exp.role, exp.company);
          const company = t(`experiences:experience.${key}.company`, exp.company);
          const isCurrent = /present/i.test(exp.date);
          const logo = (
            <span
              className={`relative w-8 h-8 shrink-0 rounded-lg overflow-hidden flex items-center justify-center ${
                exp.logoDarkBackground ? 'bg-zinc-800' : 'bg-zinc-100 dark:bg-zinc-800'
              }`}
            >
              <Image
                src={exp.companyLogo}
                alt=''
                width={32}
                height={32}
                className={`object-contain ${exp.invertCompanyLogoInDarkMode ? 'dark:invert' : ''}`}
              />
            </span>
          );
          return (
            <li
              key={key}
              className='grid grid-cols-1 md:grid-cols-[150px_1fr_1.3fr] gap-3 md:gap-8 py-7 border-b border-zinc-200 dark:border-zinc-800 md:items-start'
            >
              <span className='text-sm text-zinc-500 dark:text-zinc-400 tabular-nums md:pt-1.5'>{exp.date}</span>
              <div>
                <h3 className='text-2xl leading-snug'>
                  {t(`experiences:experience.${key}.role`, exp.role)}
                  {isCurrent && (
                    <span className='ml-3 rtl:ml-0 rtl:mr-3 align-middle font-sans text-[11px] font-semibold uppercase tracking-wide text-accent border border-accent rounded-full px-2 py-0.5'>
                      {t('home:experience.now')}
                    </span>
                  )}
                </h3>
                {exp.companyLink ? (
                  <a
                    href={exp.companyLink}
                    target='_blank'
                    rel='noreferrer'
                    className='mt-2 inline-flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors rounded-md'
                    onClick={() => trackEvent('click', 'company_link', exp.company)}
                  >
                    {logo}
                    {company}
                  </a>
                ) : (
                  <div className='mt-2 inline-flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400'>
                    {logo}
                    {company}
                  </div>
                )}
              </div>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 md:pt-1'>
                {t(`experiences:experience.${key}.tasks.0`, exp.tasksAchieved[0])}
              </p>
            </li>
          );
        })}
      </ol>

      <div className='mt-10 md:hidden'>{viewAll}</div>
    </section>
  );
}
