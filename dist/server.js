"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./main"));
try {
    var server = main_1.default.listen(main_1.default.get("port"));
    console.log("App is running on http://localhost:3000");
}
catch (error) {
    throw error;
}
exports.default = server;
