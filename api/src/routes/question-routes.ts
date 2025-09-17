import { Router } from "express";
import { QuestionsController } from "../controllers/questions-controllers.js";

const questionRoutes = Router();
const questionsController = new QuestionsController();

questionRoutes.post("/", questionsController.create);
questionRoutes.get("/", questionsController.index);
export default questionRoutes;
