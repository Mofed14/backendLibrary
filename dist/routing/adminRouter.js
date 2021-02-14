"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controller/adminController");
const router = express_1.default.Router();
const adminController = new adminController_1.AdminController();
router.post("/register", adminController.register);
router.post("/login", adminController.login);
exports.default = router;
//# sourceMappingURL=adminRouter.js.map