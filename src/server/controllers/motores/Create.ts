import { Request, Response } from "express";
import { bodyValidation, IMotor } from "./TypesMotor";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (
  req: Request<unknown, unknown, IMotor>,
  res: Response
) => {
  let validatedData: IMotor | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Motor criado com sucesso.");

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
