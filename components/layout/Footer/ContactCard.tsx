import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { trackEvent } from '../../../utils/analytics';

function ContactCard({
	text,
	icon,
	href,
	invertIcon,
}: {
	text: string;
	icon: StaticImageData;
	href: string;
	invertIcon?: boolean;
}) {
	return (
		<a
			className='col-span-2 w-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg h-12 flex justify-center items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-lightBg dark:focus-visible:ring-offset-darkBg transition-colors duration-200 group'
			href={href}
			target='_blank'
			rel='noreferrer'
			aria-label={text}
			onClick={() => trackEvent('click', 'contact', text)}
		>
			<div className={`contactCardImage items-center flex`} aria-hidden='true'>
				<Image src={icon} alt='' className='invert dark:invert-0' />
			</div>
			<span>{text}</span>
		</a>
	);
}

export default ContactCard;
