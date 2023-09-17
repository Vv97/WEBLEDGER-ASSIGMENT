import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/connect.database";
import userRoutes from "./routes/user.routes";
import recipesRouter from "./routes/recipes.routes";
const app = express();

//constent
const port = 8080;

//middleware
//cors
app.use(cors());
// body parser
app.use(express.json());

//routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "welcome" });
});

app.use("/users", userRoutes);
app.use("/recipes", recipesRouter);

//  First establish a connection to the database then proceed with running the server.
connectDB().then((_) => {
  app.listen(port, () => {
    console.log(`server is running at 8080 port`);
  });
});
