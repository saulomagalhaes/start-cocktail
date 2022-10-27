import { Container } from '@mui/material';
import { Header } from '../../components/Header';
import { CategoryButtons } from './CategoryButtons';
import { ListCocktails } from './ListCocktails';

export function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <CategoryButtons />
        <ListCocktails />
      </Container>
    </>
  );
}
