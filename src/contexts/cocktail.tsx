import { createContext, ReactNode, useState } from 'react';

interface ICocktailFilter {
  filter: string;
  name: string;
}
interface ICocktailContext {
  cocktailByCategory: string;
  setCocktailByCategory: (cocktails: string) => void;
  cocktailByFilter: ICocktailFilter;
  setCocktailByFilter: (filters: ICocktailFilter) => void;
}

export const CocktailContext = createContext({} as ICocktailContext);

export function CocktailProvider({ children }: { children: ReactNode }) {
  const [cocktailByCategory, setCocktailByCategory] =
    useState<string>('Ordinary Drink');

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
