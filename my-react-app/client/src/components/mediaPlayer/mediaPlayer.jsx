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
import { useMusicPlayer } from "./musicPlayerContext";
import ThemeContext from "../../ThemeContext";
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

  const { currentTheme } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:
          currentTheme === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Typography variant="h6" color="white">
        {songs[currentIndex]?.title} - {songs[currentIndex]?.artist}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          width: "25%",
          marginRight: "2rem",
        }}
      >
        <VolumeDownRounded sx={{ color: "white" }} />
        <Slider
          value={volume * 100}
          onChange={handleVolumeChange}
          sx={{ mx: 2, width: "15%", color: "tomato" }}
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
