import {createTheme} from '@mui/material/styles';
import {blue, deepPurple} from '@mui/material/colors';

const primaryColor = {
  main: blue[700],
  light: blue[300],
  dark: blue[900],
  contrastText: '#ffffff',
};

const secondaryColor = {
  main: deepPurple[500],
  light: deepPurple[300],
  dark: deepPurple[700],
  contrastText: '#ffffff',
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: primaryColor,
    secondary: secondaryColor,
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4f4f4f',
      disabled: '#9e9e9e',
    },
  },
    typography: {
        button: {
            textTransform: 'none',
        },
        fontFamily: `"TheSansArabic", sans-serif`,
    },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: primaryColor,
    secondary: secondaryColor,
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      disabled: '#777777',
    },
  },
    typography: {
        button: {
            textTransform: 'none',
        },
        fontFamily: `"TheSansArabic", sans-serif`,
    },
});
