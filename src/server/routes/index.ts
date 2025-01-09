import { Router } from "express";
import { home } from "./home/home";
import { login } from "./login/login";

const router = Router();

router.use(home);
router.use(login);

export { router };
