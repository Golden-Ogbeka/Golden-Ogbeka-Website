import { StaticImageData } from 'next/image';
import Boldo from '../public/images/Projects/boldo.png';
import VFN from '../public/images/Projects/vfn.png';

const Projects: Array<{
	name: string;
	description: string;
	tools: string[];
	githubLink: string;
	liveLink?: string;
	figmaLink?: string;
	image: StaticImageData;
}> = [
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
];

export default Projects;
