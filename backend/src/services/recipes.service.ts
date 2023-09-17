import { FilterQuery } from "mongoose";
import savedRecipesModel from "../models/savedRecipes.model";
import {
  RecipesInterface,
  SaveRecipesInterface,
} from "../types/recipes.interface";
import axios from "axios";

export const searchRecipes = async (
  query: string
): Promise<RecipesInterface> => {
  const options = {
    headers: {
      "x-api-key": "2847f123fbf148cd8005ce8da0f472cc",
    },
  };
  try {
    let recipes = await axios.get<RecipesInterface>(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}`,
      options
    );

    return recipes.data;
  } catch (error: any) {
    console.log("Error while fetching recipes from server", error);
    throw new Error(error.message);
  }
};

export const saveRecipes = async (
  data: SaveRecipesInterface
): Promise<SaveRecipesInterface> => {
  try {
    const save = await savedRecipesModel.create(data);
    return save;
  } catch (error: any) {
    console.log("Error while saving recipes ", error);
    throw new Error(error.message);
  }
};

export const findOneSaveRecipe = async (
  query: FilterQuery<SaveRecipesInterface>
) => {
  return savedRecipesModel.findOne(query).lean();
};
