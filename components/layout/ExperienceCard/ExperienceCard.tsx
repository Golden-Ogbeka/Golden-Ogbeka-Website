import Image, { StaticImageData } from 'next/image';
import React from 'react';

function ExperienceCard({
	experience,
}: {
	experience: {
		role: string;
		company: string;
		companyLogo: StaticImageData;
		companyLink?: string;
		date: string;
		tasksAchieved: string[];
	};
}) {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex flex-row flex-wrap items-center justify-between gap-3'>
				<span className='text-2xl dark:text-white'>{experience.role}</span>
				<span className='dark:text-[#C4C4C4]'>{experience.date}</span>
			</div>

			<a
				href={experience.companyLink}
				className='flex flex-row items-center gap-3 dark:text-lightSecondary text-secondary'
				target='_blank'
				rel='noreferrer'
			>
				<Image
					src={experience.companyLogo}
					alt=''
					width={25}
					height={25}
					objectFit='cover'
					className='rounded-full'
				/>
				<span>{experience.company}</span>
			</a>
			<ul className='flex flex-col gap-3 list-none'>
				{experience.tasksAchieved.map((task, index) => (
					<li key={index} className='dashedList'>
						{task}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ExperienceCard;
