import { createSlice } from '@reduxjs/toolkit';

// Actual Slice
export const darkModeSlice = createSlice({
	name: 'darkMode',
	initialState: {
		isDark: true,
	},
	reducers: {
		toggleDarkMode(state) {
			state.isDark = !state.isDark;
			localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
		},
		setDarkMode(state, action) {
			state.isDark = action.payload;
			console.log(action.payload);
		},
	},
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
