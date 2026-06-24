import { StaticImageData } from 'next/image';
import cibWeb1 from '../public/images/Projects/cib-web/1.png';
import switchImg from '../public/images/Projects/switch/switch.png';
import cibApp1 from '../public/images/Projects/cib-app/1.png';
import alerzo1 from '../public/images/Projects/alerzo-admin-web/1.png';
import lexisKitchen1 from '../public/images/Projects/lexis-kitchen/1.png';
import a1Quest1 from '../public/images/Projects/a1quest/1.png';
import veedez1 from '../public/images/Projects/veedez-web-app/1.png';
import zeebly1 from '../public/images/Projects/zeebly-admin/1.png';
import tfhWeb1 from '../public/images/Projects/tfh-website/1.png';
import tfhMobile1 from '../public/images/Projects/tfh-mobile/1.png';
import koneqtorWeb1 from '../public/images/Projects/koneqtor-web/1.png';
import keylaWeb1 from '../public/images/Projects/keyla-website/1.png';

export interface FeaturedProject {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  screenshots: StaticImageData[];
  coreTools: string[];
}

const FeaturedProjectsData: FeaturedProject[] = [
  {
    slug: 'rova-cba-cib-client-frontend',
    title: 'Enterprise Corporate Internet Banking Platform',
    description: 'An enterprise-grade corporate internet banking platform developed for FCMB Group, enabling businesses to manage accounts, initiate payments, oversee beneficiaries, authorize transactions, and monitor financial activities through a secure digital banking environment.',
    image: cibWeb1,
    screenshots: [cibWeb1],
    coreTools: ['Next.js', 'React', 'Redux Toolkit', 'RSA and AES Encryption', 'Jest', 'recharts'],
  },
  {
    slug: 'switch3.0',
    title: 'Enterprise Cross-Border Fintech Mobile Platform for Multi-Currency Banking and Global Payments',
    description: 'Fintech application built for Sterling Bank that enables users to manage multi-currency accounts, perform local and international money transfers, pay bills, access investment and insurance services, and manage their finances from a single platform.',
    image: switchImg,
    screenshots: [switchImg],
    coreTools: ['React Native', 'Redux Saga', 'React Native Firebase', 'Geolocation', 'Async Storage', 'React Navigation', 'NetInfo', 'Slack Webhook'],
  },
  {
    slug: 'rova-cba-cib-ng-app-lite',
    title: 'Enterprise Corporate Digital Banking Mobile Platform',
    description: 'A secure React Native mobile banking application built for FCMB Group that enables corporate customers to manage business accounts, initiate and authorize transactions, oversee beneficiaries, and perform day-to-day banking operations from anywhere.',
    image: cibApp1,
    screenshots: [cibApp1],
    coreTools: ['React Native', 'Expo', 'Redux Toolkit', 'React Navigation', 'Async Storage', 'React Native DateTime Picker', 'Formik'],
  },
  {
    slug: 'alerzo-admin-web',
    title: 'Enterprise B2B Supply Chain and Commerce Management Platform',
    description: 'Web-based administrative platform built for Alerzo and designed to manage B2B commerce operations, merchant onboarding, order fulfillment, inventory monitoring, logistics coordination, and business performance reporting.',
    image: alerzo1,
    screenshots: [alerzo1],
    coreTools: ['React', 'Apollo Client', 'Material UI', 'Sentry', 'Mapbox Polyline'],
  },
  {
    slug: 'lexis-kitchen',
    title: 'Restaurant Reservations and Customer Engagement Platform',
    description: 'A customer-facing hospitality platform developed for Lexis Kitchen to showcase menu offerings, streamline reservation requests, and facilitate customer engagement through digital inquiry workflows.',
    image: lexisKitchen1,
    screenshots: [lexisKitchen1],
    coreTools: ['Next.js', 'Formik', 'Yup', 'Nodemailer', 'React Select', 'Axios', 'React', 'React DOM', 'Tailwind CSS', 'Postcss'],
  },
  {
    slug: 'a1quest-web',
    title: 'A1Quest Mathematics Learning and Student Success Platform',
    description: 'A comprehensive edtech platform designed to help secondary school students master mathematics through personalized learning experiences, interactive exercises, progress tracking, and curriculum-aligned educational content.',
    image: a1Quest1,
    screenshots: [a1Quest1],
    coreTools: ['React', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript', 'Next.js', 'Axios', 'Yup', 'react-hook-form', 'Firebase', 'Framer Motion'],
  },
  {
    slug: 'veedez-web-app',
    title: 'Veedez Merchant Operations and Business Management Platform',
    description: 'A comprehensive business operations platform designed for merchants to manage transactions, monitor business performance, process payments, and gain real-time operational insights.',
    image: veedez1,
    screenshots: [veedez1],
    coreTools: ['Redux Toolkit', 'Firebase', 'Flutterwave React V3', 'Framer Motion', 'Dayjs', 'React', 'React Redux'],
  },
  {
    slug: 'zeebly-admin',
    title: 'CAP Plc Partner Operations and Business Intelligence Platform',
    description: "A centralized enterprise platform developed for CAP Plc's ConnectUs ecosystem, providing partners and administrators with real-time operational visibility, order management capabilities, business analytics, and performance monitoring tools.",
    image: zeebly1,
    screenshots: [zeebly1],
    coreTools: ['Zod', 'Zustand', 'GraphQL', 'recharts', 'xlsx', 'Apollo Client', 'Material UI', 'React', 'Redux Toolkit'],
  },
  {
    slug: 'tfh-website',
    title: 'Church Digital Ministry and Community Engagement Platform',
    description: "A modern church website built for The Father's House Church with Next.js and Redux Toolkit to support digital ministry, community engagement, event communication, and outreach initiatives.",
    image: tfhWeb1,
    screenshots: [tfhWeb1],
    coreTools: ['Next.js', 'Redux Toolkit', 'React', 'Axios', 'Formik', 'Crypto JS', 'Auto Animate', 'Tailwind CSS', 'TypeScript'],
  },
  {
    slug: 'tfhmobile',
    title: 'Church Community and Digital Ministry Mobile Application',
    description: 'A React Native mobile application designed to strengthen church engagement by providing members and visitors with convenient access to church resources, ministry content, events, announcements, and community interactions.',
    image: tfhMobile1,
    screenshots: [tfhMobile1],
    coreTools: ['React Native', 'Redux Toolkit', 'React Navigation', 'Async Storage', 'Clipboard', 'Formik', 'Axios', 'Expo', 'TypeScript', 'React'],
  },
  {
    slug: 'koneqtor-frontend',
    title: 'Artisan Connection and Booking Application',
    description: 'A customer-facing web application developed for Koneqtor to streamline onboarding, service requests, account management, and customer support interactions.',
    image: koneqtorWeb1,
    screenshots: [koneqtorWeb1],
    coreTools: ['Next JS', 'Redux Toolkit', 'React', 'React Modal', 'Formik', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'keyla-site-Frontend',
    title: 'Keyla Digital Marketing and Customer Acquisition Platform',
    description: 'A modern digital marketing platform built for Keyla to showcase services, communicate brand value, and drive customer acquisition through engaging content and lead generation workflows.',
    image: keylaWeb1,
    screenshots: [keylaWeb1],
    coreTools: ['Gatsby', 'React', 'Animate.Css'],
  },
];

export default FeaturedProjectsData;
