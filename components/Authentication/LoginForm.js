import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Divider } from '@mui/material';
import styles from '../../styles/authentication/authentication.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../functions/env';
import {
	closeLoadingIndicator,
	openLoadingIndicator,
} from '../../store/slices/loadingIndicatorSlice';
import { closeAlert, openAlert } from '../../store/slices/alertSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';

function LoginForm() {
	const dispatch = useDispatch();
	const router = useRouter();

	const Formik = useFormik({
		initialValues: {
			emailAddress: '',
			password: '',
			userType: 1,
		},
		validationSchema: yup.object({
			emailAddress: yup
				.string()
				.email('Must be a valid email')
				.required('Email is required'),
			password: yup.string().required('Password is required'),
		}),
		onSubmit: () => {
			submitValues();
		},
	});

	const submitValues = async () => {
		dispatch(openLoadingIndicator({ text: 'Signing in...' }));

		try {
			const response = await axios.post(`${API_URL}/Login/login`, {
				email: Formik.values.emailAddress,
				password: Formik.values.password,
				// userType: Formik.values.userType,
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				Formik.resetForm();
				router.push(router.query.history || '/dashboard');
			} else {
				console.log(response);
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
			<TextField
				type='text'
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
				placeholder='Enter your email'
			/>
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
				placeholder='Enter your password'
			/>
			<Button
				variant='contained'
				type='submit'
				style={{
					height: 60,
				}}
			>
				Login
			</Button>
			<Divider />
			<center>
				Don&apos;t have an account?{' '}
				<Link href='/register'>
					<span className={styles.linkText}>Sign up</span>
				</Link>{' '}
				now
			</center>
			<center>
				<Link href='/reset-password'>
					<span className={styles.linkText}>Reset password</span>
				</Link>
			</center>
		</form>
	);
}

export default LoginForm;
