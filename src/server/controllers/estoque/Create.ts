import { Request, Response } from "express";
import { IEstoque } from "./TypesEstoque";


export const create = (req: Request<unknown,unknown, IEstoque>, res: Response) => {
    
    console.log(req.body);

    res.send("Create de estoque funcionando.");
};
