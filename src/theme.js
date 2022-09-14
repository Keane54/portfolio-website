import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#FF8E8A',
      main: '#FC5B5D',
    },
    secondary: {
      main: '#ff8e8a',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#66bb6a'
    },
    action: {
      disabledBackground: '#EEF5FA',
      disabled: '#889DB4'
    }
  }, typography: {
    "fontFamily": `'League Spartan', 'sans-serif'`,
    fontWeightRegular: 300
  }
});

export default theme;