import React from 'react';
import Education from '../../../data/Education';
import { useTranslation } from 'next-i18next';
import EducationCard from '../../layout/EducationCard/EducationCard';

function EducationSection() {
	const { t } = useTranslation(['common', 'home']);
	return (
		<section id='education'>
			<div className='grid grid-cols-1 lg:grid-cols-7 justify-items-stretch lg:gap-[95px]'>
				<h2 className='uppercase dark:text-white mb-[51px] text-lg'>{t('home:education.title')}</h2>
				<div className='flex flex-col gap-[54px] lg:col-span-6'>
					{Education.map((education, index) => (
						<EducationCard key={index} education={education} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

export default EducationSection;
