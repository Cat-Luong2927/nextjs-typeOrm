/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../entity/userEntity/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/modeldto/userDto/user.dto';
import { UserEntity } from '../entity/userEntity/user.entity';
import { plainToClass } from 'class-transformer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    public usersService: UsersService,
    private jwtService: JwtService,
    ) {}

  async login(authDto: AuthDto): Promise<any> {
    const user = await this.usersService.findByEmail(authDto.email);
    
    const isMatch = await bcrypt.compare(authDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.firstName, roles: user.roles.map(role => role.name)};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(user: UserDto): Promise<UserEntity> {
    try {
      const salt = this.configService.get<string>('SALT');
      console.log(salt)
        // Hash mật khẩu
        const hashedPassword = await bcrypt.hash(user.password, parseInt(salt));
        const defaultRole = await this.usersService.findRoleById(2); // Assuming you have a role with id 2
  
        // Tạo một đối tượng UserEntity từ DTO
        const userEntity = await plainToClass(UserEntity, {
          ...user,
          password: hashedPassword, // Gán mật khẩu đã hash vào trường 'password'
          roles: [defaultRole],
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
