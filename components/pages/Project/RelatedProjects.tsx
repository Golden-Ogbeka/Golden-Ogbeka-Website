import { useTranslation } from 'next-i18next';
import ProjectsData, { ProjectType } from '../../../data/Projects';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';
import ProjectCard from './ProjectCard';

const RELATED_COUNT = 3;

/**
 * Projects most similar to the current one: ranked by how many core tools they share,
 * then featured projects, then data order. Falls back to featured projects when nothing overlaps.
 * pages/projects/[slug].tsx uses this same function to keep the right translation keys.
 */
export function getRelatedProjects(currentSlug: string, count = RELATED_COUNT): ProjectType[] {
  const current = ProjectsData.find((p) => p.slug === currentSlug);
  const tools = new Set(current?.coreTools ?? []);
  return ProjectsData.map((project, order) => ({
    project,
    order,
    shared: project.coreTools.filter((tool) => tools.has(tool)).length,
  }))
    .filter(({ project }) => project.slug !== currentSlug)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        Number(Boolean(b.project.featured)) - Number(Boolean(a.project.featured)) ||
        a.order - b.order
    )
    .slice(0, count)
    .map(({ project }) => project);
}

function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const { t } = useTranslation(['common']);
  const related = getRelatedProjects(currentSlug);
  if (related.length === 0) return null;

  const viewAll = (
    <ViewAllLink href='/projects' label={t('projectDetail.viewAllProjects')} count={ProjectsData.length} trackLabel='Related - View All Projects' />
  );

  return (
    <section aria-labelledby='more-projects' className='mt-16 pt-12 md:mt-24 md:pt-16 border-t border-zinc-200 dark:border-zinc-800'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10'>
        <h2 id='more-projects' className='text-3xl sm:text-4xl font-light'>
          {t('projectDetail.moreProjects')}
        </h2>
        <div className='hidden sm:block'>{viewAll}</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {related.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} headingLevel='h3' trackLabel='related_project' />
        ))}
      </div>
      <div className='mt-8 sm:hidden'>{viewAll}</div>
    </section>
  );
}

export default RelatedProjects;
