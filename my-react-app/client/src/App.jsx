
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes
import './index.css';
import Navigation from './components/nav/nav.jsx';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import DevelopersCard from './components/carousel/developersCard';
import MusicPlayerSlider from './components/mediaPlayer/mediaPlayer';

import PodcastPage from './components/PodcastPage';

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes> {/* Use Routes component */}
     
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/podcasts" element={<PodcastPage/>} />
        <Route path="/about" element={<DevelopersCard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* Your other components */}
      <MusicPlayerSlider />
    </div>
  );
}

export default App;
