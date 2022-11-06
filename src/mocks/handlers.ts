import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
    (req, res, ctx) => {
      const category = req.url.searchParams.get('c');
      if (category === 'Ordinary Drink') {
        return res(
          ctx.status(200),
          ctx.json({
            drinks: [
              {
                strDrink: '3-Mile Long Island Iced Tea',
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
                idDrink: '15300',
              },
              {
                strDrink: '410 Gone',
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg',
                idDrink: '13581',
              },
            ],
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [
            {
              strDrink: '110 in the shade',
              strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg',
              idDrink: '15423',
            },
            {
              strDrink: 'Black & Tan',
              strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg',
              idDrink: '13282',
            },
          ],
        })
      );
    }
  ),
  rest.get('/cocktail/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Margarita',
        ingredients: ['tequila', 'lime juice', 'orange liqueur'],
      })
    );
  }),
];
