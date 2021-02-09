"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booksController_1 = require("../controller/booksController");
const router = express_1.default.Router();
const bookcontroller = new booksController_1.BookController();
router.get("/", bookcontroller.find);
exports.default = router;
//# sourceMappingURL=booksRouter.js.map