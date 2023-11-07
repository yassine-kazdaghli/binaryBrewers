import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import textBinaryBrewers from "./navIcons/textBinaryBrewers.png";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ThemeContext from "../../ThemeContext.js";
import { useContext } from "react";



const drawerWidth = 240;
const navItems = ["About", "Podcasts", "Blog", "contact", "login"];

function Navigation(props) {
  const { window } = props;
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Binary Brewers
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={`/${item.toLowerCase()}`} sx={{ textDecoration: "none" }}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = 
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={"/"}>
              <img
                src={textBinaryBrewers}
                alt="Logo"
                style={{
                  height: "36px",
                  marginRight: "16px",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  filter: "invert(100%)",
                  
                }}
              />
            </Link>
          </div>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "white" }}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {currentTheme === "dark" ? <Brightness7Icon sx={{ marginRight: 1 }} /> : <Brightness4Icon sx={{ marginRight: 1 }} />}
            <Switch
              checked={currentTheme === "dark"}
              onChange={handleThemeToggle}
              inputProps={{ 'aria-label': 'controlled' }}
            />
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
  );
}

export default Navigation;
