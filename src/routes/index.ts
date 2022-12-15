import { Router } from "express";
import { GuestsController, UsersController } from "../controllers";

export const router = Router();

router.get("/", (_, res) => {
    return res.json({ message: "Server is running!" });
});

router.post("/convidados/cadastro", GuestsController.create);
router.post("/user/create", UsersController.create);
