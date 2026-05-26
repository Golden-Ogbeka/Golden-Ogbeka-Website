import Image from 'next/image';
import Link from 'next/link';
import ProjectsData from '../../../data/Projects';

export default function FeaturedProjects() {
  const featuredProjects = ProjectsData.filter((p) => p.featured).slice(0, 10);

  return (
    <section className='py-20'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            Featured Work
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            A selection of my recent and most impactful projects across web, mobile, and
            backend development.
          </p>
        </div>
        <Link href='/projects'>
          <a className='mt-6 md:mt-0 inline-flex items-center text-accent font-medium hover:text-blue-400 transition-colors'>
            View All Projects
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

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {featuredProjects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <a className='minimal-card flex flex-col group overflow-hidden'>
              <div className='relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden'>
                {project.screenshots && project.screenshots.length > 0 ? (
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.name} thumbnail`}
                    className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500'
                    layout='fill'
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={`${project.name} thumbnail`}
                    layout='fill'
                    objectFit='cover'
                    className='transform group-hover:scale-105 transition-transform duration-500'
                  />
                )}
              </div>
              <div className='p-8 flex-1 flex flex-col'>
                <h3 className='text-2xl font-semibold mb-3 group-hover:text-accent transition-colors'>
                  {project.name}
                </h3>
                <p className='text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-6 flex-1 text-lg'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.coreTools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className='text-sm font-medium pr-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300'
                    >
                      {tool}
                    </span>
                  ))}
                  {project.coreTools.length > 3 && (
                    <span className='text-sm font-medium px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300'>
                      +{project.coreTools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
