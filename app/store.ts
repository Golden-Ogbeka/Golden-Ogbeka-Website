import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { darkModeSlice } from './slices/darkModeSlice';

const makeStore = configureStore({
	reducer: {
		[darkModeSlice.name]: darkModeSlice.reducer,
	},
	devTools: true,
});

export const wrapper = createWrapper(() => makeStore);

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
