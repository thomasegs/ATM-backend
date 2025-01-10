import { Request, Response } from "express";
import { ICarcaca } from "./TypesCarcaca";

export const create = (req: Request<unknown, unknown, ICarcaca>, res: Response) => {
    console.log(req.body);

    res.send("O create de carcaça está funcionando.");
};