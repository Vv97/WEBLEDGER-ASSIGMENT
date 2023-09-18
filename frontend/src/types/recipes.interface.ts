export interface Results {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface RecipesInterface {
  results: Results[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RecipeContextValue {
  recipes: Array<Results>;
  setRecipe: (newRecipes: Array<Results>) => void;
}

export interface SaverecipesInterFace {
  message: string;
}

export interface SaveContextValue {
  recipes: Array<Results>;
  setRecipe: (newRecipes: Array<Results>) => void;
}

export interface GetSaveRecipe extends Results {
  _id: string;
  userID: string;
  createdAt: string;
  updateAt: string;
}

export interface saveRecipesIterface {
  save: Array<GetSaveRecipe>;
}

export interface SaveContextInterface {
  save: Array<GetSaveRecipe>;
  setSave: (save: Array<GetSaveRecipe>) => void;
}
