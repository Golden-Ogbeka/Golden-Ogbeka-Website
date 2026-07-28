import BlogPosts, { BlogPostType } from '../../../data/BlogPosts';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
}

function getRelatedPosts(currentSlug: string, currentCategory: string): BlogPostType[] {
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
  const related = getRelatedPosts(currentSlug, currentCategory);

  if (related.length === 0) return null;

  return (
    <section className='mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800'>
      <h2 className='text-2xl md:text-3xl font-display font-semibold mb-8 animate-fade-in-up'>
        Related articles
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {related.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
