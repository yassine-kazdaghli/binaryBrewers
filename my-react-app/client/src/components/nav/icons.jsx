import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import podcastIcon from './navIcons/podcastIcon.png';
import videoIcon from './navIcons/videoIcon.png';
import messageIcon from './navIcons/messageIcon.png';
import '../nav/icons.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './iconTheme'; // Import your custom theme
import Login from '../signup/login';
import CardExampleCard from '../podcastCard/podcastCard';
import MusicPlayerSlider from '../mediaPlayer/mediaPlayer';

const Icons = () => {
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" className="navbar" elevation={24} style={{ width: '100vw' }}>
          <div style={{ backdropFilter: 'blur(10px)', backgroundColor: 'transparent', width: '100vw' }}>
            <Toolbar>
              <Link to="/home">
                <Button
                  variant="contained"
                  startIcon={<img src={podcastIcon} alt="podcastIcon" style={{ width: '6rem', height: '6rem' }} />}
                  style={{ background: 'none', marginRight: '2rem' }}
                >
                  {/* Button content */}
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="contained"
                  startIcon={<img src={videoIcon} alt="videoIcon" style={{ width: '6rem', height: '6rem' }} />}
                  style={{ background: 'none', marginRight: '2rem' }}
                >
                  {/* Button content */}
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="contained"
                  startIcon={<img src={messageIcon} alt="messageIcon" style={{ width: '5rem', height: '5rem' }} />}
                  style={{ background: 'none' }}
                >
                  {/* Button content */}
                </Button>
              </Link>
            </Toolbar>
          </div>
        </AppBar>
      </ThemeProvider>
      
      <Routes>
        <Route path="/home" element={<Login/>} />
        <Route path="/about" element={CardExampleCard} />
        <Route path="/signup" element={MusicPlayerSlider} />
      </Routes>
      </>
  );
};

export default Icons;
