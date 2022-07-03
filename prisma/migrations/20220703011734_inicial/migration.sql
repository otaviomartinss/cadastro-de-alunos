-- CreateTable
CREATE TABLE "alunos" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME NOT NULL,
    "curso" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "professores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "disciplinas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "notas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nota" DECIMAL NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_matricula_key" ON "alunos"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "professores_id_key" ON "professores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cursos_id_key" ON "cursos"("id");
