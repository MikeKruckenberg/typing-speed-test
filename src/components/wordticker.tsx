import { Box } from '@mui/material';

import WordBox from './wordbox';
import WordChip from './wordchip';

interface Props {
  remainingWords: string[];
  completedWords: string[];
}

export default function WordTicker({ remainingWords, completedWords }: Props) {
  return (
    <Box
      key="word-ticker"
      sx={{
        height: '44px',
        marginBottom: '10px',
        borderRadius: '8px',
        border: '1px solid black',
      }}
    >
      <WordBox width="40%" float="left">
        <>
          {completedWords.map((word: string, index: number) => (
            <WordChip key={word} word={word} float="right" />
          ))}
        </>
      </WordBox>
      <WordBox width="60%" float="right">
        <>
          {remainingWords.map((word: string, index: number) => (
            <WordChip key={word} word={word} decorate={index === 0} />
          ))}
        </>
      </WordBox>
    </Box>
  );
}
