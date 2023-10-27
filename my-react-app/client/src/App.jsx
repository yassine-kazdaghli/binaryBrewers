import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./components/nav/nav.jsx";
import Home from "./components/Home";
import DevelopersCard from "./components/carousel/developersCard";
import PodcastPage from "./components/PodcastPage";
import Projects from "./components/Projects";
import Logo from "./components/nav/logo/logo";
import ContactPage from "./components/ContactPage";
import { ThemeProvider } from "./ThemeContext";
import axios from "axios";
import Cookies from "js-cookie";

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import InteractiveBackground from "./components/InterActiveBackground/interActiveBackground";
import LoginPageContent from "./components/LoginPage";
import MusicPlayerSlider from "./components/mediaPlayer/mediaPlayer";
import { AuthProvider } from "./AuthContext";
import { MusicPlayerProvider } from "./components/mediaPlayer/musicPlayerContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const lightTheme = createTheme({ palette: { mode: "light" } });
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);
  return (
    <ThemeProvider value={{ currentTheme, toggleTheme }}>
      <MUIThemeProvider
        theme={currentTheme === "light" ? lightTheme : darkTheme}
      >
        <AuthProvider>
          {" "}
          {/* Wrap your main component tree with AuthProvider */}
          <MusicPlayerProvider>
            <div>
            <InteractiveBackground currentTheme={currentTheme} toggleTheme={toggleTheme} />
              <Navigation />
              <Routes>
                <Route path="/" element={<Logo />} />
                <Route path="/home" element={<Home />} />
                <Route path="/podcasts" element={<PodcastPage />} />
                <Route path="/about" element={<DevelopersCard />} />
                <Route path="/login" element={<LoginPageContent />} />
                <Route path="/blog" element={<Projects />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <MusicPlayerSlider />
            </div>
          </MusicPlayerProvider>
        </AuthProvider>{" "}
        {/* End of AuthProvider */}
      </MUIThemeProvider>
    </ThemeProvider>
  );
}

export default App;
