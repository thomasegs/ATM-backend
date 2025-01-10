import { Request, Response } from "express";
import { IEstado } from "./TypeEstado";

export const create = (req: Request<unknown, unknown, IEstado>, res: Response) => {
    res.send("Controller de estado funcionando");
    console.log(req.body);
};