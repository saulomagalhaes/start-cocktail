import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  TextField,
  Toolbar,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/startrecipe.png';
import { CocktailContext } from '../../contexts/cocktail';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function Header() {
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [disableButon, setDisableButon] = useState(true);

  useEffect(() => {
    if (filter === '' || name === '') {
      setDisableButon(true);
    } else {
      setDisableButon(false);
    }
  }, [filter, name]);

  const { setCocktailByFilter } = useContext(CocktailContext);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <AppBar position="static" color="primary" component="header">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Box component="img" src={logo} alt="Start Recipe" height="5rem" />
        </Box>
        <Box width="250px">
          <TextField
            label="Selecione o filtro"
            select
            value={filter}
            onChange={handleChangeFilter}
            fullWidth
            size="small"
          >
            <MenuItem value="s">Nome do Coquetel</MenuItem>
            <MenuItem value="f">Primeira Letra</MenuItem>
            <MenuItem value="i">Nome do Igrediente</MenuItem>
          </TextField>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChangeName}
            value={name}
          />
        </Search>
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={() => setCocktailByFilter({ filter, name })}
          disabled={disableButon}
        >
          Buscar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
