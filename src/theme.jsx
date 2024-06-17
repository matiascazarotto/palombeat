import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
