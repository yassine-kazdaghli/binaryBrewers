import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import "../podcastCard/podcastCard.css";
import { PauseRounded, PlayArrow as PlayArrowIcon, SkipPrevious as SkipPreviousIcon, SkipNext as SkipNextIcon } from '@mui/icons-material';
import { useMusicPlayer } from '../mediaPlayer/musicPlayerContext';
import podcastImage1 from "../podcastCard/images/podcastImage1.jpg";
import podcastImage2 from "../podcastCard/images/podcastImage2.jpg";
import podcastImage3 from "../podcastCard/images/podcastImage3.jpg";

const CardExampleCard = () => {
  const { songs, currentIndex, paused,  handlePlayPause } = useMusicPlayer();

  return (
    <div className="card-example-card">
      <h1>Podcasts</h1>
      <Box className="podcasts"> {/* Apply the 'podcasts' class to the container */}
        {/* Podcast Card 1 */}
        <Card
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
              src={podcastImage3}
              alt="Podcast Cover"
              style={{ width: '100%', maxHeight: '200px' }}
            />
            <Typography component="div" variant="h5">
              {songs[currentIndex]?.title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
              {songs[currentIndex]?.artist}
            </Typography>
          </CardContent>
          <Box>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {!paused ?  <PauseRounded sx={{ height: 38, width: 38 }}  /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
            </IconButton>
          </Box>
        </Card>

        {/* Podcast Card 2 */}
        <Card
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
              src={podcastImage2}
              alt="Podcast Cover"
              style={{ width: '100%', maxHeight: '200px' }}
            />
            <Typography component="div" variant="h5">
              {songs[currentIndex]?.title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
              {songs[currentIndex]?.artist}
            </Typography>
          </CardContent>
          <Box>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {!paused ?  <PauseRounded sx={{ height: 38, width: 38 }}  /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
            </IconButton>
          </Box>
        </Card>

        {/* Podcast Card 3 */}
        <Card
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
              src={podcastImage1}
              alt="Podcast Cover"
              style={{ width: '100%', maxHeight: '200px' }}
            />
            <Typography component="div" variant="h5">
              {songs[currentIndex]?.title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
              {songs[currentIndex]?.artist}
            </Typography>
          </CardContent>
          <Box>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {!paused ?  <PauseRounded sx={{ height: 38, width: 38 }}  /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
            </IconButton>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default CardExampleCard;
