import PostModel from "../models/posts.js";

const addPosts = async (req, res) => {
  const body = req.body;
  const post = new PostModel(body);
  try {
    const result = await post.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(201).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const result = await PostModel.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(201).json({
      message: error.message,
    });
  }
};

export { addPosts, getPosts };
