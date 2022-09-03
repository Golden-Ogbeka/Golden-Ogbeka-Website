import React from 'react';
import styles from '../../../styles/homepage/About.module.css';

function AboutCard({ title = '', description = '', list = false, listItems = [] }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardTitle}>
				<h5>{title}</h5>
			</div>
			<div className={styles.cardContent}>
				{!list && description}
				{list && (
					<ul
						style={{
							margin: 0,
						}}
					>
						{listItems.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default AboutCard;
