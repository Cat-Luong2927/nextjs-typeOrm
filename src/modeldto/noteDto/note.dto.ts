/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";

export class NoteDto {
  @IsNotEmpty()
  //Expose giúp hiện field 
  @Expose()
  title: string;

  @Expose()
  description: string;

}