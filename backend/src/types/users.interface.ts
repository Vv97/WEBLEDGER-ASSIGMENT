import mongoose from "mongoose";

export interface User {
  _id?: mongoose.Types.ObjectId;
  username: String;
  email: String;
  password: String;
  createdAt: Date;
  updateAt: Date;
}
