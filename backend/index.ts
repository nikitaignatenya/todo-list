import express from "express";
import { Request, Response, NextFunction } from "express";
import route from "./src/controllers/controller";
import bodyparser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use("/", bodyparser.json());
app.use("/tasks", route);

app.use("/", (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(404).send(err.message);
});

app.listen(3000, () => {
  console.log("Success");
});
