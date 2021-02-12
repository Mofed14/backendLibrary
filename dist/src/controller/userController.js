"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const validator_1 = require("../helper/validator");
class UserController {
    constructor() { }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userModel_1.default.find().sort({ createdAt: -1 });
                res.json({
                    case: 1,
                    message: "All users",
                    data: users,
                });
            }
            catch (error) {
                res.json({
                    case: 0,
                    message: error.message,
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = yield validator_1.ValidateUser(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const users = yield new userModel_1.default({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    fisrtname: req.body.fisrtname,
                    lastname: req.body.lastname,
                    // picture: "pic",
                    address: req.body.address,
                    phoneNumber: req.body.phoneNumber,
                });
                users.save();
                res.json({
                    case: 1,
                    message: "User Is Created",
                    data: users,
                });
            }
            catch (error) {
                res.json({
                    case: 0,
                    message: error.message,
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = yield validator_1.ValidateUser(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                yield userModel_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.json({
                    case: 1,
                    message: "The user is updated",
                    data: req.body,
                });
            }
            catch (error) {
                res.json({
                    case: 0,
                    message: error.message,
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userModel_1.default.findByIdAndDelete(req.params.id);
                res.json({
                    case: 1,
                    message: "The user is deleted",
                });
            }
            catch (error) {
                res.json({
                    case: 0,
                    message: error.message,
                });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map