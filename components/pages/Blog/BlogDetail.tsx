import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { BlogPostType } from '../../../data/BlogPosts';

interface BlogDetailProps {
  post: BlogPostType;
}

function BlogDetail({ post }: BlogDetailProps) {
  const { t } = useTranslation(['blog']);
  const { locale } = useRouter();

  const paragraphs = t(`blog:post.${post.slug}.paragraphs`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <article>
      <header className='mb-10 max-w-3xl animate-fade-in-up'>
        <p className='text-sm mb-5 text-zinc-500 dark:text-zinc-400'>
          <span className='font-semibold uppercase tracking-[0.1em] text-accent text-xs'>{t(`blog:category.${post.category}`)}</span>
          <span aria-hidden='true'> · </span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(locale || 'en', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-tight mb-6'>
          {t(`blog:post.${post.slug}.title`, post.slug)}
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed'>
          {t(`blog:post.${post.slug}.summary`, post.slug)}
        </p>
      </header>

      <div
        className='relative w-full aspect-video rounded-2xl overflow-hidden mb-8 md:mb-12 bg-zinc-200 dark:bg-zinc-800 animate-fade-in-up'
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
        className='prose prose-zinc dark:prose-invert prose-lg max-w-3xl animate-fade-in-up'
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
