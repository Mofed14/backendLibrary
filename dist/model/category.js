"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const categorySchema = new schema({
    categoryId: mongoose_1.default.Schema.Types.ObjectId,
    categoryName: { type: String, required: true },
    categoryDisciption: { type: String, required: true },
});
const category = mongoose_1.default.model("category", categorySchema);
exports.default = category;
//# sourceMappingURL=category.js.map