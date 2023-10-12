import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import podcast from'./podcast.jpg';
import { height } from '@mui/system';


export default function CardExampleCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width:'20vw', height:'25vh',backgroundColor:'transparent',color:'whitesmoke',border:'1px solid black' ,borderRadius:'10px'}} >
      <Box sx={{ display: 'flex', flexDirection: 'row' ,gap:'5rem' }}>
        <CardContent sx={{ flex: '1 0 auto', height:'35%' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, color:'whitesmoke' }}>
          <IconButton aria-label="previous" sx={{color:'whitesmoke'}}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" sx={{color:'whitesmoke'}}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" sx={{color:'whitesmoke'}}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        src={podcast}
        alt="Lfrom space album cover"
      />
    </Card>
  );
}