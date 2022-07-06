/*
  Warnings:

  - The primary key for the `notas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "notas" DROP CONSTRAINT "notas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "notas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "notas_id_seq";
