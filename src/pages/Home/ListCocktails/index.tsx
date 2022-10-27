import { Box, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ICocktail } from '../../../interfaces/ICocktail';
import { fetchCocktails } from '../../../services/axios';
import { CocktailCard } from './CocktailCard';

export function ListCocktails() {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetchCocktails = async () => {
    const response = await fetchCocktails();
    setCocktails(response);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchCocktails();
  }, []);
  return (
    <Grid container my={2}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={100} />
        </Box>
      ) : (
        cocktails.map((cocktail) => (
          <Grid
            item
            xs={3}
            key={cocktail.idDrink}
            sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}
          >
            <CocktailCard cocktail={cocktail} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
