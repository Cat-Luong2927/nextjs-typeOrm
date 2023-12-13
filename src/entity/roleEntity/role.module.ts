/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Role } from './role.entity';

@Module({
  imports: [Role],
})
export class RoleModule{

}