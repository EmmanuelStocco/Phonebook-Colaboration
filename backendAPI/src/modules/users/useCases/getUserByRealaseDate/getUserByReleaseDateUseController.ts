import { Response, Request } from "express";
import { GetUserByReleaseDateUseCase } from "./getUserByReleaseDateUseCase";

export class GetUsersByReleaseDateController {
    async handle (req: Request, res: Response){
        const {name, number_phone} = req.body;

        const getMoviesbyReleaseDateUseCase = new GetUserByReleaseDateUseCase();
        const result = await getMoviesbyReleaseDateUseCase.execute();   

        return res.status(201).json(result);
    }
}