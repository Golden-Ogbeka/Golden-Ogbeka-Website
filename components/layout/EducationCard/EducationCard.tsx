import Image, { StaticImageData } from 'next/image';
import React from 'react';

function EducationCard({
	education,
}: {
	education: {
		degree: string;
		institution: string;
		date: string;
		institutionLink?: string;
	};
}) {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex flex-row flex-wrap items-center justify-between gap-3'>
				<span className='text-2xl dark:text-white'>{education.degree}</span>
				<span className='dark:text-[#C4C4C4]'>{education.date}</span>
			</div>

			<a
				href={education.institutionLink}
				className='flex flex-row items-center gap-3 dark:text-lightSecondary text-secondary'
				target='_blank'
				rel='noreferrer'
			>
				{education.institution}
			</a>
		</div>
	);
}

export default EducationCard;
