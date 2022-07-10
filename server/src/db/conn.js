import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/football";

const config = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(URL, config);
    console.log("Database connection successfull !!");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
