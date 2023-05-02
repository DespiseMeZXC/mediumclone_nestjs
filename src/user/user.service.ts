import { Injectable } from "@nestjs/common";
import { createUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private readonly userReposetory: Repository<UserEntity>,){}

    async createUser(createUserDto : createUserDto) : Promise<UserEntity>{
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.userReposetory.save(newUser);
    }
}