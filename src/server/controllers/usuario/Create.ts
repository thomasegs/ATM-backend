import { Request, Response } from "express";
import { IUsuario, bodyValidation } from "./TypesUsuario";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IUsuario>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Usuario criado com sucesso.");
};
