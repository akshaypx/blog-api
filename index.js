//module imports
import express from "express";
import dotenv from "dotenv";

//file imports
import router from "./src/routes/routes.js";
import db from "./mongodb.js";

//loading env file
dotenv.config();

db();

//express app
const app = express();

app.use(express.json());
//setting api routes
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
