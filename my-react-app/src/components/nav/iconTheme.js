
// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '60%', // Makes the button round
          /* You can also specify a fixed width and height for a consistent circle */
          /* width: '50px',
          height: '50px', */
        },
      },
    },
  },
});

export default theme;