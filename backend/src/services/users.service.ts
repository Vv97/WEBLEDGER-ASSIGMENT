import { User } from "../types/users.interface";
import userModel from "../models/user-model";
import { FilterQuery } from "mongoose";

export const createUser = async (
  input: Omit<User, "createdAt" | "updateAt">
): Promise<User> => {
  try {
    const user = await userModel.create(input);
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const findOneUser = async (query: FilterQuery<User>) => {
  return userModel.findOne(query).lean();
};
