import { Router } from "express";
import { CreateProfieController } from "../modules/profiles/userCases/createProfile/createProfileUseController";

const createProfieController = new CreateProfieController();

const profileRoutes = Router();
profileRoutes.post('/', createProfieController.handle);

export { profileRoutes };