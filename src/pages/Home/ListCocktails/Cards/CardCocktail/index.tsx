import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ICocktail } from '../../../../../interfaces/ICocktail';

export function CardCocktail({ cocktail }: { cocktail: ICocktail }) {
  return (
    <Card
      sx={{
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        image={cocktail.strDrinkThumb}
        sx={{ height: '250px' }}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {cocktail.strDrink}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/cocktail/${cocktail.idDrink}`}>
          <Button size="small" variant="outlined">
            Detalhes
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
