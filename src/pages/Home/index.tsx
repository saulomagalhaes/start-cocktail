import { Container } from '@mui/material';
import { Header } from '../../components/Header';
import { ListCocktails } from './ListCocktails';

export function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <ListCocktails />
      </Container>
    </>
  );
}
