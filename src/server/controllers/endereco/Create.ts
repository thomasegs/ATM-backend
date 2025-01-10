import { Response, Request} from "express";
import { IEndereco } from "./TypesEndereco";

export const create = (req: Request<unknown, unknown, IEndereco>, res: Response) => {
    res.send("Controller de endereços está funcionando.");
    console.log(req.body);
};
