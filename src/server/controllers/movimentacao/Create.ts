import { Request, Response } from "express";
import { IMovimentacao, bodyValidation } from "./TypesMovimentacao";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IMovimentacao>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Create de movimentação ainda não implementado.");
};
