import React from 'react';
import styles from '../../../styles/homepage/Contact.module.css';
import CallEmoji from '../../../public/icons/call-emoji.png';
import BuildingEmoji from '../../../public/icons/building-emoji.png';
import EmailEmoji from '../../../public/icons/email-emoji.png';
import ContactCard from './ContactCard';

function ContactSection() {
	const contactInfo = [
		{
			icon: EmailEmoji,
			content: 'ogbekagolden@gmail.com',

			action: () => (window.location = 'mailto:ogbekagolden@gmail.com'),
		},
		{
			icon: CallEmoji,
			content: '+234 8169200454',

			action: () => window.open('tel:+2348169200454'),
		},
		{
			icon: BuildingEmoji,
			content: 'Lagos, Nigeria',

			action: () => window.open('http://maps.google.com?q=6.5244,3.3792'),
		},
	];
	return (
		<section className={styles.container} id='contact'>
			<div className={styles.secondaryContainer + ' ' + 'reveal'}>
				<h2>Contact</h2>
				<div className={styles.titleLine} />
				<div className={styles.contentContainer}>
					{contactInfo.map((info, index) => (
						<ContactCard
							description={info.content}
							icon={info.icon}
							action={info.action}
							key={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
