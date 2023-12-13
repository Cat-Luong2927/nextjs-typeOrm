/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../../modeldto/userDto/user.dto';
import { UsersService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private userService: UsersService){}
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }
    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

}
