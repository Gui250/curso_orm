import { Router } from "express";
import { UserController } from "../models/user-controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create.bind(userController));

export default userRoutes;
