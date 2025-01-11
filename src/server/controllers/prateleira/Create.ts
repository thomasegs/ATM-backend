import { Request, Response} from "express";
import { IPrateleira } from "./TypesPrateleira";

export const create = (req: Request<unknown, unknown, IPrateleira>, res: Response) => {
    res.send("Controller de prateleiras funcionando.");
    console.log(req.body);
};
