import { Button, Grid, Typography } from '@mui/material';

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
  return (
    <>
      <Typography variant="h5" sx={{ marginTop: 1, marginLeft: 1 }}>
        Buscar por Categoria
      </Typography>
      <Grid container my={1}>
        {categories.map((category) => (
          <Grid key={category} item xs={2}>
            <Button
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
