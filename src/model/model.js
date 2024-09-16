import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
    tags: {
      required: true,
      type: [String],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
