import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./iconTheme";
import textBinaryBrewers from "../nav/navIcons/textBinaryBrewers.png"
import { blue } from '@mui/material/colors';
import { color } from '@mui/system';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Podcasts', 'Blog', 'contact', 'login'];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Binary Brewers
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center',}}>
              <Link to={`/${item.toLowerCase()}`} sx={{ textDecoration: 'none', color: 'orange' }}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Place your image here */}
                <img src={textBinaryBrewers} alt="Logo" style={{ height: '48px', marginRight: '16px' ,backgroundColor:'black', borderRadius:'10px',filter: 'invert(100%)'}} />
              </div>
              <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
            
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: 'black' }}
                    onClick={() => navigate(`/${item.toLowerCase()}`)} // Use navigate to change routes
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography></Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Navigation;
