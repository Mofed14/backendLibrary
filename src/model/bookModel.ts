import mongoose from "mongoose";
import joi from "joi";

const bookSchema = joi.object({
  bookId: mongoose.Types.ObjectId,
  bookName: joi.string().min(2).max(40).required(),
  author: joi.string().min(2).max(12).required(),
  categoryId: mongoose.Types.ObjectId,
  picture: "pic",
  pages: joi.number().required(),
  darElNashr: joi.string().required(),
  price: joi.number().required(),
  createdAt: { type: Date, default: Date.now },
  description: joi.string().min(100).max(1000).required(),
});

module.exports = { bookSchema };