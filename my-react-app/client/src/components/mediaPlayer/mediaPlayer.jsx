import React, { useState, useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle, FaStepBackward, FaStepForward } from 'react-icons/fa';
import axios from 'axios';
import './mediaPlayer.scss';

function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(50);
  const [songInfo, setSongInfo] = useState({
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '3:30',
  });


  // Define a function to fetch music data
  const fetchMusicData = async () => {
    
    
    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://billboard-api2.p.rapidapi.com/hot-100',
        params: {
          date: '2019-05-11',
          range: '1-10',
        },
        headers: {
          'X-RapidAPI-Key': 'b51dbed13amsh697095b7d0b8523p154809jsnaeda40cd75d7',
          'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
        },
      }); // Close the axios request here

      // Update the songInfo state with fetched data
      setSongInfo({
        title: response.data[0].title,
        artist: response.data[0].artist,
        duration: `${response.data[0]["weeks on chart"]} weeks on chart`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch music data when the component mounts
    fetchMusicData();
  }, []); // The empty array [] ensures this effect runs only once when the component mounts

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
  };

  return (
    <div className="media-player">
      <div className="media-cover">
        <img src="album-cover.jpg" alt="Album Cover" />
      </div>
      <div className="media-info">
        <h2>{songInfo.title}</h2>
        <p>{songInfo.artist}</p>
      </div>
      <div className="media-controls">
        <button className="control-button"><FaStepBackward /></button>
        {isPlaying ? (
          <button className="control-button" onClick={togglePlayPause}><FaPauseCircle /></button>
        ) : (
          <button className="control-button" onClick={togglePlayPause}><FaPlayCircle /></button>
        )}
        <button className="control-button"><FaStepForward /></button>
      </div>
      <div className="media-progress">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="progress-slider"
        />
        <div className="progress-time">
          <span>0:00</span>
          <span>{songInfo.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
