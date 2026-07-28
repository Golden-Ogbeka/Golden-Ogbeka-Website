import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { BlogPostType } from '../../../data/BlogPosts';

interface BlogDetailProps {
  post: BlogPostType;
}

function BlogDetail({ post }: BlogDetailProps) {
  const { t } = useTranslation(['blog']);

  const paragraphs = t(`blog:post.${post.slug}.paragraphs`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <article>
      <header className='mb-10 animate-fade-in-up'>
        <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white mb-4'>
          {t(`blog:category.${post.category}`)}
        </span>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6'>
          {t(`blog:post.${post.slug}.title`, post.slug)}
        </h1>
        <p className='text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed'>
          {t(`blog:post.${post.slug}.summary`, post.slug)}
        </p>
        <time className='block mt-4 text-sm text-zinc-500 dark:text-zinc-500' dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </header>

      <div
        className='relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-zinc-200 dark:bg-zinc-800 animate-fade-in-up'
        style={{ animationDelay: '0.1s' }}
      >
        <Image
          src={post.image}
          alt={t(`blog:post.${post.slug}.title`, post.slug)}
          layout='fill'
          objectFit='cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 720px'
          priority
        />
      </div>

      <div
        className='prose prose-lg prose-zinc dark:prose-invert max-w-none animate-fade-in-up'
        style={{ animationDelay: '0.2s' }}
      >
        {Array.isArray(paragraphs) &&
          paragraphs.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
      </div>
    </article>
  );
}

export default BlogDetail;
