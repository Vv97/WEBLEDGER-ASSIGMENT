import mongoose from "mongoose";
import { SaveRecipesInterface } from "../types/recipes.interface";

const savedRecipesSchema = new mongoose.Schema(
  {
    id: { type: Number, require },
    title: { type: String, require, unique: true },
    image: { type: String, require },
    imageType: { type: String, require },
    userID: { type: String, require, ref: "user" },
    createdAt: { type: Date, default: new Date() },
    updateAt: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<SaveRecipesInterface>(
  "saveRecipes",
  savedRecipesSchema
);
