import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import podcastIcon from './navIcons/podcastIcon.png';
import videoIcon from './navIcons/videoIcon.png';
import messageIcon from './navIcons/messageIcon.png';
import '../nav/icons.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './iconTheme'; // Import your custom theme

const Icons = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Button
            variant="contained"
            color="warning"
            startIcon={<img src={podcastIcon} alt="podcastIcon" style={{ width: '20vh', height: '20vh' }} />}
          >
            
          </Button>

          <Button
            variant="contained"
            color="warning"
            startIcon={<img src={videoIcon} alt="videoIcon" style={{ width: '20vh', height: '20vh' }} />}
          >
           
          </Button>

          <Button
            variant="contained"
            color="warning"
            startIcon={<img src={messageIcon} alt="messageIcon" style={{ width: '20vh', height: '20vh' }} />}
          >
            
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Icons;