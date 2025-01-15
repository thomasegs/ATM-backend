import { Request, Response } from "express";
import { IQueryProps, queryValidation } from "./TypesCarcaca";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

export const createQueryValidation = validation("query", queryValidation);

export const getall = async (
  req: Request<unknown, unknown, unknown, IQueryProps>,
  res: Response
) => {
  console.log(req.query);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Getall de carcaça ainda não implementado.");
};
