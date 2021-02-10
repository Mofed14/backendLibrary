"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const reviewSchema = new schema({
    reviewId: mongoose_1.default.Types.ObjectId,
    BookId: { type: schema.Types.ObjectId, ref: "bookSchema" },
    userId: { type: schema.Types.ObjectId, ref: "userSchema" },
    textReview: String,
    rate: Number,
    date: { type: Date, default: Date.now() },
});
const review = mongoose_1.default.model("review", reviewSchema);
exports.default = review;
//# sourceMappingURL=review.js.map