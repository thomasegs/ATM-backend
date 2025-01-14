import { Request, Response } from "express";
import { ISetor, bodyValidation } from "./TypesSetor";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, ISetor>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Setor criado com sucesso.");
};
