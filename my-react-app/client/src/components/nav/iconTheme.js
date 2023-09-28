
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
          justifyContent: 'center',
          marginLeft:"20vw",
          
          
          
         
        },
      },
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor:'transparent',
          backdropFilter:'blur (1px)',
          borderBottom:'1px solid black)',
          height:'max-content',
          marginTop:"0"
          
          
          
        },
      },
    },
  },
});

export default theme;