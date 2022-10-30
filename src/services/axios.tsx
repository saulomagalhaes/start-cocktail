import axios from 'axios';
import { ICocktail, ICocktails } from '../interfaces/ICocktail';

export const fetchByFilter = async (
  filter: string,
  name: string
): Promise<ICocktail[]> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filter}=${name}`;
  try {
    const response = await axios.get<ICocktails>(url);
    return response.data.drinks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchByCategory = async (
  category: string
): Promise<ICocktail[]> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const response = await axios.get<ICocktails>(url);
    return response.data.drinks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchById = async (id: string): Promise<ICocktail[]> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const response = await axios.get<ICocktails>(url);
    return response.data.drinks;
  } catch (error) {
    console.error(error);
    return [];
  }
};
