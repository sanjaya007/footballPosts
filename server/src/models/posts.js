import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("post", postSchema);

export default Post;
