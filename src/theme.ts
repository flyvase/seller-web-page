import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3EBC9E',
    },
  },
  typography: {
    fontFamily: 'Hiragino Kaku Gothic ProN',
    h2: {
      fontSize: '48px',
      fontColor: '#333333',
    },
    h4: {
      fontSize: '24px',
      fontColor: '#333333',
    },
    subtitle1: {
      fontSize: '16px',
      fontColor: '#333333',
    },
  },
});
