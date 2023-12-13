/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './note.entity';
import { NotesService } from './note.service';

@Module({
    imports: [TypeOrmModule.forFeature([NoteEntity])],
    controllers: [NoteController],
    providers: [NotesService],
})
export class NoteModule{

}