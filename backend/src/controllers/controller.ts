import express from "express";
import { Request, Response, NextFunction } from "express";
const route = express.Router();
import { getData, postData, putData, deleteData } from "../services/service";
import { checkBody, checkId } from "../middlewares/middleware";

route.get("/", async (req: Request, res: Response) => {
  const data = await getData();
  res.status(200).send(data);
});

route.post("/", checkBody, async (req: Request, res: Response) => {
  const { title, description, completed, createdAt } = req.body;
  const data = await postData(title, description, completed, createdAt);
  res.status(200).send(data);
});
route.put("/:id", checkBody, checkId, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed, createdAt } = req.body;
  const data = await putData(id, title, description, completed, createdAt);
  res.status(200).send(data);
});
route.delete("/:id", checkId, async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await deleteData(id);
  res.status(200).send(data);
});

export default route;
