import React from 'react';
import Alert from '../../reusable/Alert/Alert';
import LoadingIndicator from '../../reusable/LoadingIndicator/LoadingIndicator';
import Footer from '../Footer/Footer';
import PublicNavbar from '../Navbar/PublicNavbar';

function PublicLayout({ children }) {
	return (
		<>
			<PublicNavbar />

			<main
				style={{
					minHeight: '100vh',
					paddingTop: 55, //navbar height
					position: 'relative',
				}}
			>
				<Alert />
				<LoadingIndicator />
				{children}
			</main>
			<Footer />
		</>
	);
}

export default PublicLayout;
