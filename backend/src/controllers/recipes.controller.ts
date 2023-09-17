import { Request, Response } from "express";
import { searchRecipes } from "../services/recipes.service";

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
