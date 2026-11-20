import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ProjectType } from '../../../data/Projects';
import { trackEvent } from '../../../utils/analytics';

export function projectThumb(project: ProjectType) {
  return project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : project.image;
}

interface ProjectCardProps {
  project: ProjectType;
  index?: number;
  /** Heading level for the card title, so it fits the page's heading hierarchy. */
  headingLevel?: 'h2' | 'h3';
  trackLabel?: string;
}

/** Card used in the projects grid and the "More projects" section. */
function ProjectCard({ project, index = 0, headingLevel = 'h2', trackLabel = 'project_card' }: ProjectCardProps) {
  const { t } = useTranslation(['projects']);
  const title = t(`projects:project.${project.slug}.title`, project.title);
  const Heading = headingLevel;

  return (
    <Link href={`/projects/${project.slug}`}>
      <a
        className='minimal-card flex flex-col group overflow-hidden animate-fade-in-up'
        style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
        onClick={() => trackEvent('click', trackLabel, project.title)}
      >
        <div className='relative w-full aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200 dark:border-zinc-800'>
          <Image
            src={projectThumb(project)}
            alt={t('projects:thumbnailAlt', { title })}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='transform group-hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='p-5 sm:p-6 flex-1 flex flex-col'>
          <Heading className='text-xl leading-snug mb-2 group-hover:text-accent transition-colors'>{title}</Heading>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-5'>
            {t(`projects:project.${project.slug}.description`, project.description)}
          </p>
          <div className='flex flex-wrap gap-2 mt-auto'>
            {project.coreTools.slice(0, 3).map((tool) => (
              <span key={tool} className='text-xs px-2.5 py-1 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300'>
                {tool}
              </span>
            ))}
            {project.coreTools.length > 3 && (
              <span className='text-xs px-2.5 py-1 text-zinc-500 dark:text-zinc-400'>+{project.coreTools.length - 3}</span>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectCard;
