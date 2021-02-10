import express from "express";
import { CategoryController } from "../controller/categoryController";
const router = express.Router();

const categoryController = new CategoryController();

router.get("/", categoryController.find);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

export default router;
