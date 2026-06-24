import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useTranslation } from '../../../context/LocaleContext';

function EducationCard({
	education,
	index,
}: {
	education: {
		degree: string;
		institution: string;
		date: string;
		institutionLink?: string;
	};
	index: number;
}) {
	const { t } = useTranslation();
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex flex-row flex-wrap items-center justify-between gap-3'>
				<h3 className='text-2xl dark:text-white'>{t(`education.${index}.degree`, education.degree)}</h3>
				<span className='dark:text-[#C4C4C4]'>{education.date}</span>
			</div>

			<a
				href={education.institutionLink}
				className='flex flex-row items-center gap-3 dark:text-lightSecondary text-secondary'
				target='_blank'
				rel='noreferrer'
			>
				{t(`education.${index}.institution`, education.institution)}
			</a>
		</div>
	);
}

export default EducationCard;
