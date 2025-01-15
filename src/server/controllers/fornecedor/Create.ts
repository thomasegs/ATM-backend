import { Request, Response } from "express";
import { IForncedor, bodyValidation } from "./TypesFornecedor";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IForncedor>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Create de fornecedor ainda não implementado.");
};
