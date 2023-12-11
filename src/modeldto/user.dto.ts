/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "../common/base.dto";
import { Expose, Transform } from "class-transformer";

export class UserDto extends BaseDto {
  @IsNotEmpty()
  //Expose giúp hiện field 
  @Expose()
  userName: string;

  // @Expose()
  firstName: string;
  // @Expose()
  lastName: string;

  @Expose()
  @Transform(({obj})=> obj.firstName + " " + obj.lastName)
  fullName: string;
  
  @IsNotEmpty()
  @Expose()
  password: string;
}