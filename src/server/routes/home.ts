import { Router } from "express";

const home = Router();

home.get("/", (req, res) => {
  res.send("Olá mundo");
});

export { home };
