import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { alertSlice } from './slices/alertSlice';
import { darkModeSlice } from './slices/darkModeSlice';
import { loadingIndicatorSlice } from './slices/loadingIndicator';

const makeStore = configureStore({
	reducer: {
		[alertSlice.name]: alertSlice.reducer,
		[loadingIndicatorSlice.name]: loadingIndicatorSlice.reducer,
		[darkModeSlice.name]: darkModeSlice.reducer,
	},
	devTools: true,
});

export const wrapper = createWrapper(() => makeStore);

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
