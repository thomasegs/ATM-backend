import { Request, Response } from "express";
import { IEstoque, bodyValidation } from "./TypesEstoque";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IEstoque>,
  res: Response
) => {
  console.log(req.body);

  res.send("Estoque criado com sucesso.");
};
