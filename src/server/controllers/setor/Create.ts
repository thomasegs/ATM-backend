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
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Setor criado com sucesso");

    console.log(validatedData);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: yupError.message,
      },
    });
  }
};
