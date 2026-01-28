import { Request, Response, NextFunction } from "express";

function checkBody(req: Request, res: Response, next: NextFunction) {
  const { title, description, completed, createdAt } = req.body;
  if (!isNaN(title)) throw new Error("title is a string");
  if (!isNaN(description)) throw new Error("description is a string");
  if (typeof completed !== "boolean") throw new Error("completed is a boolean");
}
function checkId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error("Id is a number");
}
export { checkBody, checkId };
