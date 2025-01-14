import { Request, Response } from "express";
import { IEstado, bodyValidation } from "./TypeEstado";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IEstado>,
  res: Response
) => {
  console.log(req.body);

  res.send("Estado criado com sucesso.");
};
