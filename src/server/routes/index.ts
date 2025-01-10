import { Router } from "express";

import { MotoresController } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {
    res.send("Olá mundo");
  });

router.post("/motores", MotoresController.create);


export { router };
