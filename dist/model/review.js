"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const categorySchema = joi_1.default.object({
    reviewId: mongoose_1.default.Types.ObjectId,
    BookId: { type: schema.Types.ObjectId, ref: "bookSchema" },
    userId: { type: schema.Types.ObjectId, ref: "userSchema" },
    textReview: joi_1.default.string(),
    rate: joi_1.default.number().min(1).max(5),
    date: { type: Date, default: Date.now() },
});
module.exports = { categorySchema };
//# sourceMappingURL=review.js.map