import { Module } from '@nestjs/common';
import { AlunoService } from './aluno/aluno.service';
import { AlunoController } from './aluno/aluno.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ProfessorController } from './professor/professor.controller';
import { ProfessorService } from './professor/professor.service';
import { CursoController } from './curso/curso.controller';
import { CursoService } from './curso/curso.service';
import { DisciplinaController } from './disciplina/disciplina.controller';
import { DisciplinaService } from './disciplina/disciplina.service';


@Module({
  controllers: [AlunoController, ProfessorController, CursoController, DisciplinaController],
  providers: [AlunoService, ProfessorService, CursoService, DisciplinaService, PrismaService]
})
export class UniversidadeModule {}
