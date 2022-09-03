import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#3F3F3F',
		},
		secondary: {
			main: '#C8C8C8',
		},
		success: {
			main: '#88C8CB',
		},
		error: {
			main: '#C08C8C',
		},
		white: {
			main: '#fff',
			contrastText: '#000',
		},
		alternate: {
			main: '#D8C4A4',
			contrastText: '#000',
		},
	},
	typography: {
		fontFamily: ['Manrope', ' sans-serif'].join(','),
		fontSize: 15,
	},
});

export const colors = {
	primary: '#FFF4D6',
	white: '#ffffff',
	black: '#000000',
	red: '#d9534f',
};
