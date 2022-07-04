-- CreateTable
CREATE TABLE "alunos" (
    "matricula" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "professores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplinasOnProfessores" (
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "DisciplinasOnProfessores_pkey" PRIMARY KEY ("professorId","disciplinaId")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas" (
    "id" SERIAL NOT NULL,
    "nota" DECIMAL(65,30) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_matricula_key" ON "alunos"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "professores_id_key" ON "professores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cursos_id_key" ON "cursos"("id");

-- AddForeignKey
ALTER TABLE "DisciplinasOnProfessores" ADD CONSTRAINT "DisciplinasOnProfessores_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplinasOnProfessores" ADD CONSTRAINT "DisciplinasOnProfessores_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
