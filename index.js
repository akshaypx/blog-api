//module imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//file imports
import router from "./src/routes/routes.js";

//loading env file
dotenv.config();

//mongodb connection
const mongoString = process.env.MONGODB_URI;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (err) => console.log(err));
database.once("connected", () => console.log("Database connected"));

//express app
const app = express();

app.use(express.json());
//setting api routes
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
