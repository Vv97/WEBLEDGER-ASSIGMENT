import { createContext, ReactNode, useState } from "react";
import { RecipeContextValue, Results } from "../types/recipes.interface";

export const recipeContext = createContext<RecipeContextValue>({
  recipes: [],
  setRecipe: () => {},
});

export const RecipeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [recipes, setRecipe] = useState<Array<Results>>([]);

  return (
    <recipeContext.Provider value={{ recipes, setRecipe: setRecipe }}>
      {children}
    </recipeContext.Provider>
  );
};
