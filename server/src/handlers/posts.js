import mongoose from "mongoose";
import PostModel from "../models/posts.js";

const addPosts = async (req, res) => {
  try {
    const body = req.body;

    const post = new PostModel({
      ...body,
      creator: req?.userId,
      author: req?.userName,
      createdAt: new Date().toISOString(),
    });

    if (!req.userId) return res.json({ message: "Unauthenticated !" });

    const result = await post.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const result = await PostModel.find().sort({ createdAt: -1 });
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const updatePosts = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.userId) return res.json({ message: "Unauthenticated !" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post with that id");

    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const deletePosts = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.userId) return res.json({ message: "Unauthenticated !" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post with that id");

    const result = await PostModel.findByIdAndRemove({ _id: id }, req.body);
    res.status(201).json(id);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const likePosts = async (req, res) => {
  const id = req.params.id;
  try {
    if (!req.userId) return res.json({ message: "Unauthenticated !" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post with that id");

    const thePost = await PostModel.findById(id);
    const alreadyLiked = thePost.likes.indexOf(req.userId);

    if (alreadyLiked === -1) {
      thePost.likes.push(req.userId);
    } else {
      thePost.likes = thePost.likes.filter((id) => id !== req.userId);
    }

    const likesUpdatedPost = await PostModel.findByIdAndUpdate(id, thePost, {
      new: true,
    });
    res.status(201).json(likesUpdatedPost);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export { addPosts, getPosts, updatePosts, deletePosts, likePosts };
