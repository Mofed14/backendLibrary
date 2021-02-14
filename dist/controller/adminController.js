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
exports.AdminController = void 0;
const adminModel_1 = __importDefault(require("../model/adminModel"));
const validator_1 = require("../helper/validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AdminController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = yield validator_1.ValidateAdmin(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: validation.error.message,
                    });
                }
                const admins = yield adminModel_1.default.find({ username: req.body.username });
                if (admins.length >= 1) {
                    res.json({
                        case: 4,
                        message: "username is exist",
                    });
                }
                try {
                    const hash = yield bcrypt_1.default.hash(req.body.password, 10);
                    const admin = yield new adminModel_1.default({
                        username: req.body.username,
                        password: hash,
                    }).save();
                    res.json({
                        case: 1,
                        message: "The admin is inserted",
                        data: admin,
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
                const admin = yield adminModel_1.default.find({ username: req.body.username }); // هات العناصر اللي الايميل بتاعها ده
                //  admin["0"].username ==> هنا بقوله اول اوبجت في الاريه اطبع الايميل منه
                if (admin["0"].username.length < 1) {
                    res.jso({
                        case: 2,
                        message: "username is not found",
                    });
                }
                try {
                    const match = yield bcrypt_1.default.compare(req.body.password, admin["0"].password);
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
}
exports.AdminController = AdminController;
//# sourceMappingURL=adminController.js.map