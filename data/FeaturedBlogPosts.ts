import { BlogPostType } from './BlogPosts';
import BlogPosts from './BlogPosts';

const FeaturedBlogPostsData: BlogPostType[] = BlogPosts.filter((p) => p.featured);

export default FeaturedBlogPostsData;
