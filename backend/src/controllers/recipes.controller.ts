import { Request, Response } from "express";
import {
  findOneSaveRecipe,
  saveRecipes,
  searchRecipes,
} from "../services/recipes.service";
import savedRecipesModel from "../models/savedRecipes.model";

export const searchRecipesController = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    const recipes = await searchRecipes(query?.toString() ?? "");

    if (!recipes) {
      res.status(404).send({ message: "Recipe not found." });
    }

    res.status(200).send(recipes);
  } catch (error: any) {
    console.log("Error while fetching recipes", error);
    throw new Error(error);
  }
};

export const saveRecipesController = async (req: Request, res: Response) => {
  try {
    let { title, userID } = req.body;
    const RecipeExist = await findOneSaveRecipe({ title, userID });

    if (RecipeExist) {
      return res.status(200).send({ message: "Recipe is already saved." });
    }

    const createRecipe = await saveRecipes({ ...req.body });

    res.status(200).send({ message: "Recipe save successfully!" });
  } catch (error: any) {
    console.log("Error while saveing recipes", error);
    throw new Error(error);
  }
};

export const getSaveRecipesController = async (req: Request, res: Response) => {
  try {
    const { userID } = req.body;
    const saveRecipes = await savedRecipesModel.find({ userID }).lean();

    res.status(200).send({ save: saveRecipes });
  } catch (error: any) {
    console.log("Error while getting save recipes", error);
    throw new Error(error);
  }
};

export const getSavedRecipeById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;

    const recipe = await findOneSaveRecipe({ _id });

    if (!recipe) {
      res.status(404).send({ message: "Recipe not found" });
    }

    res.status(200).send(recipe);
  } catch (error: any) {
    console.log("Error while getting save recipes", error);
    throw new Error(error);
  }
};

export const deleteRecipeByID = async (req: Request, res: Response) => {
  try {
    const { deleteID } = req.params;
    if (!deleteID) {
      return res.status(400).send({
        message: "The 'deleteID' parameter is missing from the request.",
      });
    }

    res.status(200).send({ message: "Recipe successfully deleted." });
  } catch (error: any) {
    console.log("Error occur while deleting the recipe");
  }
};
