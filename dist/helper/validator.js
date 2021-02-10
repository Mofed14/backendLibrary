"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBook = void 0;
const joi_1 = __importDefault(require("joi"));
const bookSchema = joi_1.default.object({
    bookName: joi_1.default.string().min(2).max(40).required(),
    author: joi_1.default.string().min(2).max(12).required(),
    categoryId: joi_1.default.string().required(),
    picture: joi_1.default.string().required(),
    pages: joi_1.default.number().required(),
    darElNashr: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    createdAt: { type: Date, default: Date.now },
    description: joi_1.default.string().min(100).max(1000).required(),
});
function ValidateBook(book) {
    return bookSchema.validate(book);
}
exports.ValidateBook = ValidateBook;
//# sourceMappingURL=validator.js.map