import booksmodel from "../model/bookModel";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";
import mongoose, { Schema } from "mongoose";
import { ValidateBook } from "../helper/validator";

export class BookController implements Icrud {
  constructor() {}
  async find(req: Request, res: Response) {
    try {
      const books = await booksmodel.find().sort({ createdAt: -1 });
      res.json({
        case: 1,
        message: "All Books",
        data: books,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const validation = ValidateBook(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }

      const books = await new booksmodel({
        booksId: mongoose.Types.ObjectId(),
        bookName: req.body.bookName,
        author: req.body.author,
        categoryId: req.body.categoryId,
        picture: req.body.picture,
        pages: req.body.pages,
        darElNashr: req.body.darElNashr,
        price: req.body.price,
        description: req.body.description,
      });
      books.save();
      console.log("mofed");

      res.json({
        case: 1,
        message: "Books Is Created",
        data: books,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const validation = ValidateBook(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }
      const book = await booksmodel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json({
        case: 1,
        message: "The book is updated",
        data: req.body,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      await booksmodel.findByIdAndDelete(req.params.id);
      res.json({
        case: 1,
        message: "The book is deleted",
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
}
