import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Divider, Grid, MenuItem } from '@mui/material';
import styles from '../../styles/authentication/authentication.module.css';
import Link from 'next/link';
import { closeAlert, openAlert } from '../../store/slices/alertSlice';
import { useDispatch } from 'react-redux';
import {
	closeLoadingIndicator,
	openLoadingIndicator,
} from '../../store/slices/loadingIndicatorSlice';
import axios from 'axios';
import { API_URL } from '../../functions/env';
import { useRouter } from 'next/router';

function RegistrationForm() {
	const dispatch = useDispatch();

	const router = useRouter();

	const Formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
			confirmPassword: '',
			firstname: '',
			middlename: '',
			lastname: '',
			sex: '',
			address1: '',
			address2: '',
			city: '',
			country: '',
			emailAddress: '',
			number: '',
			alternativeNumber: '',
			active: true,
			dateJoined: '',
			userType: 1,
		},
		validationSchema: yup.object({
			confirmPassword: yup
				.string()
				.required('Confirm your password')
				.oneOf([yup.ref('password'), null], "Passwords don't match"),
		}),
		onSubmit: () => {
			submitValues();
		},
	});

	const submitValues = async () => {
		dispatch(openLoadingIndicator({ text: 'Signing up...' }));

		try {
			const response = await axios.post(`${API_URL}/Account/registerSpecialMarshal`, {
				userName: Formik.values.userName,
				password: Formik.values.password,
				confirmPassword: Formik.values.confirmPassword,
				firstname: Formik.values.firstname,
				middlename: Formik.values.middlename,
				lastname: Formik.values.lastname,
				sex: Formik.values.sex,
				address1: Formik.values.address1,
				address2: Formik.values.address2,
				city: Formik.values.city,
				country: Formik.values.country,
				emailAddress: Formik.values.emailAddress,
				number: Formik.values.number,
				alternativeNumber: Formik.values.alternativeNumber,
				active: true,
				// dateJoined: new Date().toISOString(),
				userType: Formik.values.userType,
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				Formik.resetForm();

				console.log(response);

				router.push('/confirm-email');
			}
		} catch (error) {
			dispatch(
				openAlert({
					message: error.response?.data
						? error.response.data.message || error.response.data.title
						: 'Request unsuccessful',
					type: 'error',
				})
			);
			setTimeout(() => {
				dispatch(closeAlert());
			}, 5000);
		}
		dispatch(closeLoadingIndicator());
	};

	return (
		<form onSubmit={Formik.handleSubmit} className={styles.form}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='firstname'
						name='firstname'
						fullWidth
						value={Formik.values.firstname}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.firstname && Formik.errors.firstname && true}
						helperText={
							Formik.touched.firstname && Formik.errors.firstname && Formik.errors.firstname
						}
						label='First name'
						placeholder='First name'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='middlename'
						name='middlename'
						fullWidth
						value={Formik.values.middlename}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.middlename && Formik.errors.middlename && true}
						helperText={
							Formik.touched.middlename && Formik.errors.middlename && Formik.errors.middlename
						}
						placeholder='Middle name'
						label='Middle name'
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='lastname'
						name='lastname'
						fullWidth
						value={Formik.values.lastname}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.lastname && Formik.errors.lastname && true}
						helperText={
							Formik.touched.lastname && Formik.errors.lastname && Formik.errors.lastname
						}
						placeholder='Last name'
						label='Last name'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='userName'
						name='userName'
						fullWidth
						value={Formik.values.userName}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.userName && Formik.errors.userName && true}
						helperText={
							Formik.touched.userName && Formik.errors.userName && Formik.errors.userName
						}
						placeholder='User name'
						label='User name'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='email'
						variant='standard'
						id='emailAddress'
						name='emailAddress'
						fullWidth
						value={Formik.values.emailAddress}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.emailAddress && Formik.errors.emailAddress && true}
						helperText={
							Formik.touched.emailAddress &&
							Formik.errors.emailAddress &&
							Formik.errors.emailAddress
						}
						placeholder='Email Address'
						label='Email Address'
						required
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<TextField
						type='password'
						variant='standard'
						id='password'
						name='password'
						fullWidth
						value={Formik.values.password}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.password && Formik.errors.password && true}
						helperText={
							Formik.touched.password && Formik.errors.password && Formik.errors.password
						}
						label='Password'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='password'
						variant='standard'
						id='confirmPassword'
						name='confirmPassword'
						fullWidth
						value={Formik.values.confirmPassword}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.confirmPassword && Formik.errors.confirmPassword && true}
						helperText={
							Formik.touched.confirmPassword &&
							Formik.errors.confirmPassword &&
							Formik.errors.confirmPassword
						}
						label='Confirm Password'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='sex'
						name='sex'
						label='Sex'
						required
						select
						fullWidth
						value={Formik.values.sex}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.sex && Formik.errors.sex && true}
						helperText={Formik.touched.sex && Formik.errors.sex && Formik.errors.sex}
						allowEmpty
					>
						<MenuItem value='' disabled>
							Select one
						</MenuItem>
						<MenuItem value={1}>Male</MenuItem>
						<MenuItem value={0}>Female</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='tel'
						variant='standard'
						id='number'
						name='number'
						fullWidth
						value={Formik.values.number}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.number && Formik.errors.number && true}
						helperText={Formik.touched.number && Formik.errors.number && Formik.errors.number}
						placeholder='Phone number'
						label='Phone number'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='tel'
						variant='standard'
						id='alternativeNumber'
						name='alternativeNumber'
						fullWidth
						value={Formik.values.alternativeNumber}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.alternativeNumber && Formik.errors.alternativeNumber && true}
						helperText={
							Formik.touched.alternativeNumber &&
							Formik.errors.alternativeNumber &&
							Formik.errors.alternativeNumber
						}
						placeholder='Alternate phone number'
						label='Alternate phone number'
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='city'
						name='city'
						fullWidth
						value={Formik.values.city}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.city && Formik.errors.city && true}
						helperText={Formik.touched.city && Formik.errors.city && Formik.errors.city}
						placeholder='City'
						label='City'
						required
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						type='text'
						variant='standard'
						id='country'
						name='country'
						fullWidth
						value={Formik.values.country}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.country && Formik.errors.country && true}
						helperText={
							Formik.touched.country && Formik.errors.country && Formik.errors.country
						}
						placeholder='Country'
						label='Country'
						required
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						type='text'
						variant='standard'
						id='address1'
						name='address1'
						fullWidth
						value={Formik.values.address1}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.address1 && Formik.errors.address1 && true}
						helperText={
							Formik.touched.address1 && Formik.errors.address1 && Formik.errors.address1
						}
						placeholder='Address'
						label='Address'
						multiline
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						type='text'
						variant='standard'
						id='address2'
						name='address2'
						fullWidth
						value={Formik.values.address2}
						onChange={Formik.handleChange}
						onBlur={Formik.handleBlur}
						error={Formik.touched.address2 && Formik.errors.address2 && true}
						helperText={
							Formik.touched.address2 && Formik.errors.address2 && Formik.errors.address2
						}
						placeholder='Alternate Address'
						label='Alternate Address'
						multiline
					/>
				</Grid>
			</Grid>

			<Button
				variant='contained'
				type='submit'
				style={{
					height: 60,
				}}
			>
				Register
			</Button>
			<Divider />
			<center>
				Have an account?{' '}
				<Link href='/login'>
					<span className={styles.linkText}>Sign in</span>
				</Link>{' '}
				now
			</center>
		</form>
	);
}

export default RegistrationForm;
