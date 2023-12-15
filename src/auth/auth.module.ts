/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/userEntity/user.entity';
import { UsersService } from 'src/entity/userEntity/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Role } from '../entity/roleEntity/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, Role]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }}),
  ],
  providers: [
    AuthService, 
    UsersService,
  ],
  controllers: [AuthController,]
})
export class AuthModule {}
