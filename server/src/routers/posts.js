import express from "express";
import {
  getPosts,
  addPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../handlers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/posts", auth, addPosts);
router.get("/posts", getPosts);
router.patch("/posts/:id", auth, updatePosts);
router.delete("/posts/:id", auth, deletePosts);
router.patch("/posts/like/:id", auth, likePosts);

export default router;
