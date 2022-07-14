import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDTO } from "./universidade.dto"

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}
  
  @Post()
  async create(@Body() data: AlunoDTO) {
    return this.alunoService.create(data);
  }

  @Get()
  async findAll(){
    return this.alunoService.findAll();
  }

  @Put(":matricula")
  async update(@Param("matricula") matricula: string, @Body() data: AlunoDTO){
    return this.alunoService.update(matricula, data)
  }

  @Delete(":matricula")
  async delete(@Param("matricula") matricula: string){
    return this.alunoService.delete(matricula)
  }
}
