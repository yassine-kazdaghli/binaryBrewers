import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import "./index.css";
import Navigation from "./components/nav/nav.jsx";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import DevelopersCard from "./components/carousel/developersCard";
import PodcastPage from "./components/PodcastPage";
import Projects from "./components/Projects";
import Logo from "./components/nav/logo/logo";
import Particles from "react-particles";

function App() {
  const particlesConfig = {
    particles: {
      number: {
        value: 100,
      },
      size: {
        value: 3,
      },
    },
  };
  return (
    <div>
      <div className="interactive-background">
        <Particles params={particlesConfig} />
      </div>

      <Navigation />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/about" element={<DevelopersCard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<Projects />} />
      </Routes>

     
    </div>
  );
}

export default App;