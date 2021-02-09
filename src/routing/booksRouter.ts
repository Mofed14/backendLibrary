import express from "express";
import { BookController } from "../controller/booksController";
const router = express.Router();

const bookcontroller = new BookController();

router.get("/", bookcontroller.find);
router.post("/", bookcontroller.create);
router.put("/:id", bookcontroller.update);
router.delete("/:id", bookcontroller.delete);

export default router;
