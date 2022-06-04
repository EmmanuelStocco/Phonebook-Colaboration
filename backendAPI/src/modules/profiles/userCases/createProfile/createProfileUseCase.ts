import { ProfilePhoto } from '@prisma/client';
import { AppError } from '../../../../erros/AppErros';
import { prisma } from "../../../../prisma/client";

import { CreateProfileDTO } from "../../DTOs/CreateProfileDTO";


export class CreateUseProfileUseCase {
    async execute({profile_photo, social_media_link}: CreateProfileDTO): Promise<ProfilePhoto>{
 
        // const profileAlreadyExists = await prisma.profilePhoto.findUnique({
        //     where: {
        //         social_media_link
        //     }
        // })
        // if(profileAlreadyExists){
        //     throw new AppError("profileAlreadyExists ");
        // }

        const profile = await prisma.profilePhoto.create({
            data: {
                profile_photo,
                social_media_link
            }
        });

        return profile;
    }
}