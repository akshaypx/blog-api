import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log("Server started at 3000");
});
