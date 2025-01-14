import { Request, Response } from "express";
import { IMarca, bodyValidation } from "./TypesMarca";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IMarca>,
  res: Response
) => {
  console.log(req.body);

  res.send("Marca_motor criado com sucesso.");
};
