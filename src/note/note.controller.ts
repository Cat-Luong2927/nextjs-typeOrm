/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { NoteDto } from '../modeldto/noteDto/note.dto';
import { NotesService } from './note.service';
import { NoteEntity } from './note.entity';

@Controller('notes')
export class NoteController {
    constructor(private noteService: NotesService){}
    @Get()
    getAllNotes() {
        return this.noteService.findAll()
    }
    @Get(':id')
    getNoteById(@Param('id') id: number) {
        return this.noteService.findOne(id)
    }

    // @Post('create')
    // createNote(@Body() noteDto: NoteDto): NoteEntity {
    //     return noteDto.plainToClass(NoteEntity);
    // }
}