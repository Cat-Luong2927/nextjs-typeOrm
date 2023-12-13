/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../modeldto/userDto/user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from '../entity/userEntity/user.entity';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('create')
    async createUser(@Body() user: UserDto): Promise<UserEntity> {
        const newUser = await this.authService.register(user)
        return newUser;
    }

    @Post('login')
    async login(@Body() user: AuthDto): Promise<UserEntity> {
        const newUser = await this.authService.login(user)
        return newUser;
    }
}