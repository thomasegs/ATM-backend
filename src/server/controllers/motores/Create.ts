import { Request, Response } from "express";

export const create = (req: Request, res: Response) => {
  
    const data = req.body;
    
    console.log(data);

    res.send("Create de motores funcionando.");
};
