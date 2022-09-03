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

function ConfirmEmailForm() {
	const dispatch = useDispatch();
	const router = useRouter();

	const Formik = useFormik({
		initialValues: {
			emailAddress: 'ogbekagolden@gmail.com',
			verificationCode: '',
		},
		validationSchema: yup.object({
			emailAddress: yup
				.string()
				.email('Must be a valid email')
				.required('Email is required'),
			verificationCode: yup.string().required('Code is required'),
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
				verificationCode: Formik.values.verificationCode,
				userType: Formik.values.userType,
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				Formik.resetForm();
				dispatch(
					openAlert({
						message: 'Verification successful. Proceed to login',
						type: 'success',
					})
				);
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);

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
				Verify Email
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

export default ConfirmEmailForm;
