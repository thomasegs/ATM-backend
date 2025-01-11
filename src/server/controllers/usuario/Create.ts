import { Request, Response } from "express";
import { IUsuario } from "./TypesUsuario";

export const create = (req: Request<unknown, unknown, IUsuario>, res: Response) => {
    res.send("Controller de usuário funcionando");
    console.log(req.body);
};
