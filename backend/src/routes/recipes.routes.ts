import { Router } from "express";
import { searchRecipesController } from "../controllers/recipes.controller";

const recipesRouter = Router();

//GET : recipes/search
recipesRouter.get("/search", searchRecipesController);

export default recipesRouter;
