import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaDTO } from "../universidade.dto"

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}
  
  @Post()
  async create(@Body() data: DisciplinaDTO) {
    return this.disciplinaService.create(data);
  }

  @Get()
  async findAll(){
    return this.disciplinaService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: DisciplinaDTO){
    return this.disciplinaService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return this.disciplinaService.delete(id)
  }
}
