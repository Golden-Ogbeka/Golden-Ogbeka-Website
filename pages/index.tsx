import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import HeadElement from '../components/layout/HeadElement';
import Intro from '../components/pages/Home/Intro';
import CareerSignal from '../components/pages/Home/CareerSignal';
import StatementOfValue from '../components/pages/Home/StatementOfValue';
import ValuePillars from '../components/pages/Home/ValuePillars';
import FeaturedProjects from '../components/pages/Home/FeaturedProjects';
import ExperienceSection from '../components/pages/Home/ExperienceSection';
import OpenSourceSection from '../components/pages/Home/OpenSourceSection';
import CertificationsSection from '../components/pages/Home/CertificationsSection';
import FeaturedBlogPosts from '../components/pages/Home/FeaturedBlogPosts';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', reveal, { passive: true });
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <AppLayout>
      <HeadElement pageTitle='Golden Ogbeka | Senior Software Engineer · IT Governance & Technology Leadership' />
      <Intro />
      <CareerSignal />
      <StatementOfValue />
      <ValuePillars />
      <FeaturedProjects />
      <ExperienceSection />
      <OpenSourceSection />
      <CertificationsSection />
      <FeaturedBlogPosts />
    </AppLayout>
  );
};

export default Home;

import FeaturedProjectsData from '../data/FeaturedProjects';
import FeaturedBlogPostsData from '../data/FeaturedBlogPosts';
import OpenSourceData, { rankByUsefulness } from '../data/OpenSource';
import ExperiencesData from '../data/Experiences';
import CertificationsData from '../data/Certifications';

function slugifyRole(role: string): string {
  return role.toLowerCase()
    .replace(/[()&]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function slugifyCompany(company: string): string {
  return company.toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/-$/g, '');
}

function trimNs<T extends Record<string, unknown>>(ns: T, keep: Set<string>): T {
  for (const key of Object.keys(ns)) {
    if (!keep.has(key)) {
      delete ns[key];
    }
  }
  return ns;
}

const ALL_NS = ['blog', 'certifications', 'common', 'experiences', 'home', 'openSource', 'projects'] as const;
type NsName = typeof ALL_NS[number];

function loadNamespace(locale: string, ns: NsName): Record<string, unknown> {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.resolve(process.cwd(), `public/locales/${locale}/${ns}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function getStaticProps({ locale }: { locale: string }) {
  const initialI18nStore: Record<string, Record<string, unknown>> = {};

  initialI18nStore[locale] = {
    common: loadNamespace(locale, 'common'),
    home: loadNamespace(locale, 'home'),
  };

  // --- cherry-pick translations ---

  // Featured project slugs
  const featuredSlugs = new Set(
    FeaturedProjectsData.map((p) => p.slug)
  );
  const projects = loadNamespace(locale, 'projects');
  const projectKeysToKeep = new Set<string>(['title', 'subtitle']);
  for (const key of Object.keys(projects)) {
    if (!key.startsWith('project.')) continue;
    const slug = key.substring(key.indexOf('.') + 1, key.lastIndexOf('.'));
    if (slug && featuredSlugs.has(slug)) {
      projectKeysToKeep.add(key);
    }
  }
  initialI18nStore[locale].projects = trimNs(projects, projectKeysToKeep);

  // Top 8 open source repos — must match OpenSourceSection's ranking
  const topRepos = rankByUsefulness(OpenSourceData).slice(0, 8);
  const topRepoIds = new Set(topRepos.map(r => r.id));
  const openSource = loadNamespace(locale, 'openSource');
  const openSourceKeysToKeep = new Set<string>();
  for (const key of Object.keys(openSource)) {
    if (!key.includes('.')) {
      openSourceKeysToKeep.add(key);
    } else {
      const repoId = key.substring(0, key.lastIndexOf('.'));
      if (topRepoIds.has(repoId)) {
        openSourceKeysToKeep.add(key);
      }
    }
  }
  initialI18nStore[locale].openSource = trimNs(openSource, openSourceKeysToKeep);

  // Top 5 experiences
  const topExperiences = ExperiencesData.slice(0, 5);
  const expKeysToKeep = new Set<string>();
  for (const exp of topExperiences) {
    const prefix = `experience.${slugifyRole(exp.role)}-${slugifyCompany(exp.company)}`;
    expKeysToKeep.add(`${prefix}.role`);
    expKeysToKeep.add(`${prefix}.company`);
    expKeysToKeep.add(`${prefix}.tasks.0`);
    expKeysToKeep.add(`${prefix}.tasks.1`);
    expKeysToKeep.add(`${prefix}.tasks.2`);
  }
  const experiences = loadNamespace(locale, 'experiences');
  const experiencesKeysToKeep = new Set(Object.keys(experiences).filter(k => !k.startsWith('experience.')));
  for (const key of Object.keys(experiences)) {
    expKeysToKeep.has(key) && experiencesKeysToKeep.add(key);
  }
  initialI18nStore[locale].experiences = trimNs(experiences, experiencesKeysToKeep);

  // Featured certifications/education
  const featuredIndices = new Set(
    CertificationsData.reduce<number[]>((acc, cert, i) => {
      if (cert.featured) acc.push(i);
      return acc;
    }, [])
  );
  const certifications = loadNamespace(locale, 'certifications');
  const certKeysToKeep = new Set<string>();
  for (const key of Object.keys(certifications)) {
    const match = key.match(/^(certification|education)\.(\d+)/);
    if (match) {
      const type = match[1] as 'certification' | 'education';
      const index = parseInt(match[2], 10);
      if (type === 'certification' && !featuredIndices.has(index)) continue;
    }
    certKeysToKeep.add(key);
  }
  initialI18nStore[locale].certifications = trimNs(certifications, certKeysToKeep);

  // Featured blog posts
  const featuredBlogSlugs = new Set(FeaturedBlogPostsData.map((p) => p.slug));
  const blog = loadNamespace(locale, 'blog');
  // Posts are nested under `post`: keep only featured posts, and only the title and summary the homepage shows.
  const allPosts = (blog.post || {}) as Record<string, { title?: string; summary?: string }>;
  const featuredPosts: Record<string, { title?: string; summary?: string }> = {};
  for (const slug of Object.keys(allPosts)) {
    if (featuredBlogSlugs.has(slug)) {
      featuredPosts[slug] = { title: allPosts[slug].title, summary: allPosts[slug].summary };
    }
  }
  initialI18nStore[locale].blog = { ...blog, post: featuredPosts };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: [...ALL_NS],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
