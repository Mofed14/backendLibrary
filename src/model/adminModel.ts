import joi from "joi";

const adminSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = { adminSchema };
