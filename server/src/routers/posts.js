import express from "express";
import { getPosts, addPosts, updatePosts } from "../handlers/posts.js";

const router = express.Router();

router.post("/posts", addPosts);
router.get("/posts", getPosts);
router.patch("/posts/:id", updatePosts);

export default router;
