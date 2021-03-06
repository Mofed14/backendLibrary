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
const validator_1 = require("../helper/validator");
class BookController {
    constructor() { }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield bookModel_1.default.find().sort({ createdAt: -1 });
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
                const validation = yield validator_1.ValidateBook(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const books = yield new bookModel_1.default({
                    bookName: req.body.bookName,
                    author: req.body.author,
                    picture: req.body.picture,
                    pages: req.body.pages,
                    darElNashr: req.body.darElNashr,
                    price: req.body.price,
                    description: req.body.description,
                });
                books.save();
                res.json({
                    case: 1,
                    message: "Book Is Created",
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = yield validator_1.ValidateBook(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const book = yield bookModel_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.json({
                    case: 1,
                    message: "The book is updated",
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
                yield bookModel_1.default.findByIdAndDelete(req.params.id);
                res.json({
                    case: 1,
                    message: "The book is deleted",
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
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = {
                    text: req.body.text,
                    postedBy: req.body.postedBy,
                };
                const coms = yield bookModel_1.default
                    .findByIdAndUpdate(req.params.id, {
                    $push: { comments: comment },
                }, { new: true })
                    .populate("comments.postedBy");
                res.json({
                    case: 1,
                    message: "added comment",
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
}
exports.BookController = BookController;
//# sourceMappingURL=booksController.js.map