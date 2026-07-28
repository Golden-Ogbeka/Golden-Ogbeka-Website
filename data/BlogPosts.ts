import { StaticImageData } from 'next/image';

import africaHero from '../public/images/Blog/africa-needs-more-creators/hero.svg';
import doDifficultHero from '../public/images/Blog/do-the-difficult-things/hero.svg';
import canadaHero from '../public/images/Blog/more-countries-need-to-be-like-canada/hero.svg';
import mythBusinessHero from '../public/images/Blog/the-myth-about-ai-for-businesses/hero.svg';
import mythIndividualHero from '../public/images/Blog/the-myth-about-ai-for-individuals/hero.svg';
import mythNonAiHero from '../public/images/Blog/the-myth-about-ai-for-non-ai-users/hero.svg';

export type BlogCategory = 'tech' | 'ai' | 'tips' | 'faith';

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
    slug: 'the-myth-about-ai-for-businesses',
    category: 'ai',
    image: mythBusinessHero,
    ogImagePath: '/images/Blog/the-myth-about-ai-for-businesses/hero.svg',
    date: '2026-05-28',
    featured: true,
  },
  {
    slug: 'the-myth-about-ai-for-individuals',
    category: 'ai',
    image: mythIndividualHero,
    ogImagePath: '/images/Blog/the-myth-about-ai-for-individuals/hero.svg',
    date: '2026-06-01',
  },
  {
    slug: 'the-myth-about-ai-for-non-ai-users',
    category: 'ai',
    image: mythNonAiHero,
    ogImagePath: '/images/Blog/the-myth-about-ai-for-non-ai-users/hero.svg',
    date: '2026-06-08',
  },
  {
    slug: 'africa-needs-more-creators',
    category: 'tips',
    image: africaHero,
    ogImagePath: '/images/Blog/africa-needs-more-creators/hero.svg',
    date: '2026-07-06',
    featured: true,
  },
  {
    slug: 'more-countries-need-to-be-like-canada',
    category: 'ai',
    image: canadaHero,
    ogImagePath: '/images/Blog/more-countries-need-to-be-like-canada/hero.svg',
    date: '2026-07-22',
  },
  {
    slug: 'do-the-difficult-things',
    category: 'tips',
    image: doDifficultHero,
    ogImagePath: '/images/Blog/do-the-difficult-things/hero.svg',
    date: '2026-07-23',
    featured: true,
  },
];

export default BlogPosts;
