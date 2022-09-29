import Image, { StaticImageData } from 'next/image';
import React from 'react';

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
			className='col-span-2 w-full border-[#C6C6C6] border-[1px] dark:text-[#C4C4C4] rounded-[4px] h-[49px] flex justify-center items-center gap-[9px] hover:bg-dark hover:text-[#c4c4c4] dark:hover:bg-[#c4c4c4] dark:hover:text-dark contactCard duration-100'
			href={href}
			target='_blank'
			rel='noreferrer'
		>
			<div className={`contactCardImage items-center flex`}>
				<Image src={icon} alt={''} className='invert dark:invert-0' />
			</div>
			<span>{text}</span>
		</a>
	);
}

export default ContactCard;
