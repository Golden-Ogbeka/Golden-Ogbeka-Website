import React from 'react';
import styles from '../../../styles/homepage/Contact.module.css';
import Image from 'next/image';

function ContactCard({ title = '', description = '', icon = '', action }) {
	return (
		<div className={styles.card} onClick={action}>
			<div>
				<Image src={icon} alt='' />
			</div>
			<div className={styles.cardContent}>
				<h5>{description}</h5>
			</div>
		</div>
	);
}

export default ContactCard;
