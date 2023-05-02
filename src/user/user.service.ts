import { Injectable } from "@nestjs/common";
import { createUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {sign} from "jsonwebtoken"
import { UserResponseInterface } from "./types/userResponse.interface";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private readonly userReposetory: Repository<UserEntity>,){}

    async createUser(createUserDto : createUserDto) : Promise<UserEntity>{
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.userReposetory.save(newUser);
    }

    generateJwt(user: UserEntity) : string{
        return sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, process.env.KEY_TOKEN)
    }
    buildUserResponse(user: UserEntity) :UserResponseInterface{
        return {
            user : {
            ...user,
            token : this.generateJwt(user)
        },
        };
    }
}