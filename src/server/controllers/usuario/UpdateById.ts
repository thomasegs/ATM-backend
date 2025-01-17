import { Request, Response } from "express";
import { IUsuario, IParamProps, bodyValidation, paramValidation } from "./TypesUsuario";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createParamValidation = validation("params", paramValidation);
export const createBodyValidation = validation("body", bodyValidation);

export const updatebyid = async (
  req: Request<IParamProps, unknown, IUsuario>,
  res: Response
) => {
    console.log(req.params);
    console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("UpdateById de usuário ainda não implementado.");
};
