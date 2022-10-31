import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import { CocktailProvider } from './contexts/cocktail';
import { Router } from './Router';
import { theme } from './themes/themeDefault';

function App() {
  return (
    <BrowserRouter>
      <CocktailProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </CocktailProvider>
    </BrowserRouter>
  );
}

export default App;
