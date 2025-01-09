import { Router } from "express";
import { home } from "./home/home";
import { login } from "./login/login";
import { motores } from "./motores/motores";

const router = Router();

router.use(home);
router.use(login);
router.use(motores);

export { router };
