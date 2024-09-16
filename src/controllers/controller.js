//Methods to be executed on routes

import Blog from "../model/model.js";

//posts
const posts = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
  });
  try {
    const dataToSave = await blog.save();
    res.status(200).json(dataToSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//method2
const method2 = (req, res) => {
  res.send("Hello, welcome to my app, second method");
};

export { posts, method2 };
