import { Request, Response } from "express";
import { IUsuario_Lotado } from "./TypesUsuario_lotado";

export const create = (req: Request<unknown, unknown, IUsuario_Lotado>, res: Response) => {
    res.send("Controller de usuário que pertence ao setor funcionando");
    console.log(req.body);
};
