
import React from "react";
import MediaPlayer from "./components/mediaPlayer/mediaPlayer";
import MusicPlayerSlider from "./components/mediaPlayer/mediaPlayer";
import CardExampleCard from "./components/podcastCard/podcastCard";
import Navigation from "./components/nav/nav";
import Login from "./components/signup/login";
import DevelopersCard from "./components/carousel/developersCard";
import Logo from "./components/nav/logo/logo.jsx"
import { Route, Routes } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <Navigation />

      <div>
        <Routes>
          <Route path="/podcasts" element={<Login />} />
          <Route path="/about" element={<Login />} />
          <Route path="/signup" element={<MusicPlayerSlider />} />
        </Routes>
      </div>
      <Logo/>
      {/* <CardExampleCard/> */}
      {/* <MediaPlayer/> */}
      <div className="developers">
        <DevelopersCard />
      </div>
      <div className="body">
        
        <div className="cards">
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
        </div>
        <Login />
        <MediaPlayer />
      </div>

    </>
  );
}

export default App;
