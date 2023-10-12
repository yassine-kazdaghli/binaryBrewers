import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import "./index.css";
import Navigation from "./components/nav/nav.jsx";
import Home from "./components/Home";
import DevelopersCard from "./components/carousel/developersCard";
import PodcastPage from "./components/PodcastPage";
import Projects from "./components/Projects";
import Logo from "./components/nav/logo/logo";

import InteractiveBackground from "./components/InterActiveBackground/interActiveBackground.jsx";

import LoginPageContent from "./components/LoginPage";
import MusicPlayerSlider from "./components/mediaPlayer/mediaPlayer";

function App() {
  return (
    <div>
      <InteractiveBackground />
      <Navigation />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/about" element={<DevelopersCard />} />
        <Route path="/login" element={<LoginPageContent />} />
        <Route path="/blog" element={<Projects />} />
      </Routes>
      <MusicPlayerSlider/>
    </div>
  );
}

export default App;
