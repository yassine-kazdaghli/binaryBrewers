
// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Makes the button round
          /* You can also specify a fixed width and height for a consistent circle */
          width: '7rem',
          height: '7rem',
          margin: '0 auto',
          
         
        },
      },
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor:'transparent',
          backdropFilter:'blur 10px',
          borderBottom:'1px solid rgba(255,255,255)',
          height:'10rem',
          
          
        },
      },
    },
  },
});

export default theme;