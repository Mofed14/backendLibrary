"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const joi_phone_number_1 = __importDefault(require("joi-phone-number"));
const joi_1 = __importDefault(require("joi"));
const bookSchema = joi_1.default.object().keys({
    userId: mongoose_1.default.Types.ObjectId,
    username: joi_1.default.string().min(2).max(40).required(),
    password: joi_1.default.string().min(3).max(15).required(),
    email: joi_1.default
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    fisrtname: joi_1.default.string().required(),
    lastname: joi_1.default.string().required(),
    picture: "pic",
    address: joi_1.default.string().required(),
    phoneNumber: joi_phone_number_1.default.string().phoneNumber(),
});
module.exports = { bookSchema };
//# sourceMappingURL=userModel.js.map