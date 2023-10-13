
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#009b5c',
            transform: 'rotate(3deg)'
            
          },
          '&:active': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90% )', // Gradient background on click
            backgroundSize: '200% 200%',
            transition: 'background 0.8s',
            scale: '1.1',
            transform: 'rotate(-3deg)'
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
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
    MuiTextField:{
      styleOverrides:{
        root:{
          color: 'white'
        }
      }
    }
  },
});

export default theme;
