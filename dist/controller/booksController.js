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
exports.BookController = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("../helper/validator");
class BookController {
    constructor() { }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = validator_1.ValidateBook(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const books = yield bookModel_1.default.find();
                res.json({
                    case: 1,
                    message: "All Books",
                    data: books,
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
                const validation = validator_1.ValidateBook(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const books = yield new bookModel_1.default({
                    booksId: mongoose_1.default.Types.ObjectId(),
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
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.BookController = BookController;
//# sourceMappingURL=booksController.js.map