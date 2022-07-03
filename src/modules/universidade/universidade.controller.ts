import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UniversidadeService } from './universidade.service';
import { AlunoDTO, ProfessorDTO, DisciplinaDTO, CursoDTO, NotaDTO } from "./universidade.dto"

@Controller('aluno')
export class UniversidadeController {
  constructor(private readonly universidadeService: UniversidadeService) {}
  
  @Post()
  async create(@Body() data: AlunoDTO) {
    return this.universidadeService.create(data);
  }

  @Get()
  async findAll(){
    return this.universidadeService.findAll();
  }

  @Put(":matricula")
  async update(@Param("matricula") matricula: string, @Body() data: AlunoDTO){
    return this.universidadeService.update(matricula, data)
  }
}
