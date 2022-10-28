import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '../../../components/Loading';
import { CocktailContext } from '../../../contexts/cocktail';
import { ICocktail, ICocktailFilter } from '../../../interfaces/ICocktail';
import { fetchByCategory, fetchByFilter } from '../../../services/axios';
import { Cards } from './Cards';

export function ListCocktails() {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const { cocktailByCategory, cocktailByFilter } = useContext(CocktailContext);

  const handleFetchByCategory = async (category: string) => {
    const response = await fetchByCategory(category);
    setCocktails(response);
    setLoading(false);
  };

  useEffect(() => {
    const { category } = cocktailByCategory;
    handleFetchByCategory(category);
  }, [cocktailByCategory]);

  const handleFetchByFilter = async ({ filter, name }: ICocktailFilter) => {
    const response = await fetchByFilter(filter, name);
    setCocktails(response);
    setLoading(false);
  };

  useEffect(() => {
    if (Object.keys(cocktailByFilter).length === 0) {
      return;
    }
    handleFetchByFilter(cocktailByFilter);
  }, [cocktailByFilter]);

  return (
    <Grid container my={2}>
      {loading ? <Loading /> : <Cards cocktails={cocktails} />}
    </Grid>
  );
}
