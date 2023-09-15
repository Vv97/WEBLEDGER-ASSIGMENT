import { Request, Response } from "express";
import { createUser, findOneUser } from "../services/users.service";
import { hashPassword } from "../helper/bcryptHelper";
import jwt from "jsonwebtoken";

const secret_key = "0c23307b0d326d12b5f3c349a4c8d0";

export const userRegisterController = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;

    let userExist = await findOneUser({ email });

    if (userExist) {
      return res.status(404).send({ message: "User already registered" });
    }

    // Validation
    if (!username || !email || !password) {
      return res.status(400).send({ error: "Missing fields" });
    }

    // hash password
    let hash = await hashPassword(password);

    // saving user data in database
    const user = await createUser({ username, email, password: hash });
    // After successful registration
    if (user) {
      res.status(201).send({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log("Error while registering", error);
    res.status(400).send(error);
  }
};
