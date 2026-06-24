import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import HeadElement from '../components/layout/HeadElement';
import SectionDivider from '../components/layout/SectionDivider';
import CertificationsSection from '../components/pages/Home/CertificationsSection';
import ExperienceSection from '../components/pages/Home/ExperienceSection';
import FeaturedProjects from '../components/pages/Home/FeaturedProjects';
import Intro from '../components/pages/Home/Intro';
import OpenSourceSection from '../components/pages/Home/OpenSourceSection';
import { reveal } from '../functions/animation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


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
};;

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'projects', 'experiences', 'openSource', 'certifications'])),
    },
  };
}
