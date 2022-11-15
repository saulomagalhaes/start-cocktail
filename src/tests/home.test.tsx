import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import { CocktailProvider } from '../contexts/cocktail';
import { server } from '../mocks/server';
import { Home } from '../pages/Home';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Home />', () => {
  it('should render an h5 written Buscar por Categoria', () => {
    render(
      <BrowserRouter>
        <CocktailProvider>
          <Home />
        </CocktailProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Buscar por Categoria')).toBeInTheDocument();
  });

  it('should render the card title of two cocktails', async () => {
    render(
      <BrowserRouter>
        <CocktailProvider>
          <Home />
        </CocktailProvider>
      </BrowserRouter>
    );
    await waitFor(() => screen.getByText('3-Mile Long Island Iced Tea'));

    expect(screen.getByText('3-Mile Long Island Iced Tea')).toBeInTheDocument();
    expect(screen.getByText('410 Gone')).toBeInTheDocument();
  });

  it('should render 11 category buttons', () => {
    render(
      <BrowserRouter>
        <CocktailProvider>
          <Home />
        </CocktailProvider>
      </BrowserRouter>
    );
    expect(screen.getAllByTestId('category-button')).toHaveLength(11);
  });

  it('should change the route by clicking on the details button', async () => {
    render(
      <BrowserRouter>
        <CocktailProvider>
          <Home />
        </CocktailProvider>
      </BrowserRouter>
    );
    await waitFor(() => screen.getAllByTestId('details'));

    const button = screen.getAllByTestId('details')[0];
    userEvent.click(button);

    await waitFor(() =>
      expect(window.location.pathname).toBe('/cocktail/15300')
    );
  });

  it('should render new cards when clicking on beer category', async () => {
    render(
      <BrowserRouter>
        <CocktailProvider>
          <Home />
        </CocktailProvider>
      </BrowserRouter>
    );
    const button = screen.getByText('Beer');
    await act(() => userEvent.click(button));

    expect(await screen.findByText('110 in the shade')).toBeInTheDocument();
  });
});
