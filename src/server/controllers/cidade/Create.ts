import { Request, Response } from "express";
import { bodyValidation, ICidade } from "./TypesCidade";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, ICidade>,
  res: Response
) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Cidade criada com sucesso.");
    console.log(validatedData);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: yupError.message,
      },
    });
  }
};
