import { Response, Request} from "express";
import { bodyValidation, IEndereco } from "./TypesEndereco";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const create = async (req: Request<unknown, unknown, IEndereco>, res: Response) => {
    let validatedBody: IEndereco | undefined = undefined;

    try {
        validatedBody = await bodyValidation.validate(req.body);
        res.status(StatusCodes.CREATED).send("Endereço criado com sucesso.");

        console.log(validatedBody);
    } catch (error) {
        const yupError = error as yup.ValidationError;

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message,
            }
        });
    }
};
