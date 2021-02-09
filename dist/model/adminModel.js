"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const adminSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
module.exports = { adminSchema };
//# sourceMappingURL=adminModel.js.map