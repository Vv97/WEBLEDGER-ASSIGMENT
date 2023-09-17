import mongoose from "mongoose";

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

export interface SaveRecipesInterface extends Results {
  userID: mongoose.Types.ObjectId;
  createdAt?: Date;
  updateAt?: Date;
  _id?: mongoose.Types.ObjectId;
}
