import React from 'react';

import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { SkipPrevious as SkipPreviousIcon, PlayArrow as PlayArrowIcon, SkipNext as SkipNextIcon } from '@mui/icons-material';
import podcast from './podcast.jpg';
import { useMusicPlayer } from '../mediaPlayer/musicPlayerContext';
import PauseRounded from '@mui/icons-material/PauseRounded';

const CardExampleCard = () => {
  const { songs, currentIndex, isPlaying, playPrevious, playNext, handlePlayPause } = useMusicPlayer();

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        width: '80%', 
        height: '30vh', 
        flexDirection:'row',
        backgroundColor: 'transparent', 
        color: 'whitesmoke', 
        border: '1px solid #333', 
        borderRadius: '15px',
        overflow: 'hidden',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '2rem',
          width: '75%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {songs[currentIndex]?.title}
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            {songs[currentIndex]?.artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '30%', objectFit: 'center' }}
        src={podcast}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default CardExampleCard;
