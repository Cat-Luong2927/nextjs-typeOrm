/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Role } from '../roleEntity/role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, Role])],
    controllers: [UserController],
    providers: [
        UsersService,
    ],
})
export class UserModule{

}