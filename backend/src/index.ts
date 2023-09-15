import express, { Request, Response } from "express";
import cors from "cors";
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

// running server

app.listen(port, () => {
  console.log(`server is running at 8080 port`);
});
