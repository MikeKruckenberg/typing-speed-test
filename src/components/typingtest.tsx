import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Box, TextField } from '@mui/material';

import { randomizedWordList } from '../lib/wordbank';
import Results from './results';
import Timer from './timer';
import WordTicker from './wordticker';

const remainingWords: string[] = randomizedWordList();
let completedWords: string[] = [];
let correctWords: string[] = [];
let incorrectWords: string[] = [];

export default function TypingTest() {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<string>(remainingWords[0]);
  const [currentTypingInput, setCurrentTypingInput] = useState<string>('');
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  // keep track of what is entered in the input box
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTypingInput(e.target.value);
    // start the timer on the first character entered
    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  // when key is pressed check if it is space or enter
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === ' ' || e.key === 'Enter') {
      processCompletedWord();
    }
  };

  const processCompletedWord = (): void => {
    // compare currentWord to currentTypingInput for correct/incorrect
    const typingInput: string = currentTypingInput.trim();
    if (typingInput === '') {
      return;
    }
    currentWord === typingInput
      ? correctWords.push(currentWord)
      : incorrectWords.push(`${currentWord} (${typingInput})`);

    // set the character count
    setCharacterCount(
      (prevCharacterCount: number) => prevCharacterCount + typingInput.length,
    );

    // add the word to the completed list
    completedWords.unshift(currentWord);

    // remove the word from the remaining list
    remainingWords.shift();

    // set the current word for testing correctness
    setCurrentWord(remainingWords[0]);

    // empty the text area
    setCurrentTypingInput('');
  };

  // show results once the timer completes
  const onTimerComplete = (): void => {
    setShowResults(true);
  };

  return (
    <Box>
      <WordTicker
        completedWords={completedWords}
        remainingWords={remainingWords}
      />
      <Box sx={{ height: '80px' }}>
        <Box sx={{ width: '60%', float: 'right' }}>
          <TextField
            variant="outlined"
            value={currentTypingInput}
            placeholder="start typing to begin"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={showResults}
            autoFocus
          />
        </Box>
      </Box>
      {showResults ? (
        <Results
          correctWords={correctWords}
          incorrectWords={incorrectWords}
          characterCount={characterCount}
        />
      ) : (
        <Timer timerStarted={timerStarted} onTimerComplete={onTimerComplete} />
      )}
    </Box>
  );
}
