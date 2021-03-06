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
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';
import { DisciplinaOnCursoController } from './disciplinaOnCurso.controller';
import { DisciplinaOnCursoService } from './disciplinaOnCurso.service';


@Module({
  controllers: [AlunoController, ProfessorController, CursoController, DisciplinaController, NotaController, DisciplinaOnCursoController],
  providers: [PrismaService, AlunoService, ProfessorService, CursoService, DisciplinaService, NotaService, DisciplinaOnCursoService]
})
export class UniversidadeModule {}
