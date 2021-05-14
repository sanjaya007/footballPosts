import mongoose from "mongoose";
const URL = "mongodb://localhost:27017/football";
const config = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(URL, config)
  .then(() => {
    console.log("Database connection is successfull !");
  })
  .catch((error) => {
    console.log(error);
  });
