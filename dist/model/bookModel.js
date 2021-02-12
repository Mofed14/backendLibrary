"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const bookSchema = new schema({
    bookName: { type: String, required: true },
    author: { type: String, required: true },
    picture: { type: String, required: true },
    pages: { type: Number, required: true },
    darElNashr: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String, required: true },
});
const Books = mongoose_1.default.model("Books", bookSchema);
exports.default = Books;
//# sourceMappingURL=bookModel.js.map