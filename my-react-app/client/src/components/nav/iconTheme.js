
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'whitesmoke',
          backdropFilter: 'blur(1px)',
          borderBottom: '1px solid black',
          height: 'max-content',
          marginTop: "0px",
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          flexGrow: '1',
          
        },
      },
    },
  },
});

export default theme;
