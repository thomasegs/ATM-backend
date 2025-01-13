import { Request, Response } from "express";
import { IUsuario_Lotado, bodyValidation } from "./TypesUsuario_lotado";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const create = async (
  req: Request<unknown, unknown, IUsuario_Lotado>,
  res: Response
) => {
  let validatedData: IUsuario_Lotado | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
    res.status(StatusCodes.CREATED).send("Usuário_lotado criado com sucesso.");

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
