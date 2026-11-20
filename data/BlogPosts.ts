import { StaticImageData } from 'next/image';

import africaHero from '../public/images/Blog/africa-needs-more-creators/hero.svg';
import doDifficultHero from '../public/images/Blog/do-the-difficult-things/hero.svg';
import becomePartOfSolutionHero from '../public/images/Blog/become-part-of-the-solution/hero.svg';
import canadaHero from '../public/images/Blog/more-countries-need-to-be-like-canada/hero.svg';
import mythBusinessHero from '../public/images/Blog/the-myth-about-ai-for-businesses/hero.svg';
import mythIndividualHero from '../public/images/Blog/the-myth-about-ai-for-individuals/hero.svg';
import mythNonAiHero from '../public/images/Blog/the-myth-about-ai-for-non-ai-users/hero.svg';

import handItOverHero from '../public/images/Blog/hand-it-over/hero.webp';
import rightFuseHero from '../public/images/Blog/are-you-using-the-right-fuse/hero.webp';
import areWeStillHereHero from '../public/images/Blog/are-we-still-here/hero.webp';
import thanksgivingHero from '../public/images/Blog/what-is-in-thanksgiving/hero.webp';
import heCalledYouFriendHero from '../public/images/Blog/he-called-you-friend/hero.webp';
import christsCommandmentHero from '../public/images/Blog/what-exactly-was-christs-commandment/hero.webp';
import notJustAboutYouHero from '../public/images/Blog/it-is-not-just-about-you/hero.webp';
import nowAChristianHero from '../public/images/Blog/now-a-christian-what-next/hero.webp';
import whyWereYouSavedHero from '../public/images/Blog/why-were-you-saved/hero.webp';
import manifestationHero from '../public/images/Blog/what-do-you-do-before-your-manifestation/hero.webp';
import itsACommandmentHero from '../public/images/Blog/its-a-commandment/hero.webp';
import purposeSpiritualityHero from '../public/images/Blog/purpose-and-spirituality/hero.webp';
import itPaysToServeGodHero from '../public/images/Blog/it-pays-to-serve-god/hero.webp';
import yourFirstLoveHero from '../public/images/Blog/your-first-love/hero.webp';
import justAReminderHero from '../public/images/Blog/just-a-reminder/hero.webp';
import yourRoleHero from '../public/images/Blog/your-role-to-play-as-a-christian/hero.webp';
import treeOfLifeHero from '../public/images/Blog/the-tree-of-life/hero.webp';
import itsASummaryHero from '../public/images/Blog/its-a-summary/hero.webp';
import lackOfDirectionHero from '../public/images/Blog/a-lack-of-direction/hero.webp';
import messageForYouHero from '../public/images/Blog/a-message-for-you/hero.webp';
import realLoveHero from '../public/images/Blog/what-real-love-is-like/hero.webp';
import whereDoYouStandHero from '../public/images/Blog/where-do-you-stand/hero.webp';
import theForceOfFreedomHero from '../public/images/Blog/the-force-of-freedom/hero.svg';
import beautyInChaosHero from '../public/images/Blog/the-beauty-in-chaos/hero.webp';
import theAiShockHero from '../public/images/Blog/the-ai-shock/hero.webp';
import superTalentedHero from '../public/images/Blog/super-talented/hero.webp';
import godIsNotATeletubbyHero from '../public/images/Blog/god-is-not-a-teletubby/hero.webp';
import productOfImaginationHero from '../public/images/Blog/you-are-a-product-of-your-imagination/hero.webp';
import greatestPrivilegeHero from '../public/images/Blog/the-greatest-privilege-given-to-man/hero.webp';

export type BlogCategory = 'ai' | 'society' | 'growth' | 'family' | 'faith' | 'discipleship' | 'love';

/** Display order for category filters. Labels live in the blog namespace: blog:category.{id}. */
export const BLOG_CATEGORIES: BlogCategory[] = ['ai', 'society', 'growth', 'family', 'faith', 'discipleship', 'love'];

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
    slug: 'the-greatest-privilege-given-to-man',
    category: 'family',
    image: greatestPrivilegeHero,
    ogImagePath: '/images/Blog/the-greatest-privilege-given-to-man/hero.webp',
    date: '2026-11-19',
    featured: true,
  },
  {
    slug: 'you-are-a-product-of-your-imagination',
    category: 'growth',
    image: productOfImaginationHero,
    ogImagePath: '/images/Blog/you-are-a-product-of-your-imagination/hero.webp',
    date: '2026-10-13',
    featured: true,
  },
  {
    slug: 'god-is-not-a-teletubby',
    category: 'faith',
    image: godIsNotATeletubbyHero,
    ogImagePath: '/images/Blog/god-is-not-a-teletubby/hero.webp',
    date: '2026-10-13',
    featured: true,
  },
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
    category: 'society',
    image: africaHero,
    ogImagePath: '/images/Blog/africa-needs-more-creators/hero.svg',
    date: '2026-07-06',
    featured: true,
  },
  {
    slug: 'more-countries-need-to-be-like-canada',
    category: 'society',
    image: canadaHero,
    ogImagePath: '/images/Blog/more-countries-need-to-be-like-canada/hero.svg',
    date: '2026-07-22',
  },
  {
    slug: 'do-the-difficult-things',
    category: 'growth',
    image: doDifficultHero,
    ogImagePath: '/images/Blog/do-the-difficult-things/hero.svg',
    date: '2026-07-23',
    featured: true,
  },
  {
    slug: 'become-part-of-the-solution',
    category: 'growth',
    image: becomePartOfSolutionHero,
    ogImagePath: '/images/Blog/become-part-of-the-solution/hero.svg',
    date: '2026-08-07',
  },
  {
    slug: 'the-force-of-freedom',
    category: 'growth',
    image: theForceOfFreedomHero,
    ogImagePath: '/images/Blog/the-force-of-freedom/hero.svg',
    date: '2026-08-25',
    featured: true,
  },
  {
    slug: 'the-beauty-in-chaos',
    category: 'society',
    image: beautyInChaosHero,
    ogImagePath: '/images/Blog/the-beauty-in-chaos/hero.webp',
    date: '2026-09-02',
    featured: true,
  },
  {
    slug: 'the-ai-shock',
    category: 'ai',
    image: theAiShockHero,
    ogImagePath: '/images/Blog/the-ai-shock/hero.webp',
    date: '2026-09-04',
  },
  {
    slug: 'super-talented',
    category: 'growth',
    image: superTalentedHero,
    ogImagePath: '/images/Blog/super-talented/hero.webp',
    date: '2026-09-22',
    featured: true,
  },
  {
    slug: 'hand-it-over',
    category: 'faith',
    image: handItOverHero,
    ogImagePath: '/images/Blog/hand-it-over/hero.webp',
    date: '2017-06-29',
  },
  {
    slug: 'are-you-using-the-right-fuse',
    category: 'love',
    image: rightFuseHero,
    ogImagePath: '/images/Blog/are-you-using-the-right-fuse/hero.webp',
    date: '2017-02-04',
  },
  {
    slug: 'are-we-still-here',
    category: 'discipleship',
    image: areWeStillHereHero,
    ogImagePath: '/images/Blog/are-we-still-here/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'what-is-in-thanksgiving',
    category: 'faith',
    image: thanksgivingHero,
    ogImagePath: '/images/Blog/what-is-in-thanksgiving/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'he-called-you-friend',
    category: 'faith',
    image: heCalledYouFriendHero,
    ogImagePath: '/images/Blog/he-called-you-friend/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'what-exactly-was-christs-commandment',
    category: 'love',
    image: christsCommandmentHero,
    ogImagePath: '/images/Blog/what-exactly-was-christs-commandment/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'it-is-not-just-about-you',
    category: 'discipleship',
    image: notJustAboutYouHero,
    ogImagePath: '/images/Blog/it-is-not-just-about-you/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'now-a-christian-what-next',
    category: 'discipleship',
    image: nowAChristianHero,
    ogImagePath: '/images/Blog/now-a-christian-what-next/hero.webp',
    date: '2016-04-30',
  },
  {
    slug: 'why-were-you-saved',
    category: 'discipleship',
    image: whyWereYouSavedHero,
    ogImagePath: '/images/Blog/why-were-you-saved/hero.webp',
    date: '2016-01-18',
  },
  {
    slug: 'what-do-you-do-before-your-manifestation',
    category: 'discipleship',
    image: manifestationHero,
    ogImagePath: '/images/Blog/what-do-you-do-before-your-manifestation/hero.webp',
    date: '2016-01-18',
  },
  {
    slug: 'its-a-commandment',
    category: 'discipleship',
    image: itsACommandmentHero,
    ogImagePath: '/images/Blog/its-a-commandment/hero.webp',
    date: '2015-11-09',
  },
  {
    slug: 'purpose-and-spirituality',
    category: 'discipleship',
    image: purposeSpiritualityHero,
    ogImagePath: '/images/Blog/purpose-and-spirituality/hero.webp',
    date: '2015-11-09',
  },
  {
    slug: 'it-pays-to-serve-god',
    category: 'discipleship',
    image: itPaysToServeGodHero,
    ogImagePath: '/images/Blog/it-pays-to-serve-god/hero.webp',
    date: '2015-10-18',
  },
  {
    slug: 'your-first-love',
    category: 'discipleship',
    image: yourFirstLoveHero,
    ogImagePath: '/images/Blog/your-first-love/hero.webp',
    date: '2015-08-08',
  },
  {
    slug: 'just-a-reminder',
    category: 'faith',
    image: justAReminderHero,
    ogImagePath: '/images/Blog/just-a-reminder/hero.webp',
    date: '2015-05-01',
  },
  {
    slug: 'your-role-to-play-as-a-christian',
    category: 'discipleship',
    image: yourRoleHero,
    ogImagePath: '/images/Blog/your-role-to-play-as-a-christian/hero.webp',
    date: '2015-04-23',
  },
  {
    slug: 'the-tree-of-life',
    category: 'faith',
    image: treeOfLifeHero,
    ogImagePath: '/images/Blog/the-tree-of-life/hero.webp',
    date: '2015-04-01',
  },
  {
    slug: 'its-a-summary',
    category: 'love',
    image: itsASummaryHero,
    ogImagePath: '/images/Blog/its-a-summary/hero.webp',
    date: '2015-03-27',
  },
  {
    slug: 'a-lack-of-direction',
    category: 'faith',
    image: lackOfDirectionHero,
    ogImagePath: '/images/Blog/a-lack-of-direction/hero.webp',
    date: '2015-02-27',
  },
  {
    slug: 'a-message-for-you',
    category: 'faith',
    image: messageForYouHero,
    ogImagePath: '/images/Blog/a-message-for-you/hero.webp',
    date: '2015-02-20',
  },
  {
    slug: 'what-real-love-is-like',
    category: 'love',
    image: realLoveHero,
    ogImagePath: '/images/Blog/what-real-love-is-like/hero.webp',
    date: '2015-02-20',
  },
  {
    slug: 'where-do-you-stand',
    category: 'faith',
    image: whereDoYouStandHero,
    ogImagePath: '/images/Blog/where-do-you-stand/hero.webp',
    date: '2015-02-20',
  },
];

export default BlogPosts;
