import userModel from "../model/userModel";
import { Request, Response } from "express";
import { Icrud } from "../interface/ICrud";
import mongoose, { Schema } from "mongoose";
import { ValidateUser } from "../helper/validator";
import bcrypt from "bcrypt";

export class UserController implements Icrud {
  constructor() {}
  async find(req: Request, res: Response) {
    try {
      const users = await userModel.find().sort({ _id: -1 });
      res.json({
        case: 1,
        message: "All users",
        data: users,
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
      const validation = await ValidateUser(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: validation.error.message,
        });
      }
      try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = await new userModel({
          username: req.body.username,
          password: hash,
          email: req.body.email,
          fisrtname: req.body.fisrtname,
          lastname: req.body.lastname,
          picture: req.body.picture,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
        }).save();
        res.json({
          case: 1,
          message: "The user is inserted",
          data: user,
        });
      } catch (error) {
        res.json({
          case: 3,
          message: error.message,
        });
      }
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
  async login(req, res) {
    try {
      const user = await userModel.find({ email: req.body.email }); // هات العناصر اللي الايميل بتاعها ده
      //  user["0"].email ==> هنا بقوله اول اوبجت في الاريه اطبع الايميل منه
      if (user["0"].email.length < 1) {
        res.jso({
          case: 2,
          message: "mail is not found",
        });
      }

      try {
        const match = await bcrypt.compare(
          req.body.password,
          user["0"].password
        );
        // قارن بين الباسورد اللي انا هدخله والباسورد اللي موجود
        if (!match) {
          res.json({
            case: 4,
            message: "Authentication error",
          });
        }
        res.json({
          case: 1,
          message: `authentication successful, Hello ${user["0"].username}`,
          data: user,
        });
      } catch (error) {
        res.json({
          case: 3,
          message: `Wrong password. ${error.message}`,
        });
      }
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const validation = await ValidateUser(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: "invalid data",
          error: validation.error.message,
        });
      }
      await userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      const hash = await bcrypt.hash(req.body.password, 10);
      res.json({
        case: 1,
        message: "The user is updated",
        data: {
          username: req.body.username,
          password: hash,
          email: req.body.email,
          fisrtname: req.body.fisrtname,
          lastname: req.body.lastname,
          picture: req.body.picture,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
        },
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
      await userModel.findByIdAndDelete(req.params.id);
      res.json({
        case: 1,
        message: "The user is deleted",
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
}
