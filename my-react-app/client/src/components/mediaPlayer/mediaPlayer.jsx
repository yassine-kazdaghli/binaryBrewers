import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  zIndex: -1,
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background: 'linear-gradient(to bottom, rgba(1, 1, 8, 0.5), rgba(0, 0, 8, 0.2))',
  },
});

const FixedPlayer = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',  
  height:'25vh',
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(1px)',
}));

const CoverImage = styled('div')({
  width: 90,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const theme = useTheme();
  const audioRef = React.useRef(null);
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [volume, setVolume] = React.useState(0.5);

  const handlePlayPause = () => {
    if (paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleTimeUpdate = () => {
    setPosition(audioRef.current.currentTime);
  };

  const handleVolumeChange = (event, newValue) => {
    audioRef.current.volume = newValue / 100;
    setVolume(newValue / 100);
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    setDuration(audio.duration);

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <FixedPlayer>
      <Box sx={{ width: '100vw', overflow: 'hidden', display: 'flex', justifySelf: 'flex-end', height: 'max-content' }}>
        <Widget sx={{ width: '100vw' }}>
          <Box sx={{ width: '100vw', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>some song(Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash;
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 8%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: -2 }}>
            <TinyText>{formatDuration(Math.round(position))}</TinyText>
            <Box sx={{ flex: 1, color: 'text.primary' }}>
              <TinyText align="right">{formatDuration(Math.round(duration))}</TinyText>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <IconButton onClick={handlePlayPause} aria-label="play">
              {paused ? <PlayArrowRounded /> : <PauseRounded />}
            </IconButton>
            <audio 
              ref={audioRef} 
              src="https://www.loc.gov/item/jukebox-128726/raw" 
              onTimeUpdate={handleTimeUpdate}
            ></audio>
          </Box>
        </Widget>
      </Box>
    </FixedPlayer>
  );
}
