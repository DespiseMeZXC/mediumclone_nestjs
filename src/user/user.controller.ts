import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/createUser.dto";

@Controller()
export class UserController{
    constructor(private readonly userService:UserService) {}
    @Post('users')
    async createUser(@Body('user') createUserDto: createUserDto): Promise<any> {
        console.log('createUserDto', createUserDto);
        return this.userService.createUser(createUserDto);
    }
}