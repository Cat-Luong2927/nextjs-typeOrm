/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { UserDto } from './user.dto';

@Module({
  imports: [UserDto],
})
export class UserModule{

}