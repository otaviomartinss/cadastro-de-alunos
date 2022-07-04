import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorDTO } from "./universidade.dto"

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}
  
  @Post()
  async create(@Body() data: ProfessorDTO) {
    return this.professorService.create(data);
  }

  @Get()
  async findAll(){
    return this.professorService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ProfessorDTO){
    return this.professorService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return this.professorService.delete(id)
  }
}
