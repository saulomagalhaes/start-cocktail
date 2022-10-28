import { createContext, ReactNode, useState } from 'react';
import {
  ICocktailCategory,
  ICocktailContext,
  ICocktailFilter,
} from '../interfaces/ICocktail';

export const CocktailContext = createContext({} as ICocktailContext);

export function CocktailProvider({ children }: { children: ReactNode }) {
  const [cocktailByCategory, setCocktailByCategory] =
    useState<ICocktailCategory>({ category: 'Ordinary Drink' });

  const [cocktailByFilter, setCocktailByFilter] = useState<ICocktailFilter>(
    {} as ICocktailFilter
  );

  return (
    <CocktailContext.Provider
      value={{
        cocktailByCategory,
        setCocktailByCategory,
        cocktailByFilter,
        setCocktailByFilter,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
}
