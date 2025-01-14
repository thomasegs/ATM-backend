import { Request, Response } from "express";
import { bodyValidation, ICarcaca } from "./TypesCarcaca";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, ICarcaca>,
  res: Response
) => {
  let validatedData: ICarcaca | undefined = undefined;
  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Carcaça criada com sucesso.");

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
