import React from 'react';
import Projects from '../../../data/Projects';
import ProjectCard from '../../layout/ProjectCard/ProjectCard';

function FeaturedProjects() {
	return (
		<section id='projects'>
			<div className='mt-32 '>
				<h2 className='uppercase dark:text-white mb-[51px]'>Featured projects</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center md:justify-items-stretch gap-x-[57px] gap-y-[60px]'>
					{Projects.map((project, index) => (
						<ProjectCard project={project} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}

export default FeaturedProjects;
