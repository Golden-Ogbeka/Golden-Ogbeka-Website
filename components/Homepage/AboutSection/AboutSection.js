import React from 'react';
import styles from '../../../styles/homepage/About.module.css';
import AboutCard from './AboutCard';

function AboutSection() {
	const aboutReasons = [
		{
			title: 'Qualifications',
			list: true,
			listItems: [
				'First class Computer Science graduate from Covenant University',
				'Business owner for The Chicken Universe',
				'Product Manager and Full Stack Developer of The Chicken Universe',
				'AWS Technical Essentials Certificate',
				'SEO Certified by Hubspot Academy',
				'Content Marketing Certified by Hubspot Academy',
				'Javascript Certified by Farda Karimov',
				'Digital Marketing certified by Google',
				'Diploma in Leadership Development from Covenant University',
			],
		},
		{
			title: 'Strength',
			list: true,
			listItems: [
				'Frontend Web Development with React JS / Next JS',
				'Fullstack Web Development with MERN Stack',
				'User Interface Design with Figma and Adobe XD',
				'Mobile Application Design with React Native',
				'Product Owner and Product Manager',
				'Business Development and Leadership',
			],
		},
		{
			title: 'Purpose',
			description: 'To use technology to help solve problems humans face',
		},
	];
	return (
		<section className={styles.container} id='about'>
			<div className={styles.secondaryContainer + ' ' + 'reveal'}>
				<h2>About</h2>
				<div className={styles.titleLine} />
				<div className={styles.contentContainer}>
					<div className={styles.innerContainer}>
						{aboutReasons.map((reason) => (
							<AboutCard
								title={reason.title}
								description={reason.description}
								key={reason.title}
								list={reason.list}
								listItems={reason.listItems}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
