import PostModel from "../models/posts.js";

const addPosts = async (req, res) => {
  const body = req.body;
  const post = new PostModel(body);
  try {
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
    const result = await PostModel.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const updatePosts = async (req, res) => {
  const id = req.params.id;
  try {
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

export { addPosts, getPosts, updatePosts };
