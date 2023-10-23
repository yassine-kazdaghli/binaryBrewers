import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { SkipPrevious as SkipPreviousIcon, PlayArrow as PlayArrowIcon, SkipNext as SkipNextIcon } from '@mui/icons-material';
import { useMusicPlayer } from '../mediaPlayer/musicPlayerContext';
import PauseRounded from '@mui/icons-material/PauseRounded';

const CardExampleCard = () => {
  const { songs, currentIndex, isPlaying, playPrevious, playNext, handlePlayPause } = useMusicPlayer();

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', // Changed to column for better organization
        width: '80%', 
        height: 'auto', // Use auto to ensure content fits
        backgroundColor: 'transparent', 
        color: 'whitesmoke', 
        border: '1px solid #333', 
        borderRadius: '15px',
        overflow: 'visible',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '1rem'
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography component="div" variant="h5">
          {songs[currentIndex]?.title}
        </Typography>
        <Typography variant="subtitle1" color="white" component="div">
          {songs[currentIndex]?.artist}
        </Typography>
      </CardContent>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton aria-label="previous" onClick={playPrevious}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={handlePlayPause}>
          {isPlaying ?  <PauseRounded sx={{ height: 38, width: 38 }}  /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
        </IconButton>
        <IconButton aria-label="next" onClick={playNext}>
          <SkipNextIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default CardExampleCard;
