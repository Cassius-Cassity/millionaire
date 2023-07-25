import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2C3E50', // Custom primary color
          },
          secondary: {
            main: '#3498DB', // Custom secondary color
          },
          background: {
            default: '#FFFFFF', // Custom background color
          },
          text: {
            primary: '#333333', // Custom text color
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
});

export default theme;