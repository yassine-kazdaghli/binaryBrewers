
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
          marginTop:"0",
          fonts: {
            primary: 'Press Start 2P, monospace', // Replace 'Press Start 2P' with the desired Google Font
          },
          // Other theme properties can be defined here
          globalStyles: `
            @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            /* You can add other global styles here if needed */
          `,
          
          
        },
      },
    },
  },
});

export default theme;