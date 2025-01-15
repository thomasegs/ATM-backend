import { Request, Response } from "express";
import { IUsuario_Lotado, bodyValidation } from "./TypesUsuario_lotado";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IUsuario_Lotado>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Create de usuario_lotado ainda não implementado.");
};
