import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
    palette: {
        primary: {
            dark: '#000000',
            main: '#83664a',
            light: '#ae692b',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#dfb65a',
            light: '#ecd8a5',
            contrastText: '#000000',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontFamily: 'Paytone One, sans-serif',
            letterSpacing: '1px',
            fontSize: '2rem',
        },
    },
});
