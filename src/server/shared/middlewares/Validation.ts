import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

type TValidation = (field: "body" | "header" | "params" | "query",schemas: yup.Schema<unknown>) => RequestHandler;

export const validation: TValidation = (field ,schemas) => async (req, res, next) => {
  console.log("Testando middleware");

  try {
    await schemas.validate(req[field], {
      abortEarly: false,
    });
    return next();
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
