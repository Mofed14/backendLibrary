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
exports.CategoryController = void 0;
const category_1 = __importDefault(require("../model/category"));
const validator_1 = require("../helper/validator");
const bookModel_1 = __importDefault(require("../model/bookModel"));
class CategoryController {
    constructor() { }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield category_1.default
                    .find()
                    .populate("book")
                    .sort({ createdAt: -1 });
                res.json({
                    case: 1,
                    message: "All categories",
                    data: categories,
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
                const validation = yield validator_1.ValidateCategory(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const categories = yield new category_1.default({
                    categoryName: req.body.categoryName,
                    categoryDisciption: req.body.categoryDisciption,
                });
                categories.save();
                res.json({
                    case: 1,
                    message: "categories Is Created",
                    data: categories,
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
                const validation = yield validator_1.ValidateCategory(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                yield category_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.json({
                    case: 1,
                    message: "The category is updated",
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
                yield category_1.default.findByIdAndDelete(req.params.id);
                res.json({
                    case: 1,
                    message: "The category is deleted",
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
    insertBookIncate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catId = req.params.catId;
            try {
                const validation = yield validator_1.ValidateBook(req.body);
                if (validation.error) {
                    res.json({
                        case: 2,
                        message: "invalid data",
                        error: validation.error.message,
                    });
                }
                const book = yield new bookModel_1.default({
                    bookName: req.body.bookName,
                    author: req.body.author,
                    picture: req.body.picture,
                    pages: req.body.pages,
                    darElNashr: req.body.darElNashr,
                    price: req.body.price,
                    description: req.body.description,
                }).save();
                const cate = yield category_1.default.findById(catId).populate("book");
                cate["book"].push(book);
                yield cate.save();
                res.json({
                    case: 1,
                    message: "The book is inserted in its category",
                    data: cate,
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
exports.CategoryController = CategoryController;
//# sourceMappingURL=categoryController.js.map