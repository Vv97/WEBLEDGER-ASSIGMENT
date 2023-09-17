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
