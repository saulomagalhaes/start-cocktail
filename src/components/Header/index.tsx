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
      <Toolbar
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box component="img" src={logo} alt="Start Recipe" height="5rem" />
        </Box>
        <Box width="250px" my={1}>
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
        <Search sx={{ marginBottom: { xs: '8px', sm: '0px' } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChangeName}
            value={name}
            data-testid="input"
          />
        </Search>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => setCocktailByFilter({ filter, name })}
          disabled={disableButon}
          sx={{
            ml: {
              xs: 0,
              sm: 2,
            },
            mb: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          Buscar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
