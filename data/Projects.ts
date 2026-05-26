import { StaticImageData } from 'next/image';
import Boldo from '../public/images/Projects/boldo.png';
import EBike from '../public/images/Projects/e-bike.png';
import SocialNews from '../public/images/Projects/social-news.png';
import VFN from '../public/images/Projects/vfn.png';
import FindIt from '../public/images/Projects/find-it.png';
import GlowStopper from '../public/images/Projects/glowstopper.png';
import ProductCatalog from '../public/images/Projects/product-catalog.png';
import Todo from '../public/images/Projects/todo.png';
import Library from '../public/images/Projects/library.png';
import TCU from '../public/images/Projects/tcu.png';
import Whitepace from '../public/images/Projects/whitepace.png';
import Switch from '../public/images/Projects/switch.png';
import TFH_Mobile from '../public/images/Projects/tfh-mobile.png';
import Veedez from '../public/images/Projects/veedez.png';
import A1Quest from '../public/images/Projects/a1quest.png';
import Alerzoshop from '../public/images/Projects/alerzoshop.png';
import CAPAdmin from '../public/images/Projects/cap-admin.png';
import JompStart from '../public/images/Projects/jompstart.png';
import LandshopAdmin from '../public/images/Projects/landshop-admin.png';
import Ocpus from '../public/images/Projects/ocpus.png';
import TFHAdmin from '../public/images/Projects/tfh-admin.png';
import TFHBackend from '../public/images/Projects/tfh-backend.png';
import TFHWebsite from '../public/images/Projects/tfh-website.png';
import VeedezPay from '../public/images/Projects/veedezpay.png';
import CIBWeb from '../public/images/Projects/cib-web/1.png'; // Assuming 1.png is the thumbnail

export interface ProjectType {
  name: string;
  slug: string;
  description: string;
  features: string[];
  coreTools: string[];
  codeLink?: string;
  liveLink?: string;
  designLink?: string;
  apiLink?: string;
  image: StaticImageData;
  screenshots: string[];
  videoDemoLink?: string;
  featured?: boolean;
}

const Projects: ProjectType[] = [
  {
    name: 'CIB Web Application',
    slug: 'cib-web',
    description: 'Corporate Internet Banking platform designed to improve enterprise customer experience, operational reliability, and secure financial workflows across Nigeria and the UK. Built for FCMB Group.',
    features: [
      'Advanced Role-Based Access Control (RBAC) & Team Management',
      'Multi-factor Authentication & Secure Login flows',
      'Bulk and Single Payments (Transfers, Airtime, Cable TV, Electricity)',
      'Account Management and Beneficiary Management',
      'Comprehensive Transaction History & Dashboard Reporting',
      'Clickjacking Protection & OWASP Security Standards compliance',
    ],
    coreTools: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'React Hook Form', 'Zod', 'Framer Motion'],
    image: CIBWeb, // Needs to be added to imports or handled dynamically, wait we don't have CIBWeb image imported properly yet if the file doesn't exist. I'll change this to use a string or mock image later.
    screenshots: [
      '/images/Projects/cib-web/1.png',
      '/images/Projects/cib-web/2.png',
      '/images/Projects/cib-web/3.png',
      '/images/Projects/cib-web/4.png',
      '/images/Projects/cib-web/5.png',
    ],
    videoDemoLink: 'https://www.youtube.com/watch?v=k3Y9ZXfJ9GU',
    featured: true,
  },
  {
    name: 'A1Quest',
    slug: 'a1quest',
    description: 'App that teaches Mathematics to secondary school children focusing on improving learning accessibility and student engagement in Nigeria.',
    features: ['Student dashboard', 'Interactive mathematics lessons', 'Progress tracking', 'Gamified learning experience'],
    coreTools: ['Next JS', 'Redux Toolkit', 'Tailwind CSS', 'Firebase'],
    image: A1Quest,
    liveLink: 'https://a1quest.com/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'CAP Admin',
    slug: 'cap-admin',
    description: 'Build the admin dashboard for CAP PLC internal operations for their partners and representatives.',
    features: ['Partner management', 'Operational analytics', 'Real-time data visualization', 'Secure administrative controls'],
    coreTools: ['React JS', 'Zustand', 'Material UI', 'Socket.IO', 'Zod', 'Recharts'],
    image: CAPAdmin,
    liveLink: 'https://capplc.com/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'Switch Mobile App',
    slug: 'switch-mobile',
    description: 'Financial application for managing funds and sending money between Nigeria and other countries. A product of Sterling Bank PLC.',
    features: ['International money transfers', 'Wallet management', 'Transaction history', 'Secure biometric authentication'],
    coreTools: ['React Native', 'Redux Saga'],
    image: Switch,
    liveLink: 'https://play.google.com/store/apps/details?id=ng.sterling.sterlingswitch',
    screenshots: [],
    featured: true,
  },
  {
    name: 'Veedez Admin and PWA',
    slug: 'veedez-admin',
    description: 'Worked on the admin dashboard controlling the Veedez Product and also worked on the User Dashboard PWA.',
    features: ['Product inventory management', 'Order tracking', 'User management', 'Offline capable PWA'],
    coreTools: ['React JS', 'Styled Components', 'TypeScript'],
    image: Veedez,
    liveLink: 'https://veedez.com/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'Alerzoshop Admin',
    slug: 'alerzoshop-admin',
    description: 'Worked on the admin dashboard application controlling the AlerzoShop application and also maintained AlerzoShop.',
    features: ['Logistics management', 'Inventory tracking', 'Order fulfillment processing', 'Real-time updates'],
    coreTools: ['React JS', 'Styled Components', 'TypeScript', 'Redux Toolkit', 'NextJS'],
    image: Alerzoshop,
    liveLink: 'https://shop.alerzo.com/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'Veedez Pay',
    slug: 'veedez-pay',
    description: 'Worked on the B2B dashboard for Veedez Pay as well as the Admin Dashboard.',
    features: ['B2B transactions', 'Payment gateways integration', 'Dashboard analytics', 'User role management'],
    coreTools: ['React JS', 'TypeScript'],
    image: VeedezPay,
    liveLink: 'https://veedezpay.com/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'Ocpus Mobile App',
    slug: 'ocpus-mobile',
    description: 'Mobile App to enable live event hosting and participation.',
    features: ['Live event streaming', 'Audience participation', 'Event scheduling', 'Real-time chat'],
    coreTools: ['React Native Web', 'TypeScript'],
    image: Ocpus,
    liveLink: 'https://play.google.com/store/apps/details?id=net.ocpusapp.android&hl=en',
    screenshots: [],
    featured: true,
  },
  {
    name: 'TFH Church App',
    slug: 'tfh-church-app',
    description: "Built mobile app for The Father's House Church, Nigeria.",
    features: ['Sermon audio/video streaming', 'Event calendar', 'In-app giving', 'Push notifications'],
    coreTools: ['React Native', 'Redux Toolkit'],
    image: TFH_Mobile,
    codeLink: 'https://github.com/Golden-Ogbeka/church-mobile-app',
    screenshots: [],
    featured: true,
  },
  {
    name: 'TFH Church Website',
    slug: 'tfh-church-website',
    description: "Built website for The Father's House Church, Nigeria.",
    features: ['Sermon archive', 'Event listings', 'Online giving portal', 'Blog integration'],
    coreTools: ['Next JS', 'Tailwind CSS', 'Redux Toolkit'],
    image: TFHWebsite,
    codeLink: 'https://github.com/Golden-Ogbeka/church-website',
    liveLink: 'https://tfh-website.netlify.app/',
    screenshots: [],
    featured: true,
  },
  {
    name: 'TFH Admin Dashboard',
    slug: 'tfh-admin',
    description: "Built admin dashboard for The Father's House Church, Nigeria.",
    features: ['Member management', 'Content management system (CMS)', 'Donation tracking', 'Event creation'],
    coreTools: ['React JS', 'Redux Toolkit', 'Tailwind CSS'],
    image: TFHAdmin,
    codeLink: 'https://github.com/Golden-Ogbeka/church-admin-frontend',
    liveLink: 'https://tfh-admin.netlify.app/',
    screenshots: [],
  },
  {
    name: 'TFH Backend API',
    slug: 'tfh-backend',
    description: "Built the backend APIs for all the apps built for The Father's House Church, Nigeria.",
    features: ['RESTful architecture', 'Authentication/Authorization', 'Database management', 'Payment integration'],
    coreTools: ['Node JS', 'Typescript', 'Redux Toolkit'],
    image: TFHBackend,
    codeLink: 'https://github.com/Golden-Ogbeka/church-backend',
    screenshots: [],
  },
  {
    name: 'Jompstart',
    slug: 'jompstart',
    description: 'Worked on the user application for Jompstart. It is an application that gives users access to credit facilities.',
    features: ['Credit scoring application', 'Loan management', 'Repayment tracking', 'User authentication'],
    coreTools: ['React JS', 'Typescript', 'Redux Toolkit', 'Tailwindcss'],
    image: JompStart,
    liveLink: 'https://www.jompstart.com/',
    screenshots: [],
  },
  {
    name: 'Landshop Admin',
    slug: 'landshop-admin',
    description: 'Built the admin dashboard for Landshop. It is an application that provides real estate investment opportunities.',
    features: ['Property listings management', 'Investor portfolio tracking', 'Transaction monitoring', 'Admin reporting'],
    coreTools: ['React JS'],
    image: LandshopAdmin,
    liveLink: 'https://landshop.ng/',
    screenshots: [],
  },
  {
    name: 'The Chicken Universe',
    slug: 'the-chicken-universe',
    description: 'This app was built to connect buyers and sellers of chicken products together. It also includes forums and groups to help build communities and interaction between poultry farmers.',
    features: ['Digital marketplace', 'Community forums', 'Real-time chat', 'Order management'],
    coreTools: ['Express JS', 'EJS', 'MongoDB', 'JWT', 'Socket.IO', 'React JS', 'Bootstrap'],
    liveLink: 'https://thechickenuniverse.onrender.com/',
    image: TCU,
    screenshots: [],
  },
  {
    name: 'VFN Website',
    slug: 'vfn-website',
    description: 'Website for Value Female Network. A youth-led, registered, non-governmental organization that seeks to establish the health and rights of women and girls in local communities.',
    features: ['Informational pages', 'Donation portal', 'Volunteer registration', 'Blog updates'],
    coreTools: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    codeLink: 'https://github.com/Golden-Ogbeka/value-female-network',
    liveLink: 'https://value-female-network.vercel.app/',
    image: VFN,
    screenshots: [],
  },
  {
    name: 'White Pace',
    slug: 'white-pace',
    description: 'UI reproduction for a Saas Landing Page.',
    features: ['Responsive layout', 'Carousel implementations', 'Modern UI design'],
    coreTools: ['Vue JS', 'Tailwind CSS', 'TypeScript', 'Vue3 Carousel'],
    codeLink: 'https://github.com/Golden-Ogbeka/saas-landing-page-vue',
    liveLink: 'https://saas-landing-page-vue.vercel.app/',
    designLink: 'https://www.figma.com/community/file/1156860863353724933',
    image: Whitepace,
    screenshots: [],
  },
  {
    name: 'Boldo',
    slug: 'boldo',
    description: 'UI reproduction for Boldo Design by Edgar Allan in Figma Community.',
    features: ['Pixel-perfect conversion', 'Mobile responsiveness', 'Interactive components'],
    coreTools: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    codeLink: 'https://github.com/Golden-Ogbeka/Boldo-Design-Implementation',
    liveLink: 'https://boldo-design-implementation.vercel.app/',
    designLink: 'https://www.figma.com/community/file/1081611224529759785',
    image: Boldo,
    screenshots: [],
  },
  {
    name: 'E-Bike',
    slug: 'e-bike',
    description: 'UI reproduction for an E-Bike system using Lootie Files for animations.',
    features: ['Lottie animations', 'Product carousel', 'Interactive UI elements'],
    coreTools: ['React JS', 'Material UI', 'Lootie Animations', 'React Multi Carousel'],
    codeLink: 'https://github.com/Golden-Ogbeka/e-bike',
    liveLink: 'https://e-bike-by-golden-ogbeka.vercel.app/',
    image: EBike,
    screenshots: [],
  },
  {
    name: 'Library App',
    slug: 'library-app',
    description: 'A basic implementation of a book purchase system with cart and search features.',
    features: ['Book search', 'Shopping cart', 'State management'],
    coreTools: ['React JS', 'Redux Toolkit', 'React Elastic Carousel'],
    liveLink: 'https://library-app-sage.vercel.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/library-app',
    image: Library,
    screenshots: [],
  },
  {
    name: 'Social News',
    slug: 'social-news',
    description: 'A web application where users can create posts and comment on posts from other users.',
    features: ['Post creation', 'Commenting system', 'User authentication'],
    coreTools: ['React JS', 'Tailwind CSS', 'Express JS', 'Node JS', 'Mongo DB'],
    codeLink: 'https://github.com/Golden-Ogbeka/Social-News',
    liveLink: 'https://social-news.onrender.com/',
    designLink: 'https://www.figma.com/file/5VJBI6mmPQ3KA2dbPgLMnF/Social-News?node-id=0%3A1',
    apiLink: 'https://www.postman.com/Golden-Ogbeka/workspace/social-news/collection/11204995-032cdcbe-2616-4307-bfd1-8c49f88fe902',
    image: SocialNews,
    screenshots: [],
  },
  {
    name: 'Glow Stopper',
    slug: 'glow-stopper',
    description: 'Web Application for Glow Stopper - An online cloth delivery store.',
    features: ['E-commerce product listing', 'Cart checkout', 'User accounts'],
    coreTools: ['Express JS', 'MySQL', 'JWT', 'React JS', 'Material UI'],
    codeLink: 'https://github.com/Golden-Ogbeka/glow_stopper',
    designLink: 'https://www.figma.com/file/Ydk3iHnNJxHH31HxQQXg9W/Glow-Stopper?node-id=40%3A33',
    image: GlowStopper,
    screenshots: [],
  },
  {
    name: 'Find IT',
    slug: 'find-it',
    description: 'The app allows search for any query by specifying the exact location you are interested in. You are allowed to specify the Latitude and Longitude coordinates as well as the location radius in meters.',
    features: ['Location-based search', 'Google Maps integration', 'Custom radius filtering'],
    coreTools: ['React JS', 'Material UI', 'Node JS', 'Google Maps Services'],
    liveLink: 'https://find-it-by-golden-ogbeka.cyclic.app/',
    designLink: 'https://www.figma.com/file/v06s62gpM0hZ7ny0RKW6qU/Find-IT?node-id=0%3A1',
    codeLink: 'https://github.com/Golden-Ogbeka/Find-It',
    image: FindIt,
    screenshots: [],
  },
  {
    name: 'Product Catalog',
    slug: 'product-catalog',
    description: 'A landing page with products, details and images gotten from Unsplash API.',
    features: ['API Integration', 'Product display grid', 'Dynamic content loading'],
    coreTools: ['React JS', 'Material UI', 'Node JS', 'Unsplash-JS', 'Node-Fetch'],
    liveLink: 'https://product-catalog-unsplash.cyclic.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/Product-Catalog-with-Unsplash-API',
    image: ProductCatalog,
    screenshots: [],
  },
  {
    name: 'Todo List',
    slug: 'todo-list',
    description: 'To-do List with Add and Delete Task functionalities.',
    features: ['Task creation', 'Task deletion', 'Persistent storage'],
    coreTools: ['React JS', 'Material UI', 'Node JS', 'Mongo DB'],
    liveLink: 'https://to-do-list-by-golden-ogbeka.cyclic.app/',
    codeLink: 'https://github.com/Golden-Ogbeka/To-do-List',
    image: Todo,
    screenshots: [],
  },
];

export default Projects;
