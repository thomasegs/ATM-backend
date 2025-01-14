import { Request, Response } from "express";
import { ICidade, bodyValidation } from "./TypesCidade";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, ICidade>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Cidade criado com sucesso.");
};
