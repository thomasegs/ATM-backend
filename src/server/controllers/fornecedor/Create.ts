import { Request, Response } from "express";
import { bodyValidation, IForncedor } from "./TypesFornecedor";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, IForncedor>,
  res: Response
) => {
  let validatedData: IForncedor | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Fornecedor criado com sucesso.");

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
