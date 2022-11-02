import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { CocktailProvider } from '../contexts/cocktail';
import { Home } from '../pages/Home';

describe('<Home />', () => {
  it('should render an h5 written Buscar por Categoria', () => {
    render(
      <CocktailProvider>
        <Home />
      </CocktailProvider>
    );
    expect(screen.getByText('Buscar por Categoria')).toBeInTheDocument();
  });
});
