import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// import podcast from './podcast.jpg';
import { useContext } from 'react';
import { MyContext } from './mediaPlayer/mediaContext';



const media = [
    
    {
        title: "Moonlight Sonata Op. 27 No. 2 - III. Presto",
        artist: "Paul Pitman",
        url: "https://files.musopen.org/recordings/4f63c71d-fd57-4665-998b-1005891b439e.mp3?filename=Paul+Pitman+-+Moonlight+Sonata+Op.+27+No.+2+-+III.+Presto.mp3&preview"
    },
];
export default function CardExampleCard() {
  const { songs,setSongs } = useContext(MyContext);
  console.log(songs)
  const theme = useTheme();
  
  const track = media[0]; // Using the first song as the default track for this example

  const playPodcast = () => {
      setSongs(media); // Changed to track.url
      console.log("Play podcast clicked!");
      console.log(track.url) // This should log when the play button is clicked.
  };

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        width: '25vw', 
        height: '30vh', 
        backgroundColor: 'transparent', 
        color: 'whitesmoke', 
        border: '1px solid #333', 
        borderRadius: '15px',
        overflow: 'hidden'
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
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* You can add functionality for these buttons if needed */}
          <IconButton aria-label="previous" sx={{color:'whitesmoke', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={playPodcast} sx={{color:'whitesmoke', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>

            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" sx={{color:'whitesmoke', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '100%', objectFit: 'cover' }}
        // src={podcast}
        alt="Live from space album cover"
      />
    </Card>
  );
}