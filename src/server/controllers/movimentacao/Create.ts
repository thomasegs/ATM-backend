import { Request, Response } from "express";
import { bodyValidation, IMovimentacao } from "./TypesMovimentacao";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (
  req: Request<unknown, unknown, IMovimentacao>,
  res: Response
) => {
  let validatedData: IMovimentacao | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Movimentação criada com sucesso");

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
