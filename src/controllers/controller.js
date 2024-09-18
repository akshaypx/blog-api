//Methods to be executed on routes

import db from "../../mongodb.js";
import Blog from "../model/model.js";
import { ObjectId } from "mongodb";

//posts
const create = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
  });
  try {
    const dataToSave = await blog.save();
    res.status(201).json(dataToSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//method2
const method2 = (req, res) => {
  res.send("Hello, welcome to my app, second method");
};

const update = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const { id } = req.params;
    const blogs = db().collection("blogs");
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = {
      $set: req.body,
    };
    const result = await blogs.findOneAndUpdate(filter, updatedDoc, {
      returnDocument: "after",
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { create, update, method2 };
