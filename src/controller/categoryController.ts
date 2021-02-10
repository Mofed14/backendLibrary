import categoryModel from "../model/category";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";
import mongoose, { Schema } from "mongoose";
import { ValidateCategory } from "../helper/validator";

export class CategoryController implements Icrud {
  constructor() {}
  find(req: Request, res: Response) {
    throw new Error("Method not implemented.");
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
  update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}
