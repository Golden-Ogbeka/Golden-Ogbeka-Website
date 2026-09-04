import { StaticImageData } from 'next/image';

import africaHero from '../public/images/Blog/africa-needs-more-creators/hero.svg';
import doDifficultHero from '../public/images/Blog/do-the-difficult-things/hero.svg';
import becomePartOfSolutionHero from '../public/images/Blog/become-part-of-the-solution/hero.svg';
import canadaHero from '../public/images/Blog/more-countries-need-to-be-like-canada/hero.svg';
import mythBusinessHero from '../public/images/Blog/the-myth-about-ai-for-businesses/hero.svg';
import mythIndividualHero from '../public/images/Blog/the-myth-about-ai-for-individuals/hero.svg';
import mythNonAiHero from '../public/images/Blog/the-myth-about-ai-for-non-ai-users/hero.svg';

import handItOverHero from '../public/images/Blog/hand-it-over/hero.svg';
import rightFuseHero from '../public/images/Blog/are-you-using-the-right-fuse/hero.svg';
import areWeStillHereHero from '../public/images/Blog/are-we-still-here/hero.svg';
import thanksgivingHero from '../public/images/Blog/what-is-in-thanksgiving/hero.svg';
import heCalledYouFriendHero from '../public/images/Blog/he-called-you-friend/hero.svg';
import christsCommandmentHero from '../public/images/Blog/what-exactly-was-christs-commandment/hero.svg';
import notJustAboutYouHero from '../public/images/Blog/it-is-not-just-about-you/hero.svg';
import nowAChristianHero from '../public/images/Blog/now-a-christian-what-next/hero.svg';
import whyWereYouSavedHero from '../public/images/Blog/why-were-you-saved/hero.svg';
import manifestationHero from '../public/images/Blog/what-do-you-do-before-your-manifestation/hero.svg';
import itsACommandmentHero from '../public/images/Blog/its-a-commandment/hero.svg';
import purposeSpiritualityHero from '../public/images/Blog/purpose-and-spirituality/hero.svg';
import itPaysToServeGodHero from '../public/images/Blog/it-pays-to-serve-god/hero.svg';
import yourFirstLoveHero from '../public/images/Blog/your-first-love/hero.svg';
import justAReminderHero from '../public/images/Blog/just-a-reminder/hero.svg';
import yourRoleHero from '../public/images/Blog/your-role-to-play-as-a-christian/hero.svg';
import treeOfLifeHero from '../public/images/Blog/the-tree-of-life/hero.svg';
import itsASummaryHero from '../public/images/Blog/its-a-summary/hero.svg';
import lackOfDirectionHero from '../public/images/Blog/a-lack-of-direction/hero.svg';
import messageForYouHero from '../public/images/Blog/a-message-for-you/hero.svg';
import realLoveHero from '../public/images/Blog/what-real-love-is-like/hero.svg';
import whereDoYouStandHero from '../public/images/Blog/where-do-you-stand/hero.svg';
import theForceOfFreedomHero from '../public/images/Blog/the-force-of-freedom/hero.svg';
import beautyInChaosHero from '../public/images/Blog/the-beauty-in-chaos/hero.webp';
import theAiShockHero from '../public/images/Blog/the-ai-shock/hero.webp';

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
  {
    slug: 'become-part-of-the-solution',
    category: 'tips',
    image: becomePartOfSolutionHero,
    ogImagePath: '/images/Blog/become-part-of-the-solution/hero.svg',
    date: '2026-08-07',
  },
  {
    slug: 'the-force-of-freedom',
    category: 'tips',
    image: theForceOfFreedomHero,
    ogImagePath: '/images/Blog/the-force-of-freedom/hero.svg',
    date: '2026-08-25',
    featured: true,
  },
  {
    slug: 'the-beauty-in-chaos',
    category: 'tips',
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
    slug: 'hand-it-over',
    category: 'faith',
    image: handItOverHero,
    ogImagePath: '/images/Blog/hand-it-over/hero.svg',
    date: '2017-06-29',
  },
  {
    slug: 'are-you-using-the-right-fuse',
    category: 'faith',
    image: rightFuseHero,
    ogImagePath: '/images/Blog/are-you-using-the-right-fuse/hero.svg',
    date: '2017-02-04',
  },
  {
    slug: 'are-we-still-here',
    category: 'faith',
    image: areWeStillHereHero,
    ogImagePath: '/images/Blog/are-we-still-here/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'what-is-in-thanksgiving',
    category: 'faith',
    image: thanksgivingHero,
    ogImagePath: '/images/Blog/what-is-in-thanksgiving/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'he-called-you-friend',
    category: 'faith',
    image: heCalledYouFriendHero,
    ogImagePath: '/images/Blog/he-called-you-friend/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'what-exactly-was-christs-commandment',
    category: 'faith',
    image: christsCommandmentHero,
    ogImagePath: '/images/Blog/what-exactly-was-christs-commandment/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'it-is-not-just-about-you',
    category: 'faith',
    image: notJustAboutYouHero,
    ogImagePath: '/images/Blog/it-is-not-just-about-you/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'now-a-christian-what-next',
    category: 'faith',
    image: nowAChristianHero,
    ogImagePath: '/images/Blog/now-a-christian-what-next/hero.svg',
    date: '2016-04-30',
  },
  {
    slug: 'why-were-you-saved',
    category: 'faith',
    image: whyWereYouSavedHero,
    ogImagePath: '/images/Blog/why-were-you-saved/hero.svg',
    date: '2016-01-18',
  },
  {
    slug: 'what-do-you-do-before-your-manifestation',
    category: 'faith',
    image: manifestationHero,
    ogImagePath: '/images/Blog/what-do-you-do-before-your-manifestation/hero.svg',
    date: '2016-01-18',
  },
  {
    slug: 'its-a-commandment',
    category: 'faith',
    image: itsACommandmentHero,
    ogImagePath: '/images/Blog/its-a-commandment/hero.svg',
    date: '2015-11-09',
  },
  {
    slug: 'purpose-and-spirituality',
    category: 'faith',
    image: purposeSpiritualityHero,
    ogImagePath: '/images/Blog/purpose-and-spirituality/hero.svg',
    date: '2015-11-09',
  },
  {
    slug: 'it-pays-to-serve-god',
    category: 'faith',
    image: itPaysToServeGodHero,
    ogImagePath: '/images/Blog/it-pays-to-serve-god/hero.svg',
    date: '2015-10-18',
  },
  {
    slug: 'your-first-love',
    category: 'faith',
    image: yourFirstLoveHero,
    ogImagePath: '/images/Blog/your-first-love/hero.svg',
    date: '2015-08-08',
  },
  {
    slug: 'just-a-reminder',
    category: 'faith',
    image: justAReminderHero,
    ogImagePath: '/images/Blog/just-a-reminder/hero.svg',
    date: '2015-05-01',
  },
  {
    slug: 'your-role-to-play-as-a-christian',
    category: 'faith',
    image: yourRoleHero,
    ogImagePath: '/images/Blog/your-role-to-play-as-a-christian/hero.svg',
    date: '2015-04-23',
  },
  {
    slug: 'the-tree-of-life',
    category: 'faith',
    image: treeOfLifeHero,
    ogImagePath: '/images/Blog/the-tree-of-life/hero.svg',
    date: '2015-04-01',
  },
  {
    slug: 'its-a-summary',
    category: 'faith',
    image: itsASummaryHero,
    ogImagePath: '/images/Blog/its-a-summary/hero.svg',
    date: '2015-03-27',
  },
  {
    slug: 'a-lack-of-direction',
    category: 'faith',
    image: lackOfDirectionHero,
    ogImagePath: '/images/Blog/a-lack-of-direction/hero.svg',
    date: '2015-02-27',
  },
  {
    slug: 'a-message-for-you',
    category: 'faith',
    image: messageForYouHero,
    ogImagePath: '/images/Blog/a-message-for-you/hero.svg',
    date: '2015-02-20',
  },
  {
    slug: 'what-real-love-is-like',
    category: 'faith',
    image: realLoveHero,
    ogImagePath: '/images/Blog/what-real-love-is-like/hero.svg',
    date: '2015-02-20',
  },
  {
    slug: 'where-do-you-stand',
    category: 'faith',
    image: whereDoYouStandHero,
    ogImagePath: '/images/Blog/where-do-you-stand/hero.svg',
    date: '2015-02-20',
  },
];

export default BlogPosts;
