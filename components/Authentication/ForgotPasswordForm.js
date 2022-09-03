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

function ForgotPasswordForm() {
	const dispatch = useDispatch();
	const router = useRouter();

	const Formik = useFormik({
		initialValues: {
			emailAddress: '',
		},
		validationSchema: yup.object({
			emailAddress: yup
				.string()
				.email('Must be a valid email')
				.required('Email is required'),
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
			});

			if (response.status === 200) {
				dispatch(openAlert({ message: response.data.message, type: 'success' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				Formik.resetForm();
				router.push('/update-password');
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

			<Button
				variant='contained'
				type='submit'
				style={{
					height: 60,
				}}
			>
				Reset password
			</Button>
			<Divider />
			<center>
				Don&apos;t have an account? <Link href='/register'> Sign up</Link> now
			</center>
		</form>
	);
}

export default ForgotPasswordForm;
