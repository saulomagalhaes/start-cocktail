import { Route, Routes } from 'react-router-dom';
import { CocktailDetail } from './pages/CocktailDetail';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cocktail/:id" element={<CocktailDetail />} />
    </Routes>
  );
}
