import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  caption: String,
  tags: [String],
  file: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("post", postSchema);

export default Post;
