import { Request, Response } from "express";
import { IParamProps, paramValidation } from "./TypesFornecedor";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createParamValidation = validation("params", paramValidation);

export const getbyid = async (
  req: Request<IParamProps>,
  res: Response
) => {
  console.log(req.params);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("GetById de fornecedor ainda não implementado.");
};
