import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CocktailContext } from '../../../contexts/cocktail';

export function CategoryButtons() {
  const categories = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Punch / Party Drink',
    'Beer',
    'Soft Drink',
  ];

  const { setCocktailByCategory } = useContext(CocktailContext);

  const handleClick = (category: string) => {
    setCocktailByCategory({ category });
  };

  return (
    <>
      <Typography variant="h5" sx={{ marginTop: 1, marginLeft: 1 }}>
        Buscar por Categoria
      </Typography>
      <Grid container my={1} sx={{ justifyContent: 'center' }}>
        {categories.map((category) => (
          <Grid
            key={category}
            item
            xs={5}
            sm={3}
            md={3}
            lg={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => handleClick(category)}
              size="small"
              variant="contained"
              sx={{
                width: {
                  lg: '100%',
                  md: '100%',
                  sm: '100%',
                  xs: '100%',
                },
                margin: 1,
                fontSize: {
                  lg: '0.8rem',
                  md: '0.8rem',
                  sm: '0.8rem',
                  xs: '0.6rem',
                },
              }}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
