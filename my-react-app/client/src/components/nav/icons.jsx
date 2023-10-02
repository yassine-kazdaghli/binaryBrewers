import React, { useState } from 'react';
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
import App from '../../App';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for the burger menu
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Icons = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the drawer's visibility

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" className="navbar" elevation={1} style={{ width: '100vw', marginTop: '0' }}>
          <div style={{ backdropFilter: 'blur(1px)', backgroundColor: 'transparent', width: '100vw', margin: '0 auto' }}>
            <Toolbar>
              {/* Burger menu button */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer} // Open/close the drawer when clicked
                className="burger-menu"
              >
                <MenuIcon />
              </IconButton>

              {/* Link to the home page */}
              <Link to="/">
                <Tooltip title="Home" arrow>
                  <Button
                    variant="contained"
                    startIcon={<img src={podcastIcon} alt="podcastIcon" style={{ width: '6rem', height: '6rem' }} />}
                    style={{
                      marginRight: '2rem',
                      backgroundColor: 'transparent',
                      backdropFilter: 'blur(1px)',
                    }}
                    className="shrink-button"
                  >
                    {/* Button content */}
                  </Button>
                </Tooltip>
                <span className="tooltip-center"></span>
              </Link>

              {/* Link to Podcasts */}
              <Link to="/podcasts">
                <Tooltip title="Podcasts" arrow>
                  <Button
                    variant="contained"
                    startIcon={<img src={videoIcon} alt="podcastIcon" style={{ width: '6rem', height: '6rem' }} />}
                    style={{
                      marginRight: '2rem',
                      backgroundColor: 'transparent',
                      backdropFilter: 'blur(1px)',
                    }}
                    className="shrink-button"
                  >
                    {/* Button content */}
                  </Button>
                </Tooltip>
                <span className="tooltip-center"></span>
              </Link>

              {/* Link to About */}
              <Link to="/about">
                <Tooltip title="About" arrow>
                  <Button
                    variant="contained"
                    startIcon={<img src={messageIcon} alt="videoIcon" style={{ width: '6rem', height: '6rem' }} />}
                    style={{
                      marginRight: '2rem',
                      backgroundColor: 'transparent',
                      backdropFilter: 'blur(1px)',
                    }}
                    className="shrink-button"
                  >
                    {/* Button content */}
                  </Button>
                </Tooltip>
                <span className="tooltip-center"></span>
              </Link>

              {/* Link to Sign Up */}
              <Link to="/signup">
                <Tooltip title="Sign Up" arrow>
                  <Button
                    variant="contained"
                    startIcon={<img src={messageIcon} alt="messageIcon" style={{ width: '5rem', height: '5rem' }} />}
                    style={{
                      backgroundColor: 'transparent',
                      backdropFilter: 'blur(1px)',
                    }}
                    className="shrink-button"
                  >
                    {/* Button content */}
                  </Button>
                </Tooltip>
                <span className="tooltip-center"></span>
              </Link>
            </Toolbar>
          </div>
        </AppBar>

        {/* Drawer for the burger menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <Link to="/podcasts">
              <ListItem button>
                <ListItemText primary="Podcasts" />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button>
                <ListItemText primary="Video" />
              </ListItem>
            </Link>
            <Link to="/signup">
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </ThemeProvider>
      
      <Routes>
        <Route path="/podcasts" element={<Login/>} />
        <Route path="/about" element={<Login/>} />
        <Route path="/signup" element={<MusicPlayerSlider/>} />
      </Routes>
      </>
  );
};

export default Icons;
