import mongoose from "mongoose";
import { SaveRecipesInterface } from "../types/recipes.interface";

const savedRecipesSchema = new mongoose.Schema(
  {
    id: { type: Number, require },
    title: { type: String, require },
    image: { type: String, require },
    imageType: { type: String, require },
    userID: { type: mongoose.Types.ObjectId, require, ref: "user" },
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
