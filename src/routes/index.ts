import { Router } from "express";

export const router = Router();

router.get("/", (_, res) => {
    return res.json({ message: "hello world" });
});

router.post("/cadastro", (req, res) => {
    return res.json(req.body);
});
