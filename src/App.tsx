import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';

import TypingTest from './components/typingtest';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h2" component="h1" gutterBottom>
            Typing Speed Test
          </Typography>
          <Typography variant="h6" gutterBottom>
            Try your hand at typing as many words as you can in 60 seconds.
            Pressing the space bar moves to the next word.
          </Typography>
          <TypingTest />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
