import React, { useContext } from "react";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import SkipNextRounded from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRounded from "@mui/icons-material/SkipPreviousRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";


import { MusicPlayerContext } from "./musicPlayerContext";

export default function MusicPlayer() {
  const {
    paused,
    handlePlayPause,
    volume,
    handleVolumeChange,
    songs,
    currentIndex,
    handleFastForward,
    handleRewind,
    handleNextSong,
    handlePreviousSong,
    audioRef,
  } = useContext(MusicPlayerContext);

  

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Typography variant="h6" color="white" sx={{ textAlign: "center", marginBottom: { xs: "1rem", sm: "0" } }}>
        {songs[currentIndex]?.title} - {songs[currentIndex]?.artist}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: { xs: "1rem", sm: "0" } }}>
        <IconButton onClick={handlePreviousSong} style={{ color: "white" }}>
          <SkipPreviousRounded />
        </IconButton>
        <IconButton onClick={handleRewind} style={{ color: "white" }}>
          <FastRewindRounded />
        </IconButton>
        <IconButton onClick={handlePlayPause} style={{ color: "white" }}>
          {paused ? <PlayArrowRounded /> : <PauseRounded />}
        </IconButton>
        <IconButton onClick={handleFastForward} style={{ color: "white" }}>
          <FastForwardRounded />
        </IconButton>
        <IconButton onClick={handleNextSong} style={{ color: "white" }}>
          <SkipNextRounded />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", sm: "25%" },
          marginRight: { xs: "0", sm: "2rem" },
        }}
      >
        <VolumeDownRounded sx={{ color: "white" }} />
        <Slider
          value={volume * 100}
          onChange={handleVolumeChange}
          sx={{ mx: 2, width: { xs: "80%", sm: "15%" }, color: "tomato" }}
        />
        <VolumeUpRounded sx={{ color: "white" }} />
      </Box>

      <audio ref={audioRef} src={songs[currentIndex]?.url} onEnded={handleNextSong} preload="auto"/>

    </Box>
  );
}
