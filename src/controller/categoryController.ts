import categoryModel from "../model/category";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";
import mongoose, { Schema } from "mongoose";
import { ValidateCategory } from "../helper/validator";

export class CategoryController implements Icrud {
  constructor() {}
  async find(req: Request, res: Response) {
    try {
      const categories = await categoryModel.find().sort({ createdAt: -1 });
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
      const validation = ValidateCategory(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }

      const categories = await new categoryModel({
        categoryId: mongoose.Types.ObjectId(),
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
      const validation = ValidateCategory(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }
      await categoryModel.findByIdAndUpdate(req.params.id, {
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
      await categoryModel.findByIdAndDelete(req.params.id);
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
}
