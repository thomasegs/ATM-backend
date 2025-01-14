import { Request, Response } from "express";
import { IEndereco, bodyValidation } from "./TypesEndereco";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IEndereco>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Endereço criado com sucesso.");
};
