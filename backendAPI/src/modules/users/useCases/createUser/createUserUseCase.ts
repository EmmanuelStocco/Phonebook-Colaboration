import { User } from "@prisma/client";
import { AppError } from "../../../../erros/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../DTOs/CreateUserDTO";

export class CreateUserUseCase {
    async execute({ name, number_phone} :CreateUserDTO): Promise<User>{
        //Verificar se o user já existe 
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                number_phone
            }
        })
        if(userAlreadyExists){
            throw new AppError("User linked with that phone");
        }

        const user = await prisma.user.create({
            data: {
                name,
                number_phone
            }
        });

        return user;
    }
}