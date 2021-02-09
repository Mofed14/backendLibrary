import * as bookSchema from "../model/bookModel";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";

export class BookController implements Icrud {
  constructor() {}
  find(req: Request, res: Response) {
    console.log("mofed");
  }
  create(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}
