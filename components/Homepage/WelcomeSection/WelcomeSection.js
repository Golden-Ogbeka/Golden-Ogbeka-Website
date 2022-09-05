import React from 'react';
import styles from '../../../styles/homepage/Welcome.module.css';
import Image from 'next/image';
import SpecialMarshalImage from '../../../public/images/hero.png';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
function WelcomeSection() {
	return (
		<section className={styles.container} id='home'>
			<Box className={styles.innerContainer}>
				<div className={styles.leftSide}>
					<h1>Golden Ogbeka</h1>
					<p>
						A website developer with a good knowledge of business and people. Created a startup
						called The Chicken Universe in 2019 and understands what it takes to grow a business
						and influence people to join a dream
					</p>
					<a href='https://github.com/Golden-Ogbeka'>
						<Button color='alternate' variant='contained' className={styles.button}>
							Portfolio
						</Button>
					</a>
				</div>
				<div className={styles.rightSide}>
					<Image
						src={SpecialMarshalImage}
						objectFit='contain'
						height={450}
						alt='Golden Ogbeka'
					/>
				</div>
			</Box>
			<style jsx>{`
				a {
					text-decoration: none;
					color: initial;
				}
			`}</style>
		</section>
	);
}

export default WelcomeSection;
