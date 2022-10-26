import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/startrecipe.png';
export function Header() {
  return (
    <AppBar position="static" color="primary" component="header">
      <Toolbar>
        <Box height="80px">
          <img src={logo} alt="" style={{ height: '100%' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
