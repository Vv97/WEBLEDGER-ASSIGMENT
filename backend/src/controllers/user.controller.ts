import { Request, Response } from "express";
import { createUser, findOneUser } from "../services/users.service";
import { compareHashPassword, hashPassword } from "../helper/bcryptHelper";
import jwt from "jsonwebtoken";

const secret_key = "0c23307b0d326d12b5f3c349a4c8d0";

export const userRegisterController = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;

    let userExist = await findOneUser({ email });

    if (userExist) {
      return res.status(200).send({ message: "User already registered" });
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

export const userLoginController = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    let userExist = await findOneUser({ email });

    if (!userExist) {
      return res.status(400).send({ message: "user not found." });
    }

    const hashPassword: string | undefined =
      userExist?.password?.toString() || "";

    const correctPassword = await compareHashPassword(password, hashPassword);

    if (!correctPassword) {
      return res.status(404).send({
        message: "Invalid Password",
      });
    }

    const token = await jwt.sign(
      { _id: userExist?._id?.toString() },
      secret_key
    );

    res.status(200).send({
      message: "Login Successfully",
      user: {
        username: userExist?.username,
        email: userExist?.email,
      },
      token,
    });
  } catch (error) {
    console.log("Error while login", error);
    res.status(400).send(error);
  }
};
