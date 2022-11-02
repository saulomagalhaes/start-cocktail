import { rest } from 'msw';

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
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
