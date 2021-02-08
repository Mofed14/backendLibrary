"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var url = "mongodb://localhost/lib";
try {
    var db = mongoose_1.default.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("successfully connected with database");
}
catch (error) {
    throw error;
}
exports.default = db;
