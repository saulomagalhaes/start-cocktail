import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';
import { CocktailProvider } from '../contexts/cocktail';
import { server } from '../mocks/server';
import { CocktailDetail } from '../pages/CocktailDetail';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<CocktailDetail />', () => {
  it('should render the title of the cocktail', async () => {
    render(
      <MemoryRouter initialEntries={['/cocktail/15300']}>
        <CocktailProvider>
          <CocktailDetail />
        </CocktailProvider>
      </MemoryRouter>
    );
    const button = screen.getByText('Página Inicial');
    expect(button).toBeInTheDocument();
  });
});
