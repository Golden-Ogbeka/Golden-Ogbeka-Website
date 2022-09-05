import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../../styles/layout/Navbar.module.css';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Logo from '../../../public/images/brand/logo.png';
import Link from 'next/link';

function PublicNavbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const navigationList = [
		{
			label: 'About',
			route: '/#about',
		},
		{
			label: 'Contact',
			route: '/#contact',
		},
		// {
		// 	label: 'Portfolio',
		// 	route: '/portfolio',
		// },
	];
	return (
		<AppBar position='fixed' elevation={0}>
			<Toolbar
				disableGutters
				style={{
					paddingInline: '5vw',
				}}
			>
				<Link href='/'>
					<Box
						style={{
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							flexGrow: 1,
						}}
					>
						<Image src={Logo} alt='Golden Ogbeka' height={40} objectFit='contain' />
						<Typography
							variant='h5'
							noWrap
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								fontSize: 15,
								color: 'inherit',
								textDecoration: 'none',
								marginLeft: '20px',
							}}
						>
							Golden Ogbeka
						</Typography>
					</Box>
				</Link>

				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '40px', alignItems: 'center' }}>
					{navigationList.map((page) => (
						<Typography
							textAlign='center'
							href={page.route}
							component='a'
							style={{
								textDecoration: 'none',
								color: '#fff',
								fontSize: 15,
							}}
							key={page.label}
							className='hoverText'
						>
							{page.label}
						</Typography>
					))}
					<a href='https://github.com/Golden-Ogbeka'>
						<Button color='alternate' variant='contained' className={styles.button}>
							Portfolio
						</Button>
					</a>
				</Box>
				<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
					<IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
						<MenuIcon />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>
						{navigationList.map((page) => (
							<MenuItem key={page.label} onClick={handleCloseNavMenu}>
								<Typography
									textAlign='center'
									href={page.route}
									component='a'
									style={{
										textDecoration: 'none',
										color: '#000',
									}}
								>
									{page.label}
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
			<style jsx>{`
				a {
					text-decoration: none;
					color: initial;
				}
			`}</style>
		</AppBar>
	);
}

export default PublicNavbar;
