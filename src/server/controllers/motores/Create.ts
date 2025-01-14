import { Request, Response } from "express";
import { IMotor, bodyValidation } from "./TypesMotor";
import { validation } from "../../shared/middlewares";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IMotor>,
  res: Response
) => {
  console.log(req.body);

  return res.send("Motor criado com sucesso.");
};
