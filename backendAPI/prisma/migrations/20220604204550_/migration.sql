/*
  Warnings:

  - A unique constraint covering the columns `[numberTitle]` on the table `userandnumber` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numberTitle` to the `userandnumber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userandnumber" ADD COLUMN     "numberTitle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userandnumber_numberTitle_key" ON "userandnumber"("numberTitle");
