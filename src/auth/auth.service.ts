/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../entity/userEntity/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/modeldto/userDto/user.dto';
import { UserEntity } from '../entity/userEntity/user.entity';
import { plainToClass } from 'class-transformer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    public usersService: UsersService,
    ) {}

  async login(authDto: AuthDto): Promise<any> {
    const user = await this.usersService.findByEmail(authDto.email);
    const hasPassword = await bcrypt.hash(authDto.password, parseInt(this.configService.get('SALTORROUNDS')));
    
    const isMatch = await bcrypt.compare(hasPassword, user.password);
    console.log({isMatch, hasPassword, password: user.password, salt: parseInt(this.configService.get('SALTORROUNDS')), dtopw: authDto.password});
    if (isMatch) {
      return user;
    }
    return null;
  }

  async register(user: UserDto): Promise<UserEntity> {
    try {
        // Hash mật khẩu
        const hashedPassword = await bcrypt.hash(user.password, parseInt(this.configService.get('SALTORROUNDS')));
  
        // Tạo một đối tượng UserEntity từ DTO
        const userEntity = await plainToClass(UserEntity, {
          ...user,
          password: hashedPassword, // Gán mật khẩu đã hash vào trường 'password'
        });
  
        // Lưu đối tượng vào cơ sở dữ liệu
        const savedUser = await this.usersService.create(userEntity);
  
        return savedUser;
      } catch (error) {
        console.error('Error during registration:', error.message);
        throw error;
      }
    }
}
