/*
  Warnings:

  - You are about to drop the column `address` on the `ongs` table. All the data in the column will be lost.
  - Added the required column `adress` to the `ongs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ongs" DROP COLUMN "address",
ADD COLUMN     "adress" TEXT NOT NULL;
