import React from 'react';
import Education from '../../../data/Education';
import EducationCard from '../../layout/EducationCard/EducationCard';

function EducationSection() {
	return (
		<section id='education'>
			<div className='grid grid-cols-1 lg:grid-cols-7 justify-items-stretch lg:gap-[95px]'>
				<h2 className='uppercase dark:text-white mb-[51px] text-lg'>Education</h2>
				<div className='flex flex-col gap-[54px] lg:col-span-6'>
					{Education.map((education, index) => (
						<EducationCard key={index} education={education} />
					))}
				</div>
			</div>
		</section>
	);
}

export default EducationSection;
