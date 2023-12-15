/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {  Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards } from '@nestjs/common';
import { UserDto } from '../modeldto/userDto/user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from '../entity/userEntity/user.entity';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('create')
    async createUser(@Body() user: UserDto): Promise<UserEntity> {
        const newUser = await this.authService.register(user)
        return newUser;
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() user: AuthDto): Promise<UserEntity> {
        const newUser = await this.authService.login(user)
        return newUser;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }
}