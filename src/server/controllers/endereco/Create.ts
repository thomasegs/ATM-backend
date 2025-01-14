import { Response, Request } from "express";
import { bodyValidation, IEndereco } from "./TypesEndereco";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (
  req: Request<unknown, unknown, IEndereco>,
  res: Response
) => {
  let validatedBody: IEndereco | undefined = undefined;

  try {
    validatedBody = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    res.status(StatusCodes.CREATED).send("Endereço criado com sucesso.");

    console.log(validatedBody);
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
