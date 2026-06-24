import Image from 'next/image';
import { ProjectType } from '../../../data/Projects';
import { trackEvent } from '../../../utils/analytics';
import FigmaIcon from '../../../public/icons/figma.png';
import GithubIcon from '../../../public/icons/github.png';
import LinkIcon from '../../../public/icons/link.png';
import PostmanIcon from '../../../public/icons/postman.png';

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className='flex flex-col w-[511px] max-w-full'>
      <a
        className='w-full h-[338px] relative cursor-pointer'
        href={
          project.liveLink || project.codeLink || project.designLink || project.apiLink
        }
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={project.image}
          alt={project.title}
          objectFit='cover'
          className='rounded hover:scale-110 object-center'
          layout='fill'
          placeholder='blur'
        />
      </a>
      <div className='flex flex-row justify-between items-center mt-[31px]'>
        <span className='dark:text-white text-2xl'>{project.title}</span>
        <div className='flex flex-row items-center gap-[19px]'>
          {project.codeLink && (
            <a href={project.codeLink} target='_blank' rel='noreferrer' onClick={() => trackEvent('click', 'project_link', `${project.title} - Code`)}>
              <Image src={GithubIcon} alt='Github' className='invert dark:invert-0' />
            </a>
          )}
          {project.designLink && (
            <a href={project.designLink} target='_blank' rel='noreferrer' onClick={() => trackEvent('click', 'project_link', `${project.title} - Design`)}>
              <Image src={FigmaIcon} alt='Figma' />
            </a>
          )}
          {project.apiLink && (
            <a href={project.apiLink} target='_blank' rel='noreferrer' onClick={() => trackEvent('click', 'project_link', `${project.title} - API`)}>
              <Image src={PostmanIcon} alt='Postman' />
            </a>
          )}

          {project.liveLink && (
            <a href={project.liveLink} target='_blank' rel='noreferrer' onClick={() => trackEvent('click', 'project_link', `${project.title} - Demo`)}>
              <Image src={LinkIcon} alt='Demo' className='invert dark:invert-0' />
            </a>
          )}
        </div>
      </div>
      <p className='max-w-[453px] dark:text-[#C4C4C4] mt-3'>{project.description}</p>
      <p className='mt-3 text-secondary dark:text-lightSecondary text-sm'>
        {project.coreTools.join(' - ')}
      </p>
    </div>
  );
}

export default ProjectCard;
