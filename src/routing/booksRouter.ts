import express from "express";
import { BookController } from "../controller/booksController";
const router = express.Router();

const bookcontroller = new BookController();

router.get("/", bookcontroller.find);
router.post("/create", bookcontroller.create);
router.put("/:id", bookcontroller.update);
router.delete("/:id", bookcontroller.delete);
router.put("/:id/comment", bookcontroller.updateComment);

export default router;
