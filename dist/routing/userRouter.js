"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
const usercontroller = new userController_1.UserController();
router.get("/", usercontroller.find);
router.post("/register", usercontroller.create);
router.post("/login", usercontroller.login);
router.put("/:id", usercontroller.update);
router.delete("/:id", usercontroller.delete);
exports.default = router;
//# sourceMappingURL=userRouter.js.map