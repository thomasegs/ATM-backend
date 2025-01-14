import { Request, Response } from "express";
import { IUsuario_Lotado, bodyValidation } from "./TypesUsuario_lotado";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IUsuario_Lotado>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Usuario_lotado criado com sucesso.");
};
