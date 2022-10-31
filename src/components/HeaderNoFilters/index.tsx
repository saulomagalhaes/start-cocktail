import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/startrecipe.png';

export function HeaderNoFilters() {
  return (
    <AppBar position="static" color="primary" component="header">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <NavLink to="/">
            <Box component="img" src={logo} alt="Start Recipe" height="5rem" />
          </NavLink>
        </Box>
        <NavLink to="/">
          <Button color="secondary" variant="contained">
            Página Inicial
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
