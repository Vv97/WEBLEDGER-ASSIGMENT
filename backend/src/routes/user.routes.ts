import { Router } from "express";
import {
    userLoginController,
    userRegisterController,
} from "../controllers/user.controller";

const userRoutes = Router();

// POST :  users/register
userRoutes.post("/register", userRegisterController);

// POST :  users/login
userRoutes.post("/login", userLoginController);
export default userRoutes;
