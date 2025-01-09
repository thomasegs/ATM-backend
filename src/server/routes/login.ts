import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const login = Router();

login.post("/login", (req, res) => {
  const login = req.body;
  res.status(StatusCodes.OK).json(login);
});

export { login };
