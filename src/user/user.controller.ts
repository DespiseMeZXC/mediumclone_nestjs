import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/createUser.dto";
import { UserResponseInterface } from "./types/userResponse.interface";

@Controller()
export class UserController{
    constructor(private readonly userService:UserService) {}
    @Post('users')
    async createUser(@Body('user') createUserDto: createUserDto): Promise<UserResponseInterface> {
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user);
    }
}