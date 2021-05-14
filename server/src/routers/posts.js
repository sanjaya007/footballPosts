import express from "express";
import { getPosts, addPosts } from "../handlers/posts.js";

const router = express.Router();

router.post("/posts", addPosts);
router.get("/posts", getPosts);

export default router;
