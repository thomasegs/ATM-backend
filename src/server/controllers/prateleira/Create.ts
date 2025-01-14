import { Request, Response } from "express";
import { IPrateleira, bodyValidation } from "./TypesPrateleira";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IPrateleira>,
  res: Response
) => {
  console.log(req.body);

  res.send("Prateleira criado com sucesso.");
};
