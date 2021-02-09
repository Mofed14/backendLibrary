import mongoose from "mongoose";
import customeJoi from "joi-phone-number";

import joi from "joi";

const userSchema = joi.object().keys({
  userId: mongoose.Types.ObjectId,
  username: joi.string().min(2).max(40).required(),
  password: joi.string().min(3).max(15).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  fisrtname: joi.string().required(),
  lastname: joi.string().required(),
  picture: "pic",
  address: joi.string().required(),
  phoneNumber: customeJoi.string().phoneNumber(),
});

module.exports = { userSchema };
