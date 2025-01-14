import { Request, Response } from "express";
import { IBairro, bodyValidation } from "./TypesBairro";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, IBairro>,
  res: Response
) => {
  let validatedData: IBairro | undefined = undefined;
  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Bairro criado com o sucesso");
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

  console.log(validatedData);
};
