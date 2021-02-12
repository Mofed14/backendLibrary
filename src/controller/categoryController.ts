import category from "../model/category";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";
import mongoose, { Schema } from "mongoose";
import { ValidateBook, ValidateCategory } from "../helper/validator";
import booksModel from "../model/bookModel";

export class CategoryController implements Icrud {
  constructor() {}
  async find(req: Request, res: Response) {
    try {
      const categories = await category
        .find()
        .populate("book")
        .sort({ createdAt: -1 });
      res.json({
        case: 1,
        message: "All categories",
        data: categories,
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
      const validation = await ValidateCategory(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }

      const categories = await new category({
        categoryName: req.body.categoryName,
        categoryDisciption: req.body.categoryDisciption,
      });
      categories.save();

      res.json({
        case: 1,
        message: "categories Is Created",
        data: categories,
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
      const validation = await ValidateCategory(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }
      await category.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json({
        case: 1,
        message: "The category is updated",
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
      await category.findByIdAndDelete(req.params.id);
      res.json({
        case: 1,
        message: "The category is deleted",
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }

  async insertBookIncate(req, res) {
    const catId = req.params.catId;
    try {
      const validation = await ValidateBook(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }

      const book = await new booksModel({
        bookName: req.body.bookName,
        author: req.body.author,
        picture: req.body.picture,
        pages: req.body.pages,
        darElNashr: req.body.darElNashr,
        price: req.body.price,
        description: req.body.description,
      }).save();
      const cate = await category.findById(catId).populate("book");
      cate["book"].push(book);
      await cate.save();
      res.json({
        case: 1,
        message: "The book is inserted in its category",
        data: cate,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
}
