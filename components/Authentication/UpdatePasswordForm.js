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
import { useRouter } from 'next/router';

function UpdatePasswordForm() {
	const dispatch = useDispatch();
	const router = useRouter();

	const Formik = useFormik({
		initialValues: {
			emailAddress: '',
			password: '',
			confirmPassword: '',
			verificationCode: '',
		},
		validationSchema: yup.object({
			emailAddress: yup
				.string()
				.email('Must be a valid email')
				.required('Email is required'),
			password: yup.string().required('Password is required'),
			confirmPassword: yup
				.string()
				.required('Confirm your password')
				.oneOf([yup.ref('password'), null], "Passwords don't match"),
			verificationCode: yup.string().required('Code is required'),
		}),
		onSubmit: () => {
			submitValues();
		},
	});

	const submitValues = async () => {
		dispatch(openLoadingIndicator({ text: 'Resetting password...' }));

		try {
			const response = await axios.get(`${API_URL}/Account/forgotPassword`, {
				email: Formik.values.emailAddress,
				password: Formik.values.password,
				verificationCode: Formik.values.verificationCode,
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				Formik.resetForm();
				router.push('/login');
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

	const resendVerification = async () => {
		dispatch(openLoadingIndicator({ text: 'Sending verification code...' }));

		try {
			const response = await axios.get(`${API_URL}/Account/resendVerificationCode`, {
				email: Formik.values.emailAddress,
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
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
				label='Email'
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
				label='Password'
				required
			/>
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
			<TextField
				type='text'
				variant='standard'
				id='verificationCode'
				name='verificationCode'
				fullWidth
				value={Formik.values.verificationCode}
				onChange={Formik.handleChange}
				onBlur={Formik.handleBlur}
				error={Formik.touched.verificationCode && Formik.errors.verificationCode && true}
				helperText={
					Formik.touched.verificationCode &&
					Formik.errors.verificationCode &&
					Formik.errors.verificationCode
				}
				placeholder='Enter your verification code'
				label='Verification code'
				required
			/>

			<Button
				variant='contained'
				type='submit'
				style={{
					height: 60,
				}}
			>
				Update password
			</Button>
			<Divider />
			<center>
				Didn&apos;t receive a code?{' '}
				<span onClick={resendVerification} className={styles.linkText}>
					{' '}
					Resend
				</span>{' '}
				now
			</center>
		</form>
	);
}

export default UpdatePasswordForm;
