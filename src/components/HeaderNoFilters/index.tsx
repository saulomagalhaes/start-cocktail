import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/startrecipe.png';

export function HeaderNoFilters() {
  return (
    <AppBar position="static" color="primary" component="header">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Box component="img" src={logo} alt="Start Recipe" height="5rem" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
