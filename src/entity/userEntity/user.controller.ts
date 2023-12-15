/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '../../auth/auth.guard';
import { Roles } from '../../auth/role/roles.decorator';
import { Role } from '../../auth/role/role.enum';
import { RolesGuard } from '../../auth/role/roles.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UsersService){}
    @Get()
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    getUserById(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

}
