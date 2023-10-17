import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import SkipNextRounded from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRounded from "@mui/icons-material/SkipPreviousRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { useContext } from "react";
import { MyContext } from "./mediaContext";

const mockFetchSongsFromCloudinary = async () => {
  // Placeholder for now
  return [
    {
      title: "Ein Musikalischer Spass - II. Menuetto and Trio",
      artist: "W.A Mozart",
      url: "https://res.cloudinary.com/dl1qfqyaw/video/upload/v1697450484/W.A_Mozart_-_Ein_Musikalischer_Spass_-_II._Menuetto_and_Trio_gjvpnc.mp3",
    },
     {
         title: "Moonlight Sonata Op. 27 No. 2 - III. Presto",
         artist: "Paul Pitman",
         url:"https://files.musopen.org/recordings/4f63c71d-fd57-4665-998b-1005891b439e.mp3?filename=Paul+Pitman+-+Moonlight+Sonata+Op.+27+No.+2+-+III.+Presto.mp3&preview"
     },
    // You can add more songs to test the next/previous functionality...
  ];
};

export default function MusicPlayer() {
  const { songs, setSongs } = useContext(MyContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    const getSongs = async () => {
      const fetchedSongs = await mockFetchSongsFromCloudinary();
      setSongs(fetchedSongs);
    };

    getSongs();
  }, []);

  const handlePlayPause = () => {
    if (paused) {
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
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
  };

  const handleVolumeChange = (event, newValue) => {
    const newVolume = newValue / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      {/* Song details */}
      <Typography variant="h6" color="white">
        {songs[currentIndex]?.title} - {songs[currentIndex]?.artist}
      </Typography>

      {/* Playback controls */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handlePreviousSong} style={{color:"white"}}>
          <SkipPreviousRounded />
        </IconButton>
        <IconButton onClick={handleRewind} style={{color:"white"}}>
          <FastRewindRounded />
        </IconButton>
        <IconButton onClick={handlePlayPause} style={{color:"white"}}>
          {paused ? <PlayArrowRounded /> : <PauseRounded />}
        </IconButton>
        <IconButton onClick={handleFastForward} style={{color:"white"}}>
          <FastForwardRounded />
        </IconButton>
        <IconButton onClick={handleNextSong} style={{color:"white"}}>
          <SkipNextRounded />
        </IconButton>
      </Box>

      {/* Volume control */}
      <Box sx={{ display: "flex", alignItems: "center", width: "25%",marginRight:"2rem" }}>
        <VolumeDownRounded sx={{ color: "white" }} />
        <Slider
        style={{color:"tomato", width:"15%"}}
          value={volume * 100}
          onChange={handleVolumeChange}
          sx={{ mx: 2, color:"secondary"  }}
        />
        <VolumeUpRounded sx={{ color: "white" }} />
      </Box>

      <audio
        ref={audioRef}
        src={songs[currentIndex]?.url}
        onEnded={handleNextSong}
        preload="auto"
      />
    </Box>
  );
}
