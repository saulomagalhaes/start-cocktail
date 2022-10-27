import axios from 'axios';
import { ICocktail, ICocktails } from '../interfaces/ICocktail';

export const fetchCocktails = async (): Promise<ICocktail[]> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ice`;
  try {
    const response = await axios.get<ICocktails>(url);
    return response.data.drinks;
  } catch (error) {
    console.error(error);
    return [];
  }
};
