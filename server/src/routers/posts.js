import express from "express";
import {
  getPosts,
  addPosts,
  updatePosts,
  deletePosts,
} from "../handlers/posts.js";

const router = express.Router();

router.post("/posts", addPosts);
router.get("/posts", getPosts);
router.patch("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);

export default router;
