import React, { createContext, useContext, useState, useRef } from 'react';
import podcastsData from "./mediaData";
export const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(1);
  const [songs, setSongs] = useState(podcastsData); // You can populate this with your song data
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(null);

  

const playPrevious = () => {
    if (currentIndex - 1 >= 0) {
        setCurrentIndex(currentIndex - 1);
    } else {
        setCurrentIndex(songs.length - 1); // Optional: loop to the last song if you're at the start
    }
};

const playNext = () => {
    if (currentIndex + 1 < songs.length) {
        setCurrentIndex(currentIndex + 1);
    } else {
        setCurrentIndex(0); // Optional: loop back to the first song if you're at the end
    }
};


  const handlePlayPause = () => {
    if (paused && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleFastForward = () => {
    audioRef.current.currentTime += 10; // forward by 10 seconds
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 10; // rewind by 10 seconds
  };

  const handleNextSong = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    audioRef.current.play();
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
  };

  const handleVolumeChange = (event, newValue) => {
    const volumeValue = newValue / 100;
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
    setVolume(volumeValue);
  };

  return (
    <MusicPlayerContext.Provider value={{
      paused, handlePlayPause, volume, handleVolumeChange, songs, currentIndex, 
      handleFastForward, handleRewind, handleNextSong, handlePreviousSong, audioRef, playNext,
      playPrevious,
    }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
