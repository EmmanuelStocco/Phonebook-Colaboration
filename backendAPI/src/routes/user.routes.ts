import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { GetUsersByReleaseDateController } from "../modules/users/useCases/getUserByRealaseDate/getUserByReleaseDateUseController";

const createUserController = new CreateUserController();
const getUserByReleaseDateUseCase = new GetUsersByReleaseDateController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/",  getUserByReleaseDateUseCase.handle)

export { userRoutes };