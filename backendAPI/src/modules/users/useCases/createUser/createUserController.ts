import { Response, Request } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    async handle (req: Request, res: Response){
        const {name, number_phone} = req.body;

        const createUserUseCase = new CreateUserUseCase();
        const result = await createUserUseCase.execute({name, number_phone});   

        return res.status(201).json(result);
    }
}