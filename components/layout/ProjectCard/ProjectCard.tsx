import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import GithubIcon from '../../../public/icons/github.png';
import LinkIcon from '../../../public/icons/link.png';
import FigmaIcon from '../../../public/icons/figma.png';

function ProjectCard({
	project,
}: {
	project: {
		name: string;
		description: string;
		tools: string[];
		githubLink: string;
		liveLink?: string;
		figmaLink?: string;
		image: StaticImageData;
	};
}) {
	const router = useRouter();

	const navigateToDescription = () => {
		router.push(
			{
				pathname: '/project/' + project.name,
				query: { project: JSON.stringify(project) },
			},
			'/project/' + project.name
		);
	};
	return (
		<div className='flex flex-col w-[511px] max-w-full'>
			<div
				className='w-full h-[338px] relative cursor-pointer'
				onClick={navigateToDescription}
			>
				<Image
					src={project.image}
					alt={project.name}
					objectFit='cover'
					className='rounded'
					layout='fill'
					placeholder='blur'
				/>
			</div>
			<div className='flex flex-row justify-between items-center mt-[31px]'>
				<span className='dark:text-white text-2xl'>{project.name}</span>
				<div className='flex flex-row items-center gap-[19px]'>
					{project.githubLink && (
						<a href={project.githubLink} target='_blank' rel='noreferrer'>
							<Image src={GithubIcon} alt='Github' className='invert dark:invert-0' />
						</a>
					)}
					{project.figmaLink && (
						<a href={project.figmaLink} target='_blank' rel='noreferrer'>
							<Image src={FigmaIcon} alt='Figma' />
						</a>
					)}

					{project.liveLink && (
						<a href={project.liveLink} target='_blank' rel='noreferrer'>
							<Image src={LinkIcon} alt='Demo' className='invert dark:invert-0' />
						</a>
					)}
				</div>
			</div>
			<p className='max-w-[453px] dark:text-[#C4C4C4] mt-3'>{project.description}</p>
			<p className='mt-3 text-[#004E93] dark:text-[#6CACE4] text-sm'>
				{project.tools.join(' - ')}
			</p>
		</div>
	);
}

export default ProjectCard;
