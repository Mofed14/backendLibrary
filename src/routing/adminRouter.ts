import express from "express";
import { AdminController } from "../controller/adminController";
const router = express.Router();

const adminController = new AdminController();

router.post("/register", adminController.register);
router.post("/login", adminController.login);

export default router;
