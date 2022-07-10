import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
