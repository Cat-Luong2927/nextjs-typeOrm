/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../modeldto/user.dto';

const user = new UserDto();

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return 'All users';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `User ${id}`;
  }

  @Post('create')
  createUser(@Body() user): UserDto {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    return UserDto.plainToClass(user);
  }
}
