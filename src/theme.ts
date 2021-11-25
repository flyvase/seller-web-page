import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3EBC9E',
    },
  },
  typography: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    h2: {
      fontSize: '1.5rem',
      lineHeight: '150%',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '150%',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '0.75rem',
      lineHeight: '150%',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});
