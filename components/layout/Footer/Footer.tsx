import React from 'react';
import ContactCard from './ContactCard';
import Whatsapp from '../../../public/icons/whatsapp-white.png';
import Linkedin from '../../../public/icons/linkedin-white.png';
import Email from '../../../public/icons/email.png';
import Github from '../../../public/icons/github.png';
import SectionDivider from '../SectionDivider';

function Footer() {
	return (
		<>
			<SectionDivider />

			<footer id='contact'>
				<div className='grid grid-cols-1 lg:grid-cols-7 justify-items-stretch lg:gap-[95px] '>
					<h2 className='uppercase dark:text-white mb-[51px] text-lg'>Contact</h2>
					<div className='grid md:grid-flow-col gap-3 lg:col-span-6'>
						<ContactCard
							text='Send a message'
							icon={Whatsapp}
							href='https://wa.me/2348169200454'
						/>
						<ContactCard
							text='Linkedin'
							icon={Linkedin}
							href='https://www.linkedin.com/in/goldenogbeka/'
						/>
						<ContactCard
							text='Send an email'
							icon={Email}
							href='mailto:ogbekagolden@gmail.com'
						/>
						<ContactCard text='Github' icon={Github} href='https://github.com/Golden-Ogbeka' />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
