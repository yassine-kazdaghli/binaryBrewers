import React, { createContext, useContext, useState, useRef } from 'react';
import podcastsData from "./mediaData";
export const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(1);
  const [songs] = useState(podcastsData); // You can populate this with your song data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPlaying, setCurrentPlaying] = useState(null); // New state for tracking current playing podcast URL
  const audioRef = useRef(null);

  

  const playPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + songs.length) % songs.length);
  };

  const playNext = () => {
    setCurrentIndex(prev => (prev + 1) % songs.length);
  };

  const handlePlayPause = (podcastUrl) => {
    if (audioRef.current) {
      if (currentPlaying !== podcastUrl) {
        audioRef.current.src = podcastUrl;
        audioRef.current.play();
        setCurrentPlaying(podcastUrl);
        setPaused(false);
      } else {
        if (paused) {
          audioRef.current.play();
          setPaused(false);
        } else {
          audioRef.current.pause();
          setPaused(true);
        }
      }
    }
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
    if (audioRef.current) {
        audioRef.current.play();
    }
};

const handlePreviousSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    if (audioRef.current) {
        audioRef.current.play();
    }
};
  const handleVolumeChange = (event, newValue) => {
    const volumeValue = newValue / 100;
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
    setVolume(volumeValue);
  };
  

  return (
    <MusicPlayerContext.Provider value={{ currentPlaying,
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
