import { Request, Response } from "express";
import { ICarcaca, bodyValidation } from "./TypesCarcaca";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, ICarcaca>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Create de carcaça ainda não implementado.");
};
