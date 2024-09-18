import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//mongodb connection
function db() {
  const mongoString = process.env.MONGODB_URI;
  mongoose.connect(mongoString);
  const database = mongoose.connection;
  database.on("error", (err) => {
    console.log(err);
    return null;
  });
  database.once("connected", () => {
    console.log("Database connected");
    return database;
  });
  return database;
}

export default db;
