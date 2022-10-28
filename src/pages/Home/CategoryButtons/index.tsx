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
      <Grid container my={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        {categories.map((category) => (
          <Grid key={category} item xs={2}>
            <Button
              onClick={() => handleClick(category)}
              size="small"
              variant="contained"
              sx={{ width: '90%', margin: 1 }}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
