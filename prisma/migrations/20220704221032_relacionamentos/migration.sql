/*
  Warnings:

  - You are about to drop the column `curso` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `curso` on the `disciplinas` table. All the data in the column will be lost.
  - Added the required column `cursoId` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alunoId` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplinaId` to the `notas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alunos" DROP COLUMN "curso",
ADD COLUMN     "cursoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "disciplinas" DROP COLUMN "curso";

-- AlterTable
ALTER TABLE "notas" ADD COLUMN     "alunoId" TEXT NOT NULL,
ADD COLUMN     "disciplinaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DisciplinasOnCursos" (
    "cursoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "DisciplinasOnCursos_pkey" PRIMARY KEY ("cursoId","disciplinaId")
);

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplinasOnCursos" ADD CONSTRAINT "DisciplinasOnCursos_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplinasOnCursos" ADD CONSTRAINT "DisciplinasOnCursos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
