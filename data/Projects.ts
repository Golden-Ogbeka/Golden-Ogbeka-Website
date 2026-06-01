import { StaticImageData } from 'next/image';
import A1Quest from '../public/images/Projects/a1quest.png';
import Boldo from '../public/images/Projects/boldo.png';
import CAPAdmin from '../public/images/Projects/cap-admin.png';
import ClickNSchedule1 from '../public/images/Projects/clicknschedule/1.png';
import ClickNSchedule2 from '../public/images/Projects/clicknschedule/2.png';
import ClickNSchedule3 from '../public/images/Projects/clicknschedule/3.png';
import ClickNSchedule4 from '../public/images/Projects/clicknschedule/4.png';
import ClickNSchedule5 from '../public/images/Projects/clicknschedule/5.png';
import EBike from '../public/images/Projects/e-bike.png';
import FindIt from '../public/images/Projects/find-it.png';
import FRSC1 from '../public/images/Projects/frsc-website/1.png';
import FRSC2 from '../public/images/Projects/frsc-website/2.png';
import FRSC3 from '../public/images/Projects/frsc-website/3.png';
import FRSC4 from '../public/images/Projects/frsc-website/4.png';
import GlowStopper from '../public/images/Projects/glowstopper.png';
import LandshopAdmin from '../public/images/Projects/landshop-admin.png';
import LexisKitchen1 from '../public/images/Projects/lexis-kitchen/1.png';
import LexisKitchen2 from '../public/images/Projects/lexis-kitchen/2.png';
import LexisKitchen3 from '../public/images/Projects/lexis-kitchen/3.png';
import LexisKitchen4 from '../public/images/Projects/lexis-kitchen/4.png';
import LexisKitchen5 from '../public/images/Projects/lexis-kitchen/5.png';
import Library from '../public/images/Projects/library.png';
import Ocpus from '../public/images/Projects/ocpus.png';
import ProductCatalog from '../public/images/Projects/product-catalog.png';
import Switch from '../public/images/Projects/switch.png';
import TCU from '../public/images/Projects/tcu.png';
import TFHAdmin from '../public/images/Projects/tfh-admin.png';
import TFHWebsite from '../public/images/Projects/tfh-website.png';
import Todo from '../public/images/Projects/todo.png';
import Truevoix1 from '../public/images/Projects/truevoix-web/1.png';
import Truevoix2 from '../public/images/Projects/truevoix-web/2.png';
import Truevoix3 from '../public/images/Projects/truevoix-web/3.png';
import Truevoix4 from '../public/images/Projects/truevoix-web/4.png';
import Truevoix5 from '../public/images/Projects/truevoix-web/5.png';
import Veedez from '../public/images/Projects/veedez.png';

import CIBWeb1 from '../public/images/Projects/cib-web/1.png';
import CIBWeb2 from '../public/images/Projects/cib-web/2.png';
import CIBWeb3 from '../public/images/Projects/cib-web/3.png';
import CIBWeb4 from '../public/images/Projects/cib-web/4.png';
import CIBWeb5 from '../public/images/Projects/cib-web/5.png';

export interface ProjectType {
  title: string;
  slug: string;
  description: string;
  features: string[];
  coreTools: string[];
  codeLink?: string;
  liveLink?: string;
  designLink?: string;
  apiLink?: string;
  image: StaticImageData | string;
  screenshots: StaticImageData[];
  videoDemoLink?: string;
  featured?: boolean;
}

const placeholderImage = '/images/placeholder.jpg';

const Projects: ProjectType[] = [
  {
    title: 'Corporate Internet Banking Platform',
    slug: 'rova-cba-cib-client-frontend',
    description:
      'Corporate Internet Banking platform designed to improve enterprise customer experience, operational reliability, and secure financial workflows across Nigeria and the UK. Built for FCMB Group.',
    features: [
      'Advanced Role-Based Access Control (RBAC) & Team Management',
      'Multi-factor Authentication & Secure Login flows',
      'Bulk and Single Payments (Transfers, Airtime, Cable TV, Electricity)',
      'Account Management and Beneficiary Management',
      'Comprehensive Transaction History & Dashboard Reporting',
      'Clickjacking Protection & OWASP Security Standards compliance',
    ],
    coreTools: [
      'React JS',
      'Redux',
      'Redux Toolkit',
      'Next JS',
      'Jest',
      'Recharts',
      'Tailwind CSS',
    ],
    image: CIBWeb1,
    screenshots: [CIBWeb1, CIBWeb2, CIBWeb3, CIBWeb4, CIBWeb5],
    featured: true,
    videoDemoLink: 'https://www.youtube.com/watch?v=k3Y9ZXfJ9GU',
  },
  {
    title: 'Alerzo Admin Web (Saas Platform)',
    slug: 'alerzo-admin-web',
    description:
      'Admin dashboard web application. For Alerzo, a leading B2B e-commerce platform. Key features: Logistics, Customer and Order Management. Built with Apollo GraphQL, Apollo Client, Material UI, Firebase, React JS.',
    features: [
      'Firebase Integration',
      'GraphQL API Integration',
      'Data Visualization & Analytics Dashboard',
      'Admin Management System',
    ],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'Material UI',
      'Firebase',
      'React JS',
      'GraphQL',
      'Recharts',
      'Jest',
    ],
    image: placeholderImage,
    screenshots: [],
    featured: true,
  },

  {
    title: 'Veedez Website',
    slug: 'veedezwebsite',
    description:
      'Branded website for Veedez. An application that provides digital payment solutions for businesses. Built with Next JS, React JS, Chakra UI, Framer Motion.',
    features: [
      'Responsive UI Layout',
      'Component-driven Architecture',
      'SEO Optimization',
    ],
    coreTools: ['Next JS', 'React JS', 'Chakra UI', 'Framer Motion'],
    image: Veedez,
    screenshots: [],
  },

  {
    title: 'Web Application for Veedez',
    slug: 'veedez-web-app',
    description:
      'Web application for Veedez paid users. Users utilize it for managing business operations and payments. Built with Redux, Redux Toolkit, Firebase.',
    features: [
      'Firebase Integration',
      'GraphQL API Integration',
      'Payment Gateway Integration',
      'Data Visualization & Analytics Dashboard',
    ],
    coreTools: [
      'Redux',
      'Redux Toolkit',
      'Firebase',
      'React JS',
      'Flutterwave',
      'GraphQL',
      'React Hook Form',
      'Recharts',
      'Styled Components',
      'React Query',
    ],
    image: Veedez,
    screenshots: [],
    featured: true,
  },

  {
    title: 'Cap Admin Dashboard',
    slug: 'zeebly-admin',
    description:
      "Admin dashboard for CAP Plc. Built to monitor and analyze key performance indicators (KPIs) and metrics related to CAP Plc's operations. Key features: GraphQL API Integration, Data Visualization & Analytics Dashboard, Complex State Management. Built with Apollo GraphQL, Apollo Client, React JS, Material UI.",
    features: [
      'Firebase Integration',
      'GraphQL API Integration',
      'Data Visualization & Analytics Dashboard',
      'Complex State Management',
    ],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'React JS',
      'Material UI',
      'Jest',
      'GraphQL',
      'React Hook Form',
      'Recharts',
      'Zod',
      'Zustand',
    ],
    image: CAPAdmin,
    screenshots: [],
    featured: true,
  },

  {
    title: 'Click N Schedule API Backend',
    slug: 'clicknchedule-api',
    description:
      'Backend API Service built for an HR shift and schedule management system with real-time time tracking, real-time message communication, push notifications and schedule managment. Built with Express, Node JS, Mongo DB, firebase and Socket.IO',
    features: [
      'Real-time Communication',
      'Firebase Push notifications',
      'Schedule Management',
    ],
    coreTools: ['Express JS', 'Firebase', 'MongoDB', 'Socket.IO', 'Node JS'],
    image: ClickNSchedule1,
    screenshots: [
      ClickNSchedule1,
      ClickNSchedule2,
      ClickNSchedule3,
      ClickNSchedule4,
      ClickNSchedule5,
    ],
    liveLink: 'https://clicknschedule.com/',
    featured: true,
    apiLink: 'https://documenter.getpostman.com/view/11204995/2sA3kXDKh2',
  },
  {
    title: 'Crowd funding Web Project',
    slug: 'mono-web',
    description:
      'Crowdfunding application for real estate structures. Built with Material UI and React',
    features: [
      'Responsive UI Layout',
      'Crowdfunding Features',
      'Component-driven Architecture',
    ],
    coreTools: ['Material UI', 'React JS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'FRSC Website Rebuild',
    slug: 'frsc-website',
    description:
      'Rebuild of the official website for the Lagos State Command of the Federal Road Safety Corps (FRSC). Built with Material UI and React',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['React JS', 'Material UI', 'Next JS'],
    image: FRSC1,
    screenshots: [FRSC1, FRSC2, FRSC3, FRSC4],
    codeLink: 'https://github.com/Golden-Ogbeka/frsc-website',
    videoDemoLink: 'https://www.youtube.com/watch?v=doVTz9PLGrk',
  },

  {
    title: 'Afripie Bill Payment',
    slug: 'afripie-frontend',
    description:
      'Bill payment gateway web application. Key features: Bill payment, Authentication and Onboarding. Built with Redux, Redux Toolkit, React JS, Next JS, Tailwind CSS.',
    features: ['Bill Payment', 'Authentication and Onboarding'],
    coreTools: ['Redux', 'Redux Toolkit', 'React JS', 'Next JS', 'Tailwind CSS', 'Jest'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Truevoix Website',
    slug: 'truevoix-website',
    description:
      'Branded website for Truevoix. An application that gives constituents direct interaction with the government. Key features: Responsive UI Layout, Component-driven Architecture, SEO Optimization. Built with Next JS, React JS, Tailwind CSS.',
    features: [
      'Responsive UI Layout',
      'Component-driven Architecture',
      'SEO Optimization',
    ],
    coreTools: ['Redux', 'Redux Toolkit', 'Vitest', 'React JS', 'Tailwind CSS'],
    image: Truevoix1,
    screenshots: [Truevoix1, Truevoix2, Truevoix3, Truevoix4, Truevoix5],
    videoDemoLink: 'https://www.youtube.com/watch?v=v1ac7ZXbe8M',
  },
  {
    title: 'Lexis Kitchen Inquiry App',
    slug: 'lexis-kitchen',
    description:
      'Service inquiry web application for Lexis Kitchen(a food service company). Key features: Responsive UI Layout, Component-driven Architecture, Complex Forms. Built with Next JS, React JS, Tailwind CSS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture', 'Complex Forms'],
    coreTools: ['Next JS', 'React JS', 'Tailwind CSS'],
    image: LexisKitchen1,
    screenshots: [
      LexisKitchen1,
      LexisKitchen2,
      LexisKitchen3,
      LexisKitchen4,
      LexisKitchen5,
    ],
    featured: true,
    videoDemoLink: 'https://www.youtube.com/watch?v=Lq-I5ZWkE9c',
  },

  {
    title: 'Corporate Internet Banking Mobile App',
    slug: 'rova-cba-cib-ng-app-lite',
    description:
      'Corporate Internet Banking Mobile App is a React Native mobile app. Key features: Data Visualization & Analytics Dashboard, Complex State Management. Built with React JS, React Native, Redux.',
    features: [
      'Data Visualization & Analytics Dashboard',
      'Complex State Management',
      'Mobile App Capabilities',
    ],
    coreTools: [
      'React JS',
      'React Native',
      'Redux',
      'Redux Toolkit',
      'Jest',
      'Tailwind CSS',
    ],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Tennis Slide Api Backend API/Service',
    slug: 'tennis-slide-api',
    description:
      'Tennis Slide Api Backend API/Service is a backend API/service. Key features: Real-time Communication, Payment Gateway Integration. Built with Express JS, MongoDB, Socket.IO.',
    features: ['Real-time Communication', 'Payment Gateway Integration'],
    coreTools: ['Express JS', 'MongoDB', 'Socket.IO', 'Stripe'],
    image: placeholderImage,
    apiLink: 'https://documenter.getpostman.com/view/11204995/2sA3rxqDJV',
    screenshots: [],
  },
  {
    title: 'A1quest Admin Web Web Project',
    slug: 'a1quest-admin-web',
    description:
      'A1quest Admin Web Web Project is a admin dashboard web application. Key features: Data Visualization & Analytics Dashboard, Complex State Management. Built with Redux, Redux Toolkit, Jest.',
    features: ['Data Visualization & Analytics Dashboard', 'Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Jest', 'React JS', 'Recharts', 'Tailwind CSS'],
    image: A1Quest,
    screenshots: [],
  },

  {
    title: 'A1quest Web Next',
    slug: 'a1quest-web',
    description:
      'A1quest Web Next is a Next.js web application. Key features: Firebase Integration, Payment Gateway Integration. Built with React JS, Redux, Redux Toolkit.',
    features: [
      'Firebase Integration',
      'Payment Gateway Integration',
      'Data Visualization & Analytics Dashboard',
      'Complex State Management',
    ],
    coreTools: [
      'React JS',
      'Redux',
      'Redux Toolkit',
      'Next JS',
      'Firebase',
      'Flutterwave',
      'Recharts',
      'Tailwind CSS',
    ],
    image: A1Quest,
    screenshots: [],
    liveLink: 'https://a1quest.com/',
  },

  {
    title: 'Cravings Admin Frontend Web Project',
    slug: 'cravings-admin-frontend',
    description:
      'Cravings Admin Frontend Web Project is a admin dashboard web application. Key features: Real-time Communication, Data Visualization & Analytics Dashboard. Built with React JS, Material UI, Jest.',
    features: [
      'Real-time Communication',
      'Data Visualization & Analytics Dashboard',
      'Admin Management System',
    ],
    coreTools: ['React JS', 'Material UI', 'Jest', 'Chart.js', 'Socket.IO'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Cravings Web Frontend Web Project',
    slug: 'cravings-web-frontend',
    description:
      'Cravings Web Frontend Web Project is a web application. Key features: Data Visualization & Analytics Dashboard. Built with React JS, Material UI, Jest.',
    features: ['Data Visualization & Analytics Dashboard'],
    coreTools: ['React JS', 'Material UI', 'Jest', 'Chart.js'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Cravings Logistics Client Side Next',
    slug: 'cravings-logistics-client-side',
    description:
      'Cravings Logistics Client Side Next is a Next.js web application. Key features: Complex State Management. Built with Redux, Redux Toolkit, Next JS.',
    features: ['Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Next JS', 'React JS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Gatsby Starter Hello World Web Project',
    slug: 'keyla-site-Frontend',
    description:
      'Gatsby Starter Hello World Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Styled Components, React JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Styled Components', 'React JS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Koneqtor Admin Frontend Web Project',
    slug: 'koneqtor-admin-frontend',
    description:
      'Koneqtor Admin Frontend Web Project is a admin dashboard web application. Key features: Complex State Management. Built with Redux, Redux Toolkit, Jest.',
    features: ['Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Jest', 'React JS', 'Tailwind CSS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Koneqtor Frontend Next',
    slug: 'koneqtor-frontend',
    description:
      'Koneqtor Frontend Next is a Next.js web application. Key features: Real-time Communication, Complex State Management. Built with Redux, Redux Toolkit, React JS.',
    features: ['Real-time Communication', 'Complex State Management'],
    coreTools: [
      'Redux',
      'Redux Toolkit',
      'React JS',
      'Next JS',
      'Socket.IO',
      'Tailwind CSS',
    ],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Landshop Adminpanel Web Project',
    slug: 'landshop-adminpanel',
    description:
      'Landshop Adminpanel Web Project is a admin dashboard web application. Key features: Complex State Management. Built with Redux, Redux Toolkit, Jest.',
    features: ['Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Jest', 'React JS', 'Tailwind CSS'],
    image: LandshopAdmin,
    screenshots: [],
  },
  {
    title: 'Ship Africa Admin Web GraphQL Service',
    slug: 'ship-africa-admin-web',
    description:
      'Ship Africa Admin Web GraphQL Service is a admin dashboard web application. Key features: GraphQL API Integration, Complex State Management. Built with Apollo GraphQL, Apollo Client, Redux.',
    features: ['GraphQL API Integration', 'Complex State Management'],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'Redux',
      'Redux Toolkit',
      'Jest',
      'React JS',
      'GraphQL',
      'Tailwind CSS',
    ],
    image: placeholderImage,
    screenshots: [],
  },
  {
    title: 'Ship Africa Web Next',
    slug: 'ship-africa-web',
    description:
      'Ship Africa Web Next is a Next.js web application. Key features: GraphQL API Integration, Complex State Management. Built with Apollo GraphQL, Apollo Client, React JS.',
    features: ['GraphQL API Integration', 'Complex State Management'],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'React JS',
      'Redux',
      'Redux Toolkit',
      'Next JS',
      'GraphQL',
      'Tailwind CSS',
    ],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Shipmust Web Web Project',
    slug: 'shipmust-web',
    description:
      'Shipmust Web Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with JavaScript, Node.js.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['JavaScript', 'Node.js'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Shipplug Vue/Nuxt Web App',
    slug: 'shipplug',
    description:
      'Shipplug Vue/Nuxt Web App is a Vue/Nuxt web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Vue JS, Tailwind CSS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Vue JS', 'Tailwind CSS'],
    image: placeholderImage,
    screenshots: [],
  },
  {
    title: 'Transaction Viewer Root Web Project',
    slug: 'transaction-viewer',
    description:
      'Transaction Viewer Root Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with JavaScript, Node.js.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['JavaScript', 'Node.js'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Value Female Network Next',
    slug: 'value-female-network',
    description:
      'Value Female Network Next is a Next.js web application. Key features: Complex State Management, Financial Transaction Management. Built with Redux, Redux Toolkit, Next JS.',
    features: ['Complex State Management', 'Financial Transaction Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Next JS', 'React JS', 'Tailwind CSS'],
    image: placeholderImage,
    screenshots: [],
    codeLink: 'https://github.com/Golden-Ogbeka/value-female-network',
    liveLink: 'https://value-female-network.vercel.app/',
  },

  {
    title: 'Authentication Api Backend API/Service',
    slug: 'authentication-api',
    description:
      'Authentication Api Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS, MongoDB.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS', 'MongoDB'],
    image: placeholderImage,
    screenshots: [],
    apiLink: 'https://documenter.getpostman.com/view/11204995/UVR4M9dS',
  },

  {
    title: 'Autocomplete Component Web Project',
    slug: 'autocomplete-component',
    description:
      'Autocomplete Component Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Jest, React JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Jest', 'React JS'],
    image: placeholderImage,
    screenshots: [],
    liveLink: 'https://autocomplete-component-golden.vercel.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/autocomplete-component',
  },

  {
    title: 'Boldo Design Implementation Next',
    slug: 'boldo-design-implementation',
    description:
      'Boldo Design Implementation Next is a Next.js web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Next JS, React JS, Tailwind CSS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Next JS', 'React JS', 'Tailwind CSS'],
    image: Boldo,
    screenshots: [],
    liveLink: 'https://boldo-design-implementation.vercel.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/Boldo-Design-Implementation',
  },

  {
    title: 'Ceejayne Backend API/Service',
    slug: 'ceejayne',
    description:
      'Ceejayne Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS'],
    image: placeholderImage,
    screenshots: [],
  },
  {
    title: 'E Bike Web Project',
    slug: 'e-bike',
    description:
      'E Bike Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with React JS, Material UI, Jest.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['React JS', 'Material UI', 'Jest'],
    image: EBike,
    screenshots: [],
    codeLink: 'https://github.com/Golden-Ogbeka/e-bike',
    liveLink: 'https://e-bike-by-golden-ogbeka.vercel.app/',
  },

  {
    title: 'Find It Backend API/Service',
    slug: 'find-it',
    description:
      'Find It Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS'],
    image: FindIt,
    screenshots: [],
  },

  {
    title: 'Glow Stopper Backend API/Service',
    slug: 'glow-stopper',
    description:
      'Glow Stopper Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS'],
    image: GlowStopper,
    screenshots: [],
  },

  {
    title: 'Library App Web Project',
    slug: 'library-app',
    description:
      'Library App Web Project is a web application. Key features: Complex State Management. Built with Redux, Redux Toolkit, Jest.',
    features: ['Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'Jest', 'React JS'],
    image: Library,
    screenshots: [],
  },

  {
    title: 'Mini Todo App Server Backend API/Service',
    slug: 'mini-todo-app-server',
    description:
      'Mini Todo App Server Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS'],
    image: Todo,
    screenshots: [],
  },

  {
    title: 'Otk Contact Manager Web Project',
    slug: 'otk-contact-manager',
    description:
      'Otk Contact Manager Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with React JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['React JS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Product Catalog With Unsplash Api Backend API/Service',
    slug: 'product-catalog-with-unsplash-api',
    description:
      'Product Catalog With Unsplash Api Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS'],
    image: ProductCatalog,
    screenshots: [],
  },

  {
    title: 'Risevest Homepage Build Web Project',
    slug: 'risevest-homepage-build',
    description:
      'Risevest Homepage Build Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Jest, React JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Jest', 'React JS'],
    image: placeholderImage,
    screenshots: [],
    liveLink: 'https://risevest-homepage.vercel.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/risevest-homepage-build',
  },

  {
    title: 'Saas Landing Page Vue Vue/Nuxt Web App',
    slug: 'saas-landing-page-vue',
    description:
      'Saas Landing Page Vue Vue/Nuxt Web App is a Vue/Nuxt web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Vue JS, Tailwind CSS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Vue JS', 'Tailwind CSS'],
    image: placeholderImage,
    screenshots: [],
    codeLink: 'https://github.com/Golden-Ogbeka/saas-landing-page-vue',
    liveLink: 'https://saas-landing-page-vue.vercel.app/',
  },

  {
    title: 'Secure Shift Api Backend API/Service',
    slug: 'secure-shift-api',
    description:
      'Secure Shift Api Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS, Jest.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS', 'Jest'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Simple Cart Web Project',
    slug: 'simple-cart',
    description:
      'Simple Cart Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with Jest, React JS.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Jest', 'React JS'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Ocpus Client Next',
    slug: 'ocpus-client',
    description:
      'Ocpus Client Next is a React Native mobile app. Key features: Real-time Communication, GraphQL API Integration. Built with Apollo GraphQL, Apollo Client, React JS.',
    features: [
      'Real-time Communication',
      'GraphQL API Integration',
      'Complex State Management',
    ],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'React JS',
      'React Native',
      'Redux',
      'Redux Toolkit',
      'GraphQL',
      'Next JS',
      'Socket.IO',
    ],
    image: Ocpus,
    screenshots: [],
  },

  {
    title: 'Zwilt Multiplatform Client Next',
    slug: 'zwilt-client',
    description:
      'Zwilt Multiplatform Client Next is a React Native mobile app. Key features: Real-time Communication, GraphQL API Integration. Built with Apollo GraphQL, Apollo Client, React JS.',
    features: [
      'Real-time Communication',
      'GraphQL API Integration',
      'Data Visualization & Analytics Dashboard',
      'Complex State Management',
    ],
    coreTools: [
      'Apollo GraphQL',
      'Apollo Client',
      'React JS',
      'Material UI',
      'Redux',
      'Redux Toolkit',
      'GraphQL',
      'Next JS',
      'React Native',
      'Recharts',
      'Socket.IO',
      'Styled Components',
    ],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Switch React Native Mobile App',
    slug: 'switch3.0',
    description:
      'Switch React Native Mobile App is a React Native mobile app. Key features: Firebase Integration, Complex State Management. Built with React JS, React Native, Firebase.',
    features: ['Firebase Integration', 'Complex State Management'],
    coreTools: ['React JS', 'React Native', 'Firebase', 'Redux', 'Jest'],
    image: Switch,
    screenshots: [],
  },

  {
    title: 'Tcu Mobile React Native Mobile App',
    slug: 'tcu-mobile',
    description:
      'Tcu Mobile React Native Mobile App is a React Native mobile app. Key features: Mobile App Capabilities. Built with React JS, React Native, Jest.',
    features: ['Mobile App Capabilities'],
    coreTools: ['React JS', 'React Native', 'Jest'],
    image: TCU,
    screenshots: [],
  },

  {
    title: 'Thechickenuniverse Backend API/Service',
    slug: 'thechickenuniverse',
    description:
      'Thechickenuniverse Backend API/Service is a backend API/service. Key features: Real-time Communication. Built with Express JS, MongoDB, Socket.IO.',
    features: ['Real-time Communication'],
    coreTools: ['Express JS', 'MongoDB', 'Socket.IO'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Account Connect App Root Web Project',
    slug: 'account-connect-app',
    description:
      'Account Connect App Root Web Project is a web application. Key features: Responsive UI Layout, Component-driven Architecture. Built with JavaScript, Node.js.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['JavaScript', 'Node.js'],
    image: placeholderImage,
    screenshots: [],
  },

  {
    title: 'Tfh Admin Frontend Web Project',
    slug: 'tfh-admin-frontend',
    description:
      'Tfh Admin Frontend Web Project is a admin dashboard web application. Key features: Complex State Management, Admin Management System. Built with Redux, Redux Toolkit, React JS.',
    features: ['Complex State Management', 'Admin Management System'],
    coreTools: ['Redux', 'Redux Toolkit', 'React JS', 'Tailwind CSS'],
    image: TFHAdmin,
    screenshots: [],
  },

  {
    title: 'Tfh Admin Backend Backend API/Service',
    slug: 'tfh-backend',
    description:
      'Tfh Admin Backend Backend API/Service is a backend API/service. Key features: Responsive UI Layout, Component-driven Architecture. Built with Express JS, MongoDB.',
    features: ['Responsive UI Layout', 'Component-driven Architecture'],
    coreTools: ['Express JS', 'MongoDB'],
    image: TFHAdmin,
    screenshots: [],
  },

  {
    title: 'Tfh Website Next',
    slug: 'tfh-website',
    description:
      'Tfh Website Next is a Next.js web application. Key features: Complex State Management. Built with Redux, Redux Toolkit, React JS.',
    features: ['Complex State Management'],
    coreTools: ['Redux', 'Redux Toolkit', 'React JS', 'Next JS', 'Tailwind CSS'],
    image: TFHWebsite,
    screenshots: [],
  },

  {
    title: 'Tfhmobile React Native Mobile App',
    slug: 'tfhmobile',
    description:
      'Tfhmobile React Native Mobile App is a React Native mobile app. Key features: Complex State Management, Mobile App Capabilities. Built with React JS, React Native, Redux.',
    features: ['Complex State Management', 'Mobile App Capabilities'],
    coreTools: ['React JS', 'React Native', 'Redux', 'Redux Toolkit', 'Jest'],
    image: placeholderImage,
    screenshots: [],
  },
];

export default Projects;
