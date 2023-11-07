import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { SkipPrevious as SkipPreviousIcon, PlayArrow as PlayArrowIcon, SkipNext as SkipNextIcon } from '@mui/icons-material';
import { useMusicPlayer } from '../mediaPlayer/musicPlayerContext';
import PauseRounded from '@mui/icons-material/PauseRounded';

const CardExampleCard = () => {
  const { songs, currentIndex, paused, playPrevious, playNext, handlePlayPause } = useMusicPlayer();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, // Set a max width for the card
        mx: 'auto', // Center the card horizontally
        my: 2, // Margin top & bottom for spacing
        background: 'linear-gradient(145deg, #1e1e1e, #222222)', // Stylish gradient background
        boxShadow: '5px 5px 15px #121212, -5px -5px 15px #2a2a2a', // Neumorphism effect
        color: '#fff', // Text color for light theme
        borderRadius: '20px', // Rounder corners
        overflow: 'hidden', // Ensures nothing overflows
        '&:hover': {
          boxShadow: '10px 10px 20px #0f0f0f, -10px -10px 20px #2f2f2f', // Deeper shadow on hover for interactive effect
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: 'white' }}>
          {songs[currentIndex]?.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
          {songs[currentIndex]?.artist}
        </Typography>
      </CardContent>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          pb: 2, // Padding bottom for spacing
        }}
      >
        <IconButton aria-label="previous" onClick={playPrevious} sx={{ color: 'white' }}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={handlePlayPause} sx={{ color: 'white', '&:hover': { transform: 'scale(1.1)' } }}>
          {!paused ? <PauseRounded sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
        </IconButton>
        <IconButton aria-label="next" onClick={playNext} sx={{ color: 'white' }}>
          <SkipNextIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default CardExampleCard;
