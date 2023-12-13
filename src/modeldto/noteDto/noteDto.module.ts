/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { NoteDto } from './note.dto';

@Module({
  imports: [NoteDto],
})
export class NoteModule{

}