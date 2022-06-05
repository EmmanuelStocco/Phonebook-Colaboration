import { Router } from "express";
import { userRoutes } from "./user.routes";
import { profileRoutes } from "./profile.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/profiles", profileRoutes);

export { routes };