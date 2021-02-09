import joi from "joi";
import mongoose from "mongoose";

const adminSchema = joi.object({
  adminId: mongoose.Types.ObjectId,
  username: joi.string().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = { adminSchema };
