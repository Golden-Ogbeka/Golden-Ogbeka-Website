import { StaticImageData } from 'next/image';
import Boldo from '../public/images/Projects/boldo.png';
import VFN from '../public/images/Projects/vfn.png';
import EBike from '../public/images/Projects/e-bike.png';
import SocialNews from '../public/images/Projects/social-news.png';
import Cravings from '../public/images/Projects/cravings.png';
import CravingsLogistics from '../public/images/Projects/cravings-logistics.png';
import FindIt from '../public/images/Projects/find-it.png';
import Todo from '../public/images/Projects/todo.png';
import ProductCatalog from '../public/images/Projects/product-catalog.png';
import TCU from '../public/images/Projects/tcu.png';
import Keyla from '../public/images/Projects/keyla.png';
import Library from '../public/images/Projects/library.png';
import GlowStopper from '../public/images/Projects/glowstopper.png';
import Whitepace from '../public/images/Projects/whitepace.png';
import VeedezPro from '../public/images/Projects/veedez-pro.png';
import Veedez from '../public/images/Projects/veedez.png';
import Switch from '../public/images/Projects/switch.png';
import TFH_Mobile from '../public/images/Projects/tfh-mobile.png';

const Projects: Array<{
  name: string;
  description: string;
  tools: string[];
  githubLink?: string;
  liveLink?: string;
  figmaLink?: string;
  postmanLink?: string;
  image: StaticImageData;
}> = [
  {
    name: 'TFH Church App',
    description: "Mobile app for The Father's House Church, Nigeria",
    tools: ['React Native', 'Redux Toolkit'],
    image: TFH_Mobile,
    liveLink:
      'https://drive.google.com/drive/u/0/folders/1Gbxyry3TV19qWCt9aIALzlAsb6GhsuNN',
  },
  {
    name: 'Switch Mobile App',
    description:
      'Financial application for managing funds and sending money between Nigeria and other countries. A product of Sterling Bank PLC',
    tools: ['React Native', 'Redux Saga'],
    image: Switch,
    liveLink: 'https://play.google.com/store/apps/details?id=ng.sterling.sterlingswitch',
  },
  {
    name: 'Veedez',
    description: 'Brand website for Veedez. A product of Alerzo Limited',
    tools: ['React JS', 'Styled Components', 'TypeScript'],
    image: Veedez,
    liveLink: 'https://veedez.com/',
  },
  {
    name: 'Veedez Pro',
    description: 'Business Management System. A product of Alerzo Limited',
    tools: ['React JS', 'Styled Components', 'TypeScript', 'Redux Toolkit'],
    image: VeedezPro,
  },
  {
    name: 'White Pace',
    description: 'Saas Landing Page',
    tools: ['Vue JS', 'Tailwind CSS', 'TypeScript', 'Vue3 Carousel'],
    githubLink: 'https://github.com/Golden-Ogbeka/saas-landing-page-vue',
    liveLink: 'https://saas-landing-page-vue.vercel.app/',
    figmaLink: 'https://www.figma.com/community/file/1156860863353724933',
    image: Whitepace,
  },
  {
    name: 'Boldo',
    description: 'Code implementation for Boldo Design by Edgar Allan in Figma Community',
    tools: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    githubLink: 'https://github.com/Golden-Ogbeka/Boldo-Design-Implementation',
    liveLink: 'https://boldo-design-implementation.vercel.app/',
    figmaLink: 'https://www.figma.com/community/file/1081611224529759785',
    image: Boldo,
  },
  {
    name: 'VFN Website',
    description:
      'Website for Value Female Network. A youth-led, registered, non-governmental organization that seeks to establish the health and rights of women and girls in local communities',
    tools: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    githubLink: 'https://github.com/Golden-Ogbeka/value-female-network',
    liveLink: 'https://value-female-network.vercel.app/',
    image: VFN,
  },
  {
    name: 'E-Bike',
    description:
      'Frontend UI Implementation of an E-Bike system using Lootie Files for animations',
    tools: ['React JS', 'Material UI', 'Lootie Animations', 'React Multi Carousel'],
    githubLink: 'https://github.com/Golden-Ogbeka/e-bike',
    liveLink: 'https://e-bike-by-golden-ogbeka.vercel.app/',
    image: EBike,
  },

  {
    name: 'Cravings',
    description:
      'Web application for Cravings Food Nigeria. Allows you order food from your favourite restaurants around you. A product of Keyla Technologies',
    tools: ['React JS', 'Material UI', 'Framer Motion', 'React Context'],
    // liveLink: 'https://cravingsng.com/',
    image: Cravings,
  },
  {
    name: 'Cravings Logistics',
    description:
      'Web application for Cravings Logistics: a reliable delivery system. A product of Keyla Technologies',
    tools: ['Next JS', 'Redux Toolkit'],
    // liveLink: 'https://logistics.cravingsng.com/',
    image: CravingsLogistics,
  },
  {
    name: 'Keyla',
    description:
      'Web application for Keyla Technologies: a technology solution service provider. A product of Keyla Technologies',
    tools: ['Gatsby'],
    liveLink: 'https://keyla.ng/',
    image: Keyla,
  },
  {
    name: 'The Chicken Universe',
    description:
      'This app was built to connect buyers and sellers of chicken products together. It also includes forums and groups to help build communities and interaction between poultry farmers',
    tools: ['Express JS', 'EJS', 'MongoDB', 'JWT', 'Socket.IO', 'React JS', 'Bootstrap'],
    liveLink: 'https://thechickenuniverse.onrender.com/',
    image: TCU,
  },
  {
    name: 'Library App',
    description:
      'A basic implementation of a book purchase system with cart and search features',
    tools: ['React JS', 'Redux Toolkit', 'React Elastic Carousel'],
    liveLink: 'https://library-app-sage.vercel.app/',
    githubLink: 'https://github.com/Golden-Ogbeka/library-app',
    image: Library,
  },
  {
    name: 'Find IT',
    description:
      'The app allows search for any query by specifying the exact location you are interested in. You are allowed to specify the Latitude and Longitude coordinates as well as the location radius in meters. This gives you full control over the results.',
    tools: ['React JS', 'Material UI', 'Node JS', 'Google Maps Services'],
    liveLink: 'https://find-it-by-golden-ogbeka.cyclic.app/',
    figmaLink: 'https://www.figma.com/file/v06s62gpM0hZ7ny0RKW6qU/Find-IT?node-id=0%3A1',
    githubLink: 'https://github.com/Golden-Ogbeka/Find-It',
    image: FindIt,
  },

  {
    name: 'Product Catalog',
    description:
      'A landing page with products, details and images gotten from Unsplash API.',
    tools: ['React JS', 'Material UI', 'Node JS', 'Unsplash-JS', 'Node-Fetch'],
    liveLink: 'https://product-catalog-unsplash.cyclic.app/',
    githubLink: 'https://github.com/Golden-Ogbeka/Product-Catalog-with-Unsplash-API',
    image: ProductCatalog,
  },
  {
    name: 'Social News',
    description:
      'A web application where users can create posts and comment on posts from other users',
    tools: ['React JS', 'Tailwind CSS', 'Express JS', 'Node JS', 'Mongo DB'],
    githubLink: 'https://github.com/Golden-Ogbeka/Social-News',
    liveLink: 'https://social-news.onrender.com/',
    figmaLink:
      'https://www.figma.com/file/5VJBI6mmPQ3KA2dbPgLMnF/Social-News?node-id=0%3A1',
    postmanLink:
      'https://www.postman.com/Golden-Ogbeka/workspace/social-news/collection/11204995-032cdcbe-2616-4307-bfd1-8c49f88fe902',
    image: SocialNews,
  },
  {
    name: 'Glow Stopper',
    description: 'Web Application for Glow Stopper - An online cloth delivery store',
    tools: ['Express JS', 'MySQL', 'JWT', 'React JS', 'Material UI'],
    githubLink: 'https://github.com/Golden-Ogbeka/glow_stopper',
    figmaLink:
      'https://www.figma.com/file/Ydk3iHnNJxHH31HxQQXg9W/Glow-Stopper?node-id=40%3A33',
    image: GlowStopper,
  },
  {
    name: 'Todo List',
    description: 'To-do List with Add and Delete Task functionalities.',
    tools: ['React JS', 'Material UI', 'Node JS', 'Mongo DB'],
    liveLink: 'https://to-do-list-by-golden-ogbeka.cyclic.app/',
    githubLink: 'https://github.com/Golden-Ogbeka/To-do-List',
    image: Todo,
  },
];

export default Projects;
