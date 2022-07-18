import { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';

interface Props {
  timerStarted: boolean;
  onTimerComplete: Function;
}

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; secondsRemaining: number },
) {
  return (
    <Box sx={{ display: 'flex', height: '140px' }}>
      <Box sx={{ margin: 'auto', position: 'relative', display: 'flex' }}>
        <Box>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              size={80}
              variant="determinate"
              thickness={6}
              value={props.value}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" component="div" color="text.secondary">
                {`${Math.round(props.secondsRemaining)}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>seconds</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function TypingTimer({ timerStarted, onTimerComplete }: Props) {
  const [progress, setProgress] = useState<number>(60);

  useEffect(() => {
    if (timerStarted) {
      // start timer to update every second
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          // run the callback if timer is complete
          if (prevProgress === 0) {
            clearInterval(timer);
            onTimerComplete();
          }
          // subtract one second
          return prevProgress <= 0 ? 0 : prevProgress - 1;
        });
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
    // eslint-disable-next-line
  }, [timerStarted]);

  return (
    <CircularProgressWithLabel
      value={(progress / 60) * 100}
      secondsRemaining={progress}
    />
  );
}
