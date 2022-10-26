import { StaticImageData } from 'next/image';
import Keyla from '../public/images/Experiences/keyla.png';
import Composite from '../public/images/Experiences/composite.png';
import TCU from '../public/images/Experiences/tcu.png';
import KFC from '../public/images/Experiences/kfc.png';
import BOI from '../public/images/Experiences/boi.jpg';
import Alerzo from '../public/images/Experiences/alerzo.png';

const Experiences: Array<{
	role: string;
	company: string;
	companyLogo: StaticImageData;
	companyLink?: string;
	date: string;
	tasksAchieved: string[];
	invertCompanyLogoInDarkMode?: boolean;
}> = [
	{
		role: 'Frontend Engineer',
		company: 'Alerzo',
		date: 'Oct 2022 - Present',
		companyLink: 'https://www.alerzo.com/',
		tasksAchieved: [],
		companyLogo: Alerzo,
	},
	{
		role: 'Full Stack Developer',
		company: 'Keyla Technologies',
		date: 'Oct 2021 - Present',
		companyLink: 'https://keyla.ng/',
		tasksAchieved: [
			'I worked on upgrading Cravings website into a full E-commerce application',
			"I re-developed the company's website (www.keyla.ng) using React JS and Gatsby",
			"I replicated the UI Design for the food vendor applications' website called Cravings (www.cravingsng.com) and ensured mobile responsiveness and a great user experience using React JS and Material UI",
			"I developed an admin dashboard for a another food vendor application with total user and admin management using ReactJS, Material UI and React's Context API",
			'I created a brand website for Cravings Logistics',
			'I completed the backend of a food delivery app that has a full logistics feature using PostgreSQL, NodeJS and ExpressJS',
		],
		companyLogo: Keyla,
	},
	{
		role: 'Full Stack Developer',
		company: 'Composite Property Development',
		date: 'Feb 2021 - Dec 2021',
		companyLink: 'https://compositepropertydevelopment.com/',
		tasksAchieved: [
			"I re-branded the company's website and created User Interface Designs with Figma. Then I created the backend for the application using MySQL, NodeJs and ExpressJS",
			'My team and I created the frontend of a crowdfunding real estate application that would be used by the company with ReactJS, Material UI and React Context API',
			"My team and I concluded the company's staff portal and client dashboard to manage company's inventory, projects, staff, clients and contractors",
			'My team and I organized a training session for the staff of the company to train them on how to use the application we developed',
		],
		companyLogo: Composite,
		invertCompanyLogoInDarkMode: true,
	},
	{
		role: 'Full Stack Developer and Product Owner',
		company: 'The Chicken Universe',
		date: 'Oct 2019 - Jan 2021',
		companyLink: 'https://thechickenuniverse.onrender.com/',
		tasksAchieved: [
			'I created this application to help connect buyers and sellers of chicken products together',
			"I created the web application as an e-commerce store using React JS, EJS, NodeJS, Express JS, MongoDB, Sockets IO and React's Context API",
			'I hosted the web application using cloud hosting and was in charge of managing the SSH integrations',
			"I created the mobile application using React Native and hosted it on Amazon's AppStore",
		],
		companyLogo: TCU,
	},
	{
		role: 'Supply Base Manager',
		company: 'KFC',
		date: 'Aug 2018 - Oct 2018',
		companyLink: 'https://www.instagram.com/officialkfcnigeria/?hl=en',
		tasksAchieved: [
			'I took this job to learn about the principles of a long standing business. KFC has been in existence for over 69 years and I wanted to know why. I got to learn that a business is not built on passion but by following well defined principles and procedures. I was also learnt about integrity, character and was made to understand the necessity of discipline',
			'I left for my NYSC programme',
		],
		companyLogo: KFC,
	},
	{
		role: 'IT Support Technician',
		company: 'Bank of Industry Limited',
		date: 'Feb 2017 - Aug 2017',
		companyLink: 'https://www.boi.ng/',
		tasksAchieved: [
			'I was taught problem solving patterns as I handled staff complaints that were related to technological devices and network infrastructure issues',
			'I was taught presentation skills as I was tasked to give presentations on programming and cloud computing',
			'I was taught computer hardware troubleshooting',
		],
		companyLogo: BOI,
	},
];

export default Experiences;
