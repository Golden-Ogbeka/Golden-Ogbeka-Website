import { StaticImageData } from 'next/image';
import Alerzo from '../public/images/Experiences/alerzo.png';
import BOI from '../public/images/Experiences/boi.jpg';
import Composite from '../public/images/Experiences/composite.png';
import Keyla from '../public/images/Experiences/keyla.png';
import KFC from '../public/images/Experiences/kfc.png';
import Rova from '../public/images/Experiences/rova.jpeg';
import TCU from '../public/images/Experiences/tcu.png';

export interface ExperienceType {
  role: string;
  company: string;
  companyLogo: StaticImageData;
  companyLink?: string;
  date: string;
  tasksAchieved: string[];
  invertCompanyLogoInDarkMode?: boolean;
}

const Experiences: ExperienceType[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Rova (FCMB Group)',
    date: 'Aug 2024 - Present',
    companyLink: 'https://getrova.com/',
    tasksAchieved: [
      'Contributed to rebuilding a corporate banking platform designed to improve enterprise customer experience, operational reliability, and secure financial workflows across Nigeria and the UK.',
      'Developed secure financial modules including bulk payments, transaction workflows, account management systems, and banking operations features aligned with enterprise security standards.',
      'Improved application responsiveness, frontend maintainability, and user experience through reusable component systems, optimized rendering patterns, and scalable architecture practices.',
      'Integrated backend services, RESTful APIs, and authentication workflows supporting reliable financial transactions and customer-facing banking functionality.',
      'Contributed to scalable service integration strategies and frontend architecture decisions supporting secure enterprise banking operations.',
      'Collaborated with backend engineers, designers, and product teams to deliver scalable cloud-native financial solutions in Agile development environments.',
      'Resolved production issues and contributed to application reliability through debugging, monitoring, testing, and operational support workflows.'
    ],
    companyLogo: Rova,
  },
  {
    role: 'Software Engineer',
    company: 'Alerzo',
    date: 'Oct 2022 - Mar 2025',
    companyLink: 'https://www.alerzo.com/',
    tasksAchieved: [
      'Developed and maintained operational systems supporting inventory, logistics, customer, and order management workflows used by thousands of businesses across Nigeria.',
      'Built scalable frontend features and reusable React and TypeScript component systems improving engineering consistency and accelerating feature delivery.',
      'Optimized frontend architecture, service integrations, and application performance to improve responsiveness, maintainability, and operational reliability.',
      'Integrated RESTful APIs and backend services supporting high-volume operational processes, asynchronous workflows, and customer-facing business functionality.',
      'Collaborated across engineering, product, and design teams to deliver scalable enterprise solutions in fast-paced Agile environments.',
      'Resolved production issues, participated in code reviews, and contributed to continuous improvement initiatives across engineering teams.'
    ],
    companyLogo: Alerzo,
  },
  {
    role: 'Software Engineer and CTO',
    company: 'Kanaga Technologies',
    date: 'Aug 2023 - Jul 2024',
    tasksAchieved: [
      'Led product strategy, technical direction, and end-to-end development of A1Quest, an edtech platform focused on improving mathematics learning accessibility.',
      'Coordinated engineering and product teams to define technical direction, architecture decisions, feature priorities, and delivery timelines.',
      'Designed scalable frontend systems, reusable UI architectures, backend service integrations, and administrative platforms using React and TypeScript.',
      'Contributed to architectural decisions and scalable application design improving maintainability and engineering consistency.',
      'Managed technical decision-making, deployment coordination, testing workflows, and software delivery processes across the product lifecycle.',
      'Implemented engineering best practices including code reviews, collaborative development workflows, frontend optimization strategies, and maintainable architecture patterns.'
    ],
    companyLogo: TCU, // Fallback logo or define a new one if available
  },
  {
    role: 'Mobile Engineer',
    company: 'Sterling Bank PLC',
    date: 'Feb 2022 - Jun 2023',
    tasksAchieved: [
      'Implemented fintech features supporting Nigerians in diaspora with secure access to banking operations, account management services, and digital financial workflows.',
      'Enhanced mobile applications with secure payment systems, identity verification workflows, transaction capabilities, and card management features.',
      'Contributed to application reliability, observability, debugging, troubleshooting, production support, and mobile performance optimization initiatives.',
      'Integrated backend services and secure authentication workflows supporting enterprise banking operations and customer-facing financial services.',
      'Collaborated with engineers, QA teams, designers, and product stakeholders to deliver secure banking solutions aligned with enterprise standards.'
    ],
    companyLogo: BOI, // Fallback
  },
  {
    role: 'Full Stack Developer',
    company: 'Composite Property Development',
    date: 'Feb 2021 - Dec 2021',
    companyLink: 'https://compositepropertydevelopment.com/',
    tasksAchieved: [
      'Developed a real estate crowdfunding platform enabling users to invest in construction and property development opportunities.',
      'Built frontend and backend application features using React, Node.js, REST APIs, and database-driven architectures supporting customer and operational workflows.',
      'Improved company digital platforms, application usability, and customer experience through redesigned web systems and optimized workflows.',
      'Integrated APIs and backend services supporting business operations, authentication workflows, and scalable application functionality.'
    ],
    companyLogo: Composite,
    invertCompanyLogoInDarkMode: true,
  },
  {
    role: 'Full Stack Engineer and Founder',
    company: 'The Chicken Universe',
    date: 'Oct 2019 - Jan 2021',
    companyLink: 'https://thechickenuniverse.onrender.com/',
    tasksAchieved: [
      'Founded and built a digital marketplace platform connecting poultry suppliers, vendors, distributors, and customers through scalable commerce solutions.',
      'Developed backend infrastructure, APIs, real-time systems, and cloud-based application features using Node.js and modern web technologies.',
      'Managed the full product lifecycle including architecture, development, deployment, monitoring, maintenance, and operational support.',
      'Implemented authentication systems, payment workflows, service integrations, and scalable platform features supporting day-to-day business operations.',
      'Contributed to product growth through technical ownership, feature development, troubleshooting, and continuous platform improvements.'
    ],
    companyLogo: TCU,
  },
];

export default Experiences;
