import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import HeadElement from '../components/layout/HeadElement';
import SectionDivider from '../components/layout/SectionDivider';
import Intro from '../components/pages/Home/Intro';

const FeaturedProjects = dynamic(() => import('../components/pages/Home/FeaturedProjects'), { ssr: false });
import { reveal } from '../functions/animation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OpenSourceSection = dynamic(() => import('../components/pages/Home/OpenSourceSection'), { ssr: false });
const ExperienceSection = dynamic(() => import('../components/pages/Home/ExperienceSection'), { ssr: false });
const CertificationsSection = dynamic(() => import('../components/pages/Home/CertificationsSection'), { ssr: false });

const Home: NextPage = () => {
  // For scroll animation
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', reveal);
      // Trigger once on load
      reveal();
    }
  }, []);
  return (
    <AppLayout>
      <HeadElement pageTitle='Golden Ogbeka | Senior Software Engineer' />
      <Intro />
      <FeaturedProjects />
      <SectionDivider />
      <OpenSourceSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <CertificationsSection />
    </AppLayout>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
