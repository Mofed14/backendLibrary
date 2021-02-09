import joi from "joi";
import mongoose from "mongoose";

const categorySchema = joi.object({
  categoryId: mongoose.Types.ObjectId,
  categoryName: joi.string().required(),
  categoryDisciption: joi.string().min(100).max(1000).required(),
});

module.exports = { categorySchema };
