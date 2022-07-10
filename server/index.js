import express from "express";
import "./src/db/conn.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import postRouters from "./src/routers/posts.js";
import userRouters from "./src/routers/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(postRouters);
app.use(userRouters);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log("I am live at " + PORT);
});
