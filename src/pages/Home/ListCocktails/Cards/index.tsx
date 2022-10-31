import { Grid } from '@mui/material';
import { ICocktail } from '../../../../interfaces/ICocktail';
import { CardCocktail } from './CardCocktail';

export function Cards({ cocktails }: { cocktails: ICocktail[] }) {
  if (cocktails === null) {
    return <h1>Nenhum item encontrado</h1>;
  }
  if (cocktails.length === 0) {
    return (
      <h1>
        Ops, algum erro aconteceu, tente atualizar a página em alguns instantes
      </h1>
    );
  }

  return (
    <>
      {cocktails.map((cocktail) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={cocktail.idDrink}
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}
        >
          <CardCocktail cocktail={cocktail} />
        </Grid>
      ))}
    </>
  );
}
