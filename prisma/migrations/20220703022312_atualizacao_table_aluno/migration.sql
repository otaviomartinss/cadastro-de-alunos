-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alunos" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "curso" TEXT NOT NULL
);
INSERT INTO "new_alunos" ("curso", "matricula", "nascimento", "nome") SELECT "curso", "matricula", "nascimento", "nome" FROM "alunos";
DROP TABLE "alunos";
ALTER TABLE "new_alunos" RENAME TO "alunos";
CREATE UNIQUE INDEX "alunos_matricula_key" ON "alunos"("matricula");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
