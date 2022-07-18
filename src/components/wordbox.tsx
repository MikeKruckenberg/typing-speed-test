import { Box } from '@mui/material';

interface Props {
  width: string;
  float: string;
  children: JSX.Element;
}

export default function WordBox({ width, float, children }: Props) {
  return (
    <Box
      sx={{ width: width, float: float, overflow: 'hidden', height: '40px' }}
    >
      {children}
    </Box>
  );
}
