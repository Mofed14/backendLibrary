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
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    fisrtname: { type: String, required: true },
    lastname: { type: String, required: true },
    picture: "pic",
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
});
const user = mongoose_1.default.model("user", userSchema);
exports.default = user;
//# sourceMappingURL=userModel.js.map