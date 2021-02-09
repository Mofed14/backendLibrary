import joi, { date } from "joi";
import mongoose from "mongoose";
const schema = mongoose.Schema;

const categorySchema = joi.object({
  reviewId: mongoose.Types.ObjectId,
  BookId: { type: schema.Types.ObjectId, ref: "bookSchema" },
  userId: { type: schema.Types.ObjectId, ref: "userSchema" },
  textReview: joi.string(),
  rate: joi.number().min(1).max(5),
  date: { type: Date, default: Date.now() },
});

module.exports = { categorySchema };
