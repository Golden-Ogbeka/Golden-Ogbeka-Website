import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ProjectType } from '../../../data/Projects';
import { trackEvent } from '../../../utils/analytics';
import ListingToolbar, { ListingView } from '../../reusable/ListingToolbar/ListingToolbar';
import PreviewIndexList from '../../reusable/PreviewIndexList/PreviewIndexList';

const VIEW_KEY = 'projects-view';
const TOP_TOOLS = 8;

function thumbOf(project: ProjectType) {
  return project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : project.image;
}

/** Filterable project listing: card grid (default) or an editorial index with hover previews. */
export default function ProjectsExplorer({ projects }: { projects: ProjectType[] }) {
  const { t } = useTranslation(['common', 'projects']);
  const [view, setView] = useState<ListingView>('grid');
  const [tool, setTool] = useState<string>('');

  // Remember the visitor's preferred view (convenience only).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(VIEW_KEY);
      if (saved === 'index' || saved === 'grid') setView(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);
  const chooseView = (v: ListingView) => {
    setView(v);
    trackEvent('click', 'projects_view', v);
    try {
      localStorage.setItem(VIEW_KEY, v);
    } catch {
      /* storage unavailable */
    }
  };

  const tools = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.coreTools.forEach((tl) => counts.set(tl, (counts.get(tl) || 0) + 1)));
    return [...counts.entries()]
      .filter(([, n]) => n > 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, TOP_TOOLS)
      .map(([name]) => name);
  }, [projects]);

  const visible = useMemo(() => (tool ? projects.filter((p) => p.coreTools.includes(tool)) : projects), [projects, tool]);
  const titleOf = (p: ProjectType) => t(`projects:project.${p.slug}.title`, p.title);

  return (
    <div>
      <ListingToolbar
        filterLabel={t('projects:filterLabel')}
        options={[{ value: '', label: t('projects:filterAll') }, ...tools.map((name) => ({ value: name, label: name }))]}
        active={tool}
        onFilter={(value) => {
          setTool(value);
          trackEvent('click', 'projects_filter', value || 'all');
        }}
        view={view}
        onView={chooseView}
        viewGroupLabel={t('projects:viewLabel')}
        gridLabel={t('projects:viewGrid')}
        indexLabel={t('projects:viewIndex')}
        resultText={t('projects:count', { count: visible.length })}
      />

      {view === 'index' ? (
        <PreviewIndexList
          items={visible.map((project) => ({
            key: project.slug,
            href: `/projects/${project.slug}`,
            title: titleOf(project),
            meta: project.coreTools.slice(0, 3).join(' · '),
            image: thumbOf(project),
            onClick: () => trackEvent('click', 'project_card', project.title),
          }))}
        />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {visible.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a
                className='minimal-card flex flex-col group overflow-hidden animate-fade-in-up'
                style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
                onClick={() => trackEvent('click', 'project_card', project.title)}
              >
                <div className='relative w-full aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200 dark:border-zinc-800'>
                  <Image
                    src={thumbOf(project)}
                    alt={t('projects:thumbnailAlt', { title: titleOf(project) })}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='transform group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-5 sm:p-6 flex-1 flex flex-col'>
                  <h2 className='text-xl leading-snug mb-2 group-hover:text-accent transition-colors'>{titleOf(project)}</h2>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-5'>
                    {t(`projects:project.${project.slug}.description`, project.description)}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.coreTools.slice(0, 3).map((tl) => (
                      <span key={tl} className='text-xs px-2.5 py-1 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300'>
                        {tl}
                      </span>
                    ))}
                    {project.coreTools.length > 3 && (
                      <span className='text-xs px-2.5 py-1 text-zinc-500 dark:text-zinc-400'>+{project.coreTools.length - 3}</span>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}

      {visible.length === 0 && <p className='py-16 text-center text-zinc-500 dark:text-zinc-400'>{t('projects:noResults')}</p>}
    </div>
  );
}
