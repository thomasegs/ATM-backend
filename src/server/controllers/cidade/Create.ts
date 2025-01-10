import { Request, Response } from "express";
import { ICidade } from "./TypesCidade";

export const create = (req:Request<unknown, unknown, ICidade>, res: Response) => {
    res.send("Controller de cidades funcionando");
    console.log(req.body);
};