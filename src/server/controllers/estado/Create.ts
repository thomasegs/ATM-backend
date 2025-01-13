import { Request, Response } from "express";
import { bodyValidation, IEstado } from "./TypeEstado";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (
  req: Request<unknown, unknown, IEstado>,
  res: Response
) => {
  let validatedData: IEstado | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Estado criado com sucesso");

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
