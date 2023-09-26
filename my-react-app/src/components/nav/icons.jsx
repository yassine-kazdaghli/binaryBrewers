import React from 'react';
import '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import podcastIcon from "./navIcons/podcastIcon.png";
import videoIcon from "./navIcons/videoIcon.png";

const Icons = () => {
  return (

    
    <AppBar position="static">
     <Toolbar>
      <Button
      variant="contained"
      color="primary"
      startIcon={<img src={podcastIcon} alt="podcastIcon" />}
    >
   
    </Button>

      <Button
      variant="contained"
      color="primary"
      startIcon={<img src={videoIcon} alt="Icon" />}
        >
   
    </Button>
      
    <Button
      variant="contained"
      color="primary"
      startIcon={<img src="/path-to-your-image.png" alt="Icon" />}
    >
   
    </Button>
     
      </Toolbar>
    </AppBar>
  );
};

export default Icons;