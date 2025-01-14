import { Request, Response } from "express";
import { bodyValidation, IUsuario } from "./TypesUsuario";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (
  req: Request<unknown, unknown, IUsuario>,
  res: Response
) => {
  let validatedData: IUsuario | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Usuário criado com sucesso.");

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
