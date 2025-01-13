import { Request, Response } from "express";
import { IBairro, bodyValidation } from "./TypesBairro";
import * as yup from "yup";
import { StatusCodes} from "http-status-codes";

export const create = async (req: Request<unknown, unknown, IBairro>, res: Response) => {
    let validatedData:IBairro | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body);
        res.status(StatusCodes.CREATED).send("Bairro criado com o sucesso");
    } catch (error) {
        const yupError = error as yup.ValidationError;
         
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message
            }
        });
    }

    console.log(validatedData);
};