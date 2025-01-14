import { Request, Response } from "express";
import { IBairro, bodyValidation } from "./TypesBairro";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IBairro>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Bairro criado com sucesso.");
};
