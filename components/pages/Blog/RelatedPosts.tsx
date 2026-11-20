import { useTranslation } from 'next-i18next';
import BlogPosts, { BlogPostType } from '../../../data/BlogPosts';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
}

export function getRelatedPosts(currentSlug: string, currentCategory: string): BlogPostType[] {
  const sameCategory = BlogPosts.filter(
    (post) => post.category === currentCategory && post.slug !== currentSlug
  );

  if (sameCategory.length >= 4) {
    return sameCategory.slice(0, 4);
  }

  const remaining = BlogPosts.filter(
    (post) => post.slug !== currentSlug && post.category !== currentCategory
  );

  return [...sameCategory, ...remaining].slice(0, 4);
}

function RelatedPosts({ currentSlug, currentCategory }: RelatedPostsProps) {
  const { t } = useTranslation(['blog']);
  const related = getRelatedPosts(currentSlug, currentCategory);

  if (related.length === 0) return null;

  return (
    <section className='mt-16 pt-12 md:mt-24 md:pt-16 border-t border-zinc-200 dark:border-zinc-800'>
      <h2 className='text-3xl sm:text-4xl font-light mb-10'>{t('blog:relatedTitle')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {related.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
