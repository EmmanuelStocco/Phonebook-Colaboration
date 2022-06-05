import { Response, Request } from "express";
import { CreateUseProfileUseCase } from "./createProfileUseCase";

export class CreateProfieController {
    async handle(req: Request, res: Response){
        const {profile_photo, social_media_link} = req.body;

        const createUseProfileUseCase = new CreateUseProfileUseCase();
        const result = await createUseProfileUseCase.execute({profile_photo, social_media_link});

        return res.status(201).json(result);
    }
}