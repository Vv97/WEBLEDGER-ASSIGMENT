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

//GET : recipes/search
recipesRouter.get("/search", searchRecipesController);

//GET : recpies/:_id
recipesRouter.get("/:_id", getSavedRecipeById);

// middleware to check valid user
recipesRouter.use(RequireLogin);

//GET : recipes
recipesRouter.get("/", getSaveRecipesController);

//POST : recipes/save
recipesRouter.post("/save", saveRecipesController);

//DELETE : recipes/delete
recipesRouter.delete("/delete", deleteRecipeByID);

export default recipesRouter;
