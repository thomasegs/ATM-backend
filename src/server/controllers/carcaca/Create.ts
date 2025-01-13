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
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Carcaça criada com sucesso.");

    console.log(validatedData);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }
};
