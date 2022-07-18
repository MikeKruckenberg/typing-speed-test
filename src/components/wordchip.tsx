import { Chip } from '@mui/material';

interface Props {
  word: string;
  decorate?: boolean;
  float?: string;
}

export default function WordChip({ word, decorate, float }: Props) {
  return (
    <Chip
      label={word}
      sx={{
        float: float ? float : '',
        textDecoration: decorate ? 'underline' : '',
        textDecorationColor: '#1976d2',
        fontSize: '1.2rem',
        borderRadius: '8px',
        margin: '4px',
        paddingTop: '0px',
        paddingBottom: '0px',
      }}
    />
  );
}
