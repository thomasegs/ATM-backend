import { Request, Response } from "express";
import { IMarca, bodyValidation } from "./TypesMarca";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createBodyValidation = validation("body", bodyValidation);

export const create = async (
  req: Request<unknown, unknown, IMarca>,
  res: Response
) => {
  console.log(req.body);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Create de marca_motor ainda não implementado.");
};
