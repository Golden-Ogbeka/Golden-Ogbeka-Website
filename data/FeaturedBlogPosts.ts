import { StaticImageData } from 'next/image';
import TestimoniesWebClient1 from '../public/images/Projects/testimonies-web-client/1.png';
import A1Quest1 from '../public/images/Projects/a1quest/1.png';
import Zeebly1 from '../public/images/Projects/zeebly-admin/1.png';

export interface FeaturedBlogPost {
  slug: string;
  category: string;
  image: StaticImageData;
  date: string;
}

const FeaturedBlogPostsData: FeaturedBlogPost[] = [
  {
    slug: 'nextjs-static-generation',
    category: 'tech',
    image: TestimoniesWebClient1,
    date: '2026-07-20',
  },
  {
    slug: 'building-ai-agents',
    category: 'ai',
    image: A1Quest1,
    date: '2026-07-24',
  },
  {
    slug: 'clean-code-habits',
    category: 'tips',
    image: Zeebly1,
    date: '2026-07-28',
  },
];

export default FeaturedBlogPostsData;
