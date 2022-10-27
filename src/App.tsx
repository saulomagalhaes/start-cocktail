import { BrowserRouter } from 'react-router-dom';
import { CocktailProvider } from './contexts/cocktail';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <CocktailProvider>
        <Router />
      </CocktailProvider>
    </BrowserRouter>
  );
}

export default App;
