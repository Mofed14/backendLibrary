"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_1 = require("../controller/categoryController");
const router = express_1.default.Router();
const categoryController = new categoryController_1.CategoryController();
router.get("/", categoryController.find);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);
exports.default = router;
//# sourceMappingURL=categoryRouter.js.map