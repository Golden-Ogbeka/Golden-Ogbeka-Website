import Link from 'next/link';
import OpenSourceData from '../../../data/OpenSource';

function OpenSourceSection() {
  // Get top 8 repositories sorted by combined stars and forks
  const topRepos = OpenSourceData.sort((a, b) => {
    const aTotal = a.stars + a.forks;
    const bTotal = b.stars + b.forks;
    return bTotal - aTotal;
  }).slice(0, 8);

  return (
    <section id='opensource' className='pt-24 pb-12'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            Open Source
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            A collection of public repositories, libraries, and templates I&apos;ve built
            and shared with the developer community.
          </p>
        </div>

        <Link
          href='/open-source'
          className='items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors'
        >
          <a className='hidden md:inline-flex justify-center  mt-6 md:mt-0 items-center text-accent font-medium hover:text-blue-400 transition-colors'>
            View All Open Source Projects
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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {topRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group block p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent rounded-2xl transition-all duration-300'
          >
            <div className='flex justify-between items-start mb-4 gap-2'>
              <h3 className='text-lg font-bold font-outfit text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors truncate flex-1'>
                {repo.name}
              </h3>
              <svg
                className='w-5 h-5 text-zinc-400 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </div>

            <p className='text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-3'>
              {repo.description}
            </p>

            <div className='flex flex-wrap gap-2 mb-6'>
              {repo.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className='px-2.5 py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400'>
              <div className='flex items-center gap-1.5'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                {repo.stars}
              </div>
              <div className='flex items-center gap-1.5'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                  />
                </svg>
                {repo.forks}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile View All Button */}
      <Link
        href='/open-source'
        className=' items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors'
      >
        <a className='md:hidden text-center justify-center mt-6 md:mt-0 inline-flex items-center text-accent font-medium hover:text-blue-400 transition-colors'>
          View All Open Source Projects
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
    </section>
  );
}

export default OpenSourceSection;
