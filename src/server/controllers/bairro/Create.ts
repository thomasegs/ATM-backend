import { Request, Response } from "express";
import { IBairro } from "./TypesBairro";

export const create = (req: Request<unknown, unknown, IBairro>, res: Response) => {
    res.send("Controller bairro funcionando.");

    console.log(req.body);
};