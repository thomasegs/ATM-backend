import { Request, Response } from "express";
import { ISetor } from "./TypesSetor";

export const create = (req: Request<unknown, unknown, ISetor>, res: Response) => {
    res.send("Controller de setor funcionando");
    console.log(req.body);
};
