import { Request, Response} from "express";
import { IForncedor } from "./TypesFornecedor";

export const create = (req: Request<unknown,unknown, IForncedor>, res: Response) => {
    res.send("Controller de fornecedores funcionando");
    console.log(req.body);
};
