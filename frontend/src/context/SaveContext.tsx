import { createContext, ReactNode, useState } from "react";
import {
  GetSaveRecipe,
  SaveContextInterface,
} from "../types/recipes.interface";

export const SaveContext = createContext<SaveContextInterface>({
  save: [],
  setSave: () => {},
});

export const SaveContextProvider = ({ children }: { children: ReactNode }) => {
  const [save, setSave] = useState<Array<GetSaveRecipe>>([]);

  return (
    <SaveContext.Provider value={{ save, setSave }}>
      {children}
    </SaveContext.Provider>
  );
};
