import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, MenuItem, Toolbar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/startrecipe.png';
import { CocktailContext } from '../../contexts/cocktail';
import { Filter, Search, SearchIconWrapper, StyledInputBase } from './styles';

export function Header() {
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [disableButon, setDisableButon] = useState(true);

  useEffect(() => {
    if (filter === '' || name === '') {
      setDisableButon(true);
    } else {
      if (filter === 'f' && name.length > 1) {
        return setDisableButon(true);
      }
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
          <Filter
            label="Selecione o filtro"
            select
            value={filter}
            onChange={handleChangeFilter}
            fullWidth
            size="small"
            InputLabelProps={{ style: { color: '#fff' } }}
          >
            <MenuItem value="s">Nome do Coquetel</MenuItem>
            <MenuItem value="f">Primeira Letra</MenuItem>
          </Filter>
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
          color="secondary"
          onClick={() => setCocktailByFilter({ filter, name })}
          disabled={disableButon}
          sx={{ ml: 2 }}
        >
          Buscar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
