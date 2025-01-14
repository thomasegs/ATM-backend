import { Request, Response } from "express";
import { ISetor, bodyValidation } from "./TypesSetor";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, ISetor>,
  res: Response
) => {
  let validatedData: ISetor | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Setor criado com sucesso");

    console.log(validatedData);
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const validationError: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;

      validationError[error.path] = error.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationError,
    });
  }
};
