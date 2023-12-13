/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty } from "class-validator";
import { Expose} from "class-transformer";

export class UserDto {
  @IsNotEmpty()
  //Expose giúp hiện field 
  @Expose()
  userName: string;

  // @Expose()
  firstName: string;
  // @Expose()
  lastName: string;
  
  @IsNotEmpty()
  @Expose()
  password: string;

  @IsNotEmpty()
  @Expose()
  email: string;
}