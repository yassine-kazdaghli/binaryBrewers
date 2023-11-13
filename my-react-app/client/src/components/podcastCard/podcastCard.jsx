import React from 'react';
import "../podcastCard/podcastCard.css";
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import podcastsData from '../mediaPlayer/mediaData.js'; // Update the path to the correct location
import { PauseRounded, PlayArrow as PlayArrowIcon } from '@mui/icons-material';
import { useMusicPlayer } from '../mediaPlayer/musicPlayerContext';
import podcastImage1 from "../podcastCard/images/podcastImage1.jpg";
import podcastImage2 from "../podcastCard/images/podcastImage2.jpg";
import podcastImage3 from "../podcastCard/images/podcastImage3.jpg";


const CardExampleCard = () => {
  const { handlePlayPause, paused, currentPlaying } = useMusicPlayer();

  return (
    <>
      <h1 className='header-about'>Take Your Pick!</h1>
      <div className="card-example-card">
        <Box className="podcasts">
          {podcastsData.map((podcast, index) => (
            <Card
              key={index} // Unique key for each card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                height: 'auto',
                backgroundColor: 'transparent',
                color: 'whitesmoke',
                border: '1px solid #333',
                borderRadius: '15px',
                overflow: 'visible',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
              <img
                   src={podcast.image} // Use a default image if id not found
                  alt="Podcast Cover"
                  style={{ width: '100%', maxHeight: '200px' }}
                />
                {/* Dynamic content for each card */}
                <Typography component="div" variant="h5">
                  {podcast.title}
                </Typography>
                <Typography variant="subtitle1" color="white" component="div">
                  {podcast.artist}
                </Typography>
              </CardContent>
              <Box>
              <IconButton aria-label="play/pause" onClick={() => handlePlayPause(podcast.url)}>
          {currentPlaying === podcast.url && !paused ? <PauseRounded /* ...props */ /> : <PlayArrowIcon /* ...props */ />}
        </IconButton>
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
}

export default CardExampleCard;
