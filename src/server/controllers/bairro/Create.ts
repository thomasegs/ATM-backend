import { Request, Response } from "express";
import { IBairro, bodyValidation } from "./TypesBairro";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IBairro>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.CREATED).json(1);
};
