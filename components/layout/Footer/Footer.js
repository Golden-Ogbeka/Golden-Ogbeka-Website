import { AppBar } from '@mui/material';
import React from 'react';
import styles from '../../../styles/layout/Footer.module.css';

function Footer() {
	return (
		<AppBar position='static'>
			<div className={styles.container}>
				<div className={styles.innerContainer}>
					<span>&copy; {new Date().getFullYear()} Golden Ogbeka</span>
					<div className={styles.linkContainer}>
						<a
							href='https://www.linkedin.com/in/goldenogbeka/'
							target='_blank'
							rel='noreferrer'
							className='hoverText'
						>
							Linkedin
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				span {
					color: #fff;

					font-weight: 400;
					font-size: 15px;
				}
				a {
					text-decoration: none;
					color: #fff;
					font-size: 15px;
					transition: all 0.5s;
				}
			`}</style>
		</AppBar>
	);
}

export default Footer;
