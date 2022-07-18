import { Typography, Button } from '@mui/material';

interface Props {
  correctWords: string[];
  incorrectWords: string[];
  characterCount: number;
}

export default function Results({
  correctWords,
  incorrectWords,
  characterCount,
}: Props) {
  return (
    <div>
      <Typography variant="h4">Typing Test Results</Typography>
      <Typography>Words per minute: {correctWords.length}</Typography>
      <Typography>Characters per minute: {characterCount}</Typography>
      <Typography>Mistakes: {incorrectWords.length}</Typography>
      <Typography>Correct words: {correctWords.join(', ')}</Typography>
      <Typography>Incorrect words: {incorrectWords.join(', ')}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          window.location.reload();
        }}
      >
        Try Again
      </Button>
    </div>
  );
}
