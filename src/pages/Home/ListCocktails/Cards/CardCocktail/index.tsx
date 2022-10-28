import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
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
        <Button size="small" variant="outlined">
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
