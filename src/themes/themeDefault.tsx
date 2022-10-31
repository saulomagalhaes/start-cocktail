import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    secondary: {
      main: colors.grey[50],
      contrastText: colors.blue[600],
    },
  },
});
