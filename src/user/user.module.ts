/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
    imports: [UserModule],
    controllers: [UserController],
    providers: [],
})
export class UserModule{

}