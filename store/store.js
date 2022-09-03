import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { alertSlice } from './slices/alertSlice';
import { loadingIndicatorSlice } from './slices/loadingIndicatorSlice';

const makeStore = () =>
	configureStore({
		reducer: {
			[alertSlice.name]: alertSlice.reducer,
			[loadingIndicatorSlice.name]: loadingIndicatorSlice.reducer,
		},
		devTools: true,
	});

export const wrapper = createWrapper(makeStore);
