import { Request, Response } from "express";
import { ICarcaca, bodyValidation } from "./TypesCarcaca";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, ICarcaca>,
  res: Response
) => {
  console.log(req.body);

  res.send("Carcaça criado com sucesso.");
};
