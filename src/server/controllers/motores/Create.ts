import { Request, Response } from "express";
import { IMotor } from "./TypesMotor";

export const create = (req: Request<unknown, unknown, IMotor>, res: Response) => {
  
    const data = req.body;
    
    console.log(data);

    res.send("Create de motores funcionando.");
};
