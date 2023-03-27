import Image from 'next/image';
import React from 'react';
import GithubIcon from '../../../public/icons/github.png';
import LinkedinIcon from '../../../public/icons/linkedin.png';
import DribbbleIcon from '../../../public/icons/dribbble.png';
import EmailIcon from '../../../public/icons/email.png';
import WhatsappIcon from '../../../public/icons/whatsapp.png';

function Intro() {
  return (
    <header className='mt-[117px]'>
      <span className='font-extralight dark:text-white'>Hey, I&apos;m</span>
      <h1 className='font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-[18px] mb-6 font-[Montserrat] gradientText'>
        Golden Ogbeka
      </h1>
      <p className='text-lg font-extralight dark:text-[#F0F0F0] mb-10'>
        I&apos;m a frontend web developer based in Lagos, Nigeria. I&apos;m passionate
        about using technology to create solutions for people and have experience doing so
        in these sectors: Agriculture, Finance, Real Estate, Retail Services, IT, Food and
        Logistics.
      </p>
      <div className='flex flex-row gap-5 items-center flex-wrap'>
        <a href='https://github.com/Golden-Ogbeka' target='_blank' rel='noreferrer'>
          <Image src={GithubIcon} alt='Github' className='invert dark:invert-0' />
        </a>
        <a
          href='https://www.linkedin.com/in/goldenogbeka/'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={LinkedinIcon} alt='Linkedin' />
        </a>
        <a href='https://dribbble.com/Golden-Ogbeka' target='_blank' rel='noreferrer'>
          <Image src={DribbbleIcon} alt='Dribbble' />
        </a>
        <a href='mailto:ogbekagolden@gmail.com' target='_blank' rel='noreferrer'>
          <Image src={EmailIcon} alt='Email' className='invert dark:invert-0' />
        </a>
        <a href='https://wa.me/2348169200454' target='_blank' rel='noreferrer'>
          <Image src={WhatsappIcon} alt='Whatsapp' />
        </a>
      </div>
    </header>
  );
}

export default Intro;
