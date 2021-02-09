import express from "express";
import { BookController } from "../controller/booksController";
const router = express.Router();

const bookcontroller = new BookController();

router.get("/", bookcontroller.find);

export default router;
