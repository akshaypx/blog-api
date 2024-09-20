import { Router } from "express";

import {
  create,
  update,
  deleteBlog,
  getOneBlog,
  getAllBlogs,
} from "../controllers/controller.js";

//express router
const router = Router();

//api routes
router.post("/posts", create);
router.put("/posts/:id", update);
router.delete("/posts/:id", deleteBlog);
router.get("/posts/:id", getOneBlog);
router.get("/posts", getAllBlogs);

export default router;
