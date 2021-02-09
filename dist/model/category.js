"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = joi_1.default.object({
    categoryId: mongoose_1.default.Types.ObjectId,
    categoryName: joi_1.default.string().required(),
    categoryDisciption: joi_1.default.string().min(100).max(1000).required(),
});
module.exports = { categorySchema };
//# sourceMappingURL=category.js.map