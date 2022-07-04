import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';


@Module({
  controllers: [AlunoController, ProfessorController, CursoController, DisciplinaController],
  providers: [AlunoService, ProfessorService, CursoService, DisciplinaService, PrismaService]
})
export class UniversidadeModule {}
