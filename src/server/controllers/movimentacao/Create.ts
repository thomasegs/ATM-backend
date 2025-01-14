import { Request, Response } from "express";
import { IMovimentacao, bodyValidation } from "./TypesMovimentacao";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IMovimentacao>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Movimentação criado com sucesso.");
};
