import { User } from "../types/users.interface";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    createdAt: { type: Date, default: new Date() },
    updateAt: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<User>("user", userSchema);
