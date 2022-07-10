import express from "express";
import { addUser, userLogin } from "../handlers/user.js";

const router = express.Router();

router.post("/user/add", addUser);
router.post("/user/login", userLogin);

export default router;
