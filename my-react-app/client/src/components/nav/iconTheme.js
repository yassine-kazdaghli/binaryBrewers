
// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {

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