import React from 'react';
import Experiences from '../../../data/Experiences';
import ExperienceCard from '../../layout/ExperienceCard/ExperienceCard';

function ExperienceSection() {
	return (
		<section id='experience'>
			<div className='grid grid-cols-1 lg:grid-cols-7 justify-items-stretch lg:gap-[95px]'>
				<h2 className='uppercase dark:text-white mb-[51px] text-lg'>Experience</h2>
				<div className='flex flex-col gap-[54px] lg:col-span-6'>
					{Experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ExperienceSection;
