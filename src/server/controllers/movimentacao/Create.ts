import { Request, Response } from "express";
import { IMovimentacao } from "./TypesMovimentacao";

export const create = (req: Request<unknown, unknown, IMovimentacao>, res: Response) => {
    res.send("Controller de movimentação está funcionando");
    console.log(req.body);
};
