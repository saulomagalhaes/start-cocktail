import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/startrecipe.png';

export function Header() {
  return (
    <AppBar position="static" color="primary" component="header">
      <Toolbar>
        <Box component="img" src={logo} alt="Start Recipe" height="5rem" />
      </Toolbar>
    </AppBar>
  );
}
