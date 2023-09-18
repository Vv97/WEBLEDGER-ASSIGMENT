import { Router } from "express";
import {
  deleteRecipeByID,
  getSaveRecipesController,
  getSavedRecipeById,
  saveRecipesController,
  searchRecipesController,
} from "../controllers/recipes.controller";
import { RequireLogin } from "../middleware/user.middleware";
const recipesRouter = Router();

//GET : recipes
recipesRouter.get("/", getSaveRecipesController);

//GET : recpies/:_id
recipesRouter.get("/:_id", getSavedRecipeById);

//GET : recipes/search
recipesRouter.get("/search", searchRecipesController);

// middleware to check valid user
recipesRouter.use(deleteRecipeByID);

//POST : recipes/save
recipesRouter.post("/save", saveRecipesController);

//DELETE : recipes/delete
recipesRouter.delete("/delete", deleteRecipeByID);

export default recipesRouter;
