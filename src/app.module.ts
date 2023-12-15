/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './entity/roleEntity/role.module';
import { UserModule } from './entity/userEntity/user.module';
import { NoteModule } from './note/note.module';
import dbConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig),
    AuthModule,
    UserModule,
    NoteModule,
    RoleModule,
  ],
})
export class AppModule {}
