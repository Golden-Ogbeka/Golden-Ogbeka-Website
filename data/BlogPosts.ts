import { StaticImageData } from 'next/image';
import TestimoniesWebClient1 from '../public/images/Projects/testimonies-web-client/1.png';
import A1Quest1 from '../public/images/Projects/a1quest/1.png';
import Zeebly1 from '../public/images/Projects/zeebly-admin/1.png';

export type BlogCategory = 'tech' | 'ai' | 'tips';

export interface BlogPostType {
  slug: string;
  category: BlogCategory;
  image: StaticImageData;
  ogImagePath: string;
  date: string;
  featured?: boolean;
}

const BlogPosts: BlogPostType[] = [
  {
    slug: 'nextjs-static-generation',
    category: 'tech',
    image: TestimoniesWebClient1,
    ogImagePath: '/images/Projects/testimonies-web-client/1.png',
    date: '2026-07-20',
    featured: true,
  },
  {
    slug: 'building-ai-agents',
    category: 'ai',
    image: A1Quest1,
    ogImagePath: '/images/Projects/a1quest/1.png',
    date: '2026-07-24',
    featured: true,
  },
  {
    slug: 'clean-code-habits',
    category: 'tips',
    image: Zeebly1,
    ogImagePath: '/images/Projects/zeebly-admin/1.png',
    date: '2026-07-28',
  },
];

export default BlogPosts;
