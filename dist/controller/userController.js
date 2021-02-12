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
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() { }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userModel_1.default.find().sort({ _id: -1 });
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
                        message: validation.error.message,
                    });
                }
                try {
                    const hash = yield bcrypt_1.default.hash(req.body.password, 10);
                    const user = yield new userModel_1.default({
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
                }
                catch (error) {
                    res.json({
                        case: 3,
                        message: error.message,
                    });
                }
            }
            catch (error) {
                res.json({
                    case: 0,
                    message: error.message,
                });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.find({ email: req.body.email }); // هات العناصر اللي الايميل بتاعها ده
                //  user["0"].email ==> هنا بقوله اول اوبجت في الاريه اطبع الايميل منه
                if (user["0"].email.length < 1) {
                    res.jso({
                        case: 2,
                        message: "mail is not found",
                    });
                }
                try {
                    const match = yield bcrypt_1.default.compare(req.body.password, user["0"].password);
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
                    });
                }
                catch (error) {
                    res.json({
                        case: 3,
                        message: `Wrong password. ${error.message}`,
                    });
                }
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
                const hash = yield bcrypt_1.default.hash(req.body.password, 10);
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