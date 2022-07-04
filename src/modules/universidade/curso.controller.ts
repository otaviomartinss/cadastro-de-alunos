import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDTO } from "./universidade.dto"

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}
  
  @Post()
  async create(@Body() data: CursoDTO) {
    return this.cursoService.create(data);
  }

  @Get()
  async findAll(){
    return this.cursoService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: CursoDTO){
    return this.cursoService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return this.cursoService.delete(id)
  }
}
