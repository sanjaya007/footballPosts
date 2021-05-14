import express from "express";
import "./src/db/conn.js";
import bodyParser from "body-parser";
import cors from "cors";

import routers from "./src/routers/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(routers);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log("I am live at " + PORT);
});
