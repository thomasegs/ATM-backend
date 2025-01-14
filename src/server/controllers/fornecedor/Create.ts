import { Request, Response } from "express";
import { IForncedor, bodyValidation } from "./TypesFornecedor";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IForncedor>,
  res: Response
) => {
  console.log(req.body);

  res.send("Fornecedor criado com sucesso.");
};
