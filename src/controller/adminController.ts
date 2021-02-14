import adminModel from "../model/adminModel";
import { ValidateAdmin } from "../helper/validator";
import bcrypt from "bcrypt";

export class AdminController {
  async register(req, res) {
    try {
      const validation = await ValidateAdmin(req.body);
      if (validation.error) {
        res.json({
          case: 2,
          message: validation.error.message,
        });
      }

      const admins = await adminModel.find({ username: req.body.username });
      if (admins.length >= 1) {
        res.json({
          case: 4,
          message: "username is exist",
        });
      }
      try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const admin = await new adminModel({
          username: req.body.username,
          password: hash,
        }).save();
        res.json({
          case: 1,
          message: "The admin is inserted",
          data: admin,
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
      const admin = await adminModel.find({ username: req.body.username }); // هات العناصر اللي الايميل بتاعها ده
      //  admin["0"].username ==> هنا بقوله اول اوبجت في الاريه اطبع الايميل منه
      if (admin["0"].username.length < 1) {
        res.jso({
          case: 2,
          message: "username is not found",
        });
      }

      try {
        const match = await bcrypt.compare(
          req.body.password,
          admin["0"].password
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
          message: `authentication successful, Hello ${admin["0"].username}`,
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
}
