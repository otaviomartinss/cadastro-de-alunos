import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DisciplinaOnCursoService } from './disciplinaOnCurso.service';
import { DisciplinaOnCursoDTO } from "./universidade.dto"

@Controller('disciplinaoncurso')
export class DisciplinaOnCursoController {
  constructor(private readonly disciplinaOnCursoService: DisciplinaOnCursoService) {}
  
  @Post()
  async create(@Body() data: DisciplinaOnCursoDTO) {
    return this.disciplinaOnCursoService.create(data);
  }

  @Get()
  async findAll(){
    return this.disciplinaOnCursoService.findAll();
  }

  @Get(":cursoId")
  async findMany(@Param("cursoId") cursoId: string){
    return this.disciplinaOnCursoService.findMany(cursoId);
  }

  // @Put(":id")
  // async update(@Param("id") id: string, @Body() data: DisciplinaOnCursoDTO){
  //   return this.disciplinaOnCursoService.update(id, data)
  // }

  // @Delete(":id")
  // async delete(@Param("id") id: string){
  //   return this.disciplinaOnCursoService.delete(id)
  // }
}
