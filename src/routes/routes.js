import { Router } from "express";

import { posts, method2 } from "../controllers/controller.js";

//express router
const router = Router();

//api routes
router.post("/posts", posts);
router.get("/2", method2);

export default router;
