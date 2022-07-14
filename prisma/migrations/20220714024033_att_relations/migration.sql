/*
  Warnings:

  - You are about to drop the `DisciplinasOnCursos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DisciplinasOnProfessores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DisciplinasOnCursos" DROP CONSTRAINT "DisciplinasOnCursos_cursoId_fkey";

-- DropForeignKey
ALTER TABLE "DisciplinasOnCursos" DROP CONSTRAINT "DisciplinasOnCursos_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "DisciplinasOnProfessores" DROP CONSTRAINT "DisciplinasOnProfessores_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "DisciplinasOnProfessores" DROP CONSTRAINT "DisciplinasOnProfessores_professorId_fkey";

-- DropTable
DROP TABLE "DisciplinasOnCursos";

-- DropTable
DROP TABLE "DisciplinasOnProfessores";

-- CreateTable
CREATE TABLE "disciplinas_on_professores" (
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "disciplinas_on_professores_pkey" PRIMARY KEY ("professorId","disciplinaId")
);

-- CreateTable
CREATE TABLE "disciplinas_on_cursos" (
    "cursoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "disciplinas_on_cursos_pkey" PRIMARY KEY ("cursoId","disciplinaId")
);

-- AddForeignKey
ALTER TABLE "disciplinas_on_professores" ADD CONSTRAINT "disciplinas_on_professores_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplinas_on_professores" ADD CONSTRAINT "disciplinas_on_professores_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplinas_on_cursos" ADD CONSTRAINT "disciplinas_on_cursos_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplinas_on_cursos" ADD CONSTRAINT "disciplinas_on_cursos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
