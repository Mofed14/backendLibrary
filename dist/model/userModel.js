"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const userSchema = new schema({
    userId: mongoose_1.default.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    picture: { type: String, required: true },
    fisrtname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
});
const user = mongoose_1.default.model("user", userSchema);
exports.default = user;
//# sourceMappingURL=userModel.js.map