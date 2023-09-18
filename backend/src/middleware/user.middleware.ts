import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "../types/express";
const secret_key = "0c23307b0d326d12b5f3c349a4c8d0";
import jwt from "jsonwebtoken";

// Protected Routes token base

export const RequireLogin = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const decode = jwt.verify(req.headers.authorization || "", secret_key);
    if (decode) {
      req.body.user = decode;
    }
    next();
  } catch (error) {
    console.log("RequireSignIn", error);
  }
};
