import express from "express";
import { UserController } from "../controller/userController";
const router = express.Router();

const usercontroller = new UserController();

router.get("/", usercontroller.find);
router.post("/register", usercontroller.create);
router.post("/login", usercontroller.login);
router.put("/:id", usercontroller.update);
router.delete("/:id", usercontroller.delete);

export default router;
