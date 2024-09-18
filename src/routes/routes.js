import { Router } from "express";

import { create, update, method2 } from "../controllers/controller.js";

//express router
const router = Router();

//api routes
router.post("/posts", create);
router.put("/posts/:id", update);
router.get("/2", method2);

export default router;
