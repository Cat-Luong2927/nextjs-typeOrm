import { Module } from '@nestjs/common';
import { UserModule } from './entity/userEntity/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/userEntity/user.entity';
import { NoteModule } from './note/note.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './entity/roleEntity/role.module';
import { Role } from './entity/roleEntity/role.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'mysql',
      password: 'Abcd123456789',
      database: 'demo',
      entities: [UserEntity, Role],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    NoteModule,
    RoleModule,
  ],
})
export class AppModule {}
