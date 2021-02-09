"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const bookSchema = joi_1.default.object({
    bookId: mongoose_1.default.Types.ObjectId,
    bookName: joi_1.default.string().min(2).max(40).required(),
    author: joi_1.default.string().min(2).max(12).required(),
    categoryId: mongoose_1.default.Types.ObjectId,
    picture: "pic",
    pages: joi_1.default.number().required(),
    darElNashr: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    createdAt: { type: Date, default: Date.now },
    description: joi_1.default.string().min(100).max(1000).required(),
});
module.exports = { bookSchema };
//# sourceMappingURL=bookModel.js.map