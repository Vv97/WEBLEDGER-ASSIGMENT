import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

declare module "express" {
  interface Request {
    user?: JwtPayload | string;
  }
}

export interface CustomRequest extends Request {
  user?: string | JwtPayload; // You can adjust the type as needed
}
