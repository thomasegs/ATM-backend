import { Request, Response } from "express";
import { IMarca } from "./TypesMarca";


export const create = (req: Request<unknown,unknown, IMarca>, res: Response) => {
    
    console.log(req.body);

    res.send("Create de marca_motor funcionando.");
};
