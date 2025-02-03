import { Request, Response } from "express";
import { IParamProps, paramValidation } from "./TypesPrateleira";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createParamValidation = validation("params", paramValidation);

export const deletebyid = async (
  req: Request<IParamProps>,
  res: Response
) => {
  console.log(req.params);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("deletebyid de prateleira ainda não implementado.");
};
