import Link from 'next/link';

export default function Intro() {
  return (
    <section className='pt-32 pb-20 min-h-[80vh] flex flex-col justify-center animate-fade-in-up'>
      <div className='max-w-3xl'>
        <h1 className='text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-6'>
          Building <span className='text-zinc-500'>scalable enterprise </span>
          platforms.
        </h1>
        <p className='text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10 max-w-4xl'>
          I&apos;m Golden Ogbeka, a Senior Software Engineer specializing in fintech,
          distributed systems, and crafting premium user experiences.
        </p>

        <div className='flex flex-wrap gap-4'>
          <Link href='/projects'>
            <a className='px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center'>
              View Work
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </a>
          </Link>
          <a
            href='#contact'
            className='px-8 py-4 minimal-card rounded-full font-medium text-lg inline-flex items-center'
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
