import { Router } from "express";
import userRoutes from "./user-routes";
import questionRoutes from "./question-routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/questions", questionRoutes);
export default routes;
