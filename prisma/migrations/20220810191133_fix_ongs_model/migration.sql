/*
  Warnings:

  - You are about to drop the column `password` on the `ongs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ongs" DROP COLUMN "password",
ADD COLUMN     "site" TEXT,
ALTER COLUMN "telephone" DROP NOT NULL;
