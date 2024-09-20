//Methods to be executed on routes
import Blog from "../model/model.js";

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

//update a post
const update = async (req, res) => {
  const { id } = req.params;
  const blog = req.body;
  try {
    const newBlog = await Blog.findByIdAndUpdate(id, blog, {
      returnOriginal: "after",
    });
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

//delete post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Blog.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

//get one post
const getOneBlog = async (req, res) => {
  console.log("getOneBlog");
  const { id } = req.params;
  console.log("id is - ", id);
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
};

//get all posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { create, update, deleteBlog, getOneBlog, getAllBlogs };
