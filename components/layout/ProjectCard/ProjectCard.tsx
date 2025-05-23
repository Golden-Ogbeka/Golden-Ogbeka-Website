import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import FigmaIcon from '../../../public/icons/figma.png';
import GithubIcon from '../../../public/icons/github.png';
import LinkIcon from '../../../public/icons/link.png';
import PostmanIcon from '../../../public/icons/postman.png';

function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    tools: string[];
    githubLink?: string;
    liveLink?: string;
    figmaLink?: string;
    postmanLink?: string;
    image: StaticImageData;
  };
}) {
  const router = useRouter();

  return (
    <div className='flex flex-col w-[511px] max-w-full'>
      <a
        className='w-full h-[338px] relative cursor-pointer'
        href={
          project.liveLink ||
          project.githubLink ||
          project.figmaLink ||
          project.postmanLink
        }
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={project.image}
          alt={project.name}
          objectFit='cover'
          className='rounded hover:scale-110 object-center'
          layout='fill'
          placeholder='blur'
        />
      </a>
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
          {project.postmanLink && (
            <a href={project.postmanLink} target='_blank' rel='noreferrer'>
              <Image src={PostmanIcon} alt='Postman' />
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
      <p className='mt-3 text-secondary dark:text-lightSecondary text-sm'>
        {project.tools.join(' - ')}
      </p>
    </div>
  );
}

export default ProjectCard;
