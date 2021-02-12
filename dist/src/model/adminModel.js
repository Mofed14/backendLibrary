"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const adminSchema = new schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
const admin = mongoose_1.default.model("admin", adminSchema);
exports.default = admin;
//# sourceMappingURL=adminModel.js.map