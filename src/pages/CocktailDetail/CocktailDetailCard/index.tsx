import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ICocktail,
  IIgredientesAndMeasures,
} from '../../../interfaces/ICocktail';
import { fetchById } from '../../../services/axios';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CocktailDetailCard() {
  const [expanded, setExpanded] = useState(false);
  const [cocktail, setCocktail] = useState<ICocktail[]>([]);
  const [igredientsAndMeasures, setIgredientsAndMeasures] = useState<
    IIgredientesAndMeasures[]
  >([]);

  const { id } = useParams();

  const handleCocktail = (cocktail: ICocktail[]) => {
    const cocktailArray = Object.entries(cocktail[0]);
    const ingredients = cocktailArray.filter((item) =>
      item[0].startsWith('strIngredient')
    );
    const measures = cocktailArray.filter((item) =>
      item[0].startsWith('strMeasure')
    );
    const cocktailIngredients = ingredients.map((item, index) => [
      item[1],
      measures[index][1],
    ]);
    const cocktailIngredientsFiltered = cocktailIngredients.filter(
      (item) => item[0] !== null
    );
    const cocktailIngredientsObject = cocktailIngredientsFiltered.map(
      (item) => {
        return { ingredient: item[0], measure: item[1] };
      }
    );
    setIgredientsAndMeasures(cocktailIngredientsObject);
  };

  const handleFetchById = async () => {
    if (id !== undefined) {
      const cocktail = await fetchById(id);
      setCocktail(cocktail);
      handleCocktail(cocktail);
    }
  };

  useEffect(() => {
    handleFetchById();
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        heigth: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
      }}
    >
      {cocktail.map((cocktail) => (
        <Card key={cocktail.idDrink} sx={{ maxWidth: 345, minWidth: 350 }}>
          <CardHeader title={cocktail.strDrink} />
          <CardMedia
            component="img"
            height="200"
            image={cocktail.strDrinkThumb}
            alt="Paella dish"
          />
          <CardContent>
            {igredientsAndMeasures.map((item) => (
              <Typography
                variant="body2"
                color="text.secondary"
                key={item.ingredient}
              >
                {`Igredient: ${item.ingredient} -> Measure: ${
                  item.measure ? item.measure : 'To be defined'
                }`}
              </Typography>
            ))}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Preparation mode:</Typography>
              <Typography paragraph>{cocktail.strInstructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
}
