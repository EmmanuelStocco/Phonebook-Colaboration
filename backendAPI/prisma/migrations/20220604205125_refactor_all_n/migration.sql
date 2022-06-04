/*
  Warnings:

  - The primary key for the `phone_numbers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `phone_numbers` table. All the data in the column will be lost.
  - The primary key for the `userandnumber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numberTitle` on the `userandnumber` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[number_phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `phone_numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "phone_numbers" DROP CONSTRAINT "phone_numbers_userId_fkey";

-- DropForeignKey
ALTER TABLE "userandnumber" DROP CONSTRAINT "userandnumber_numberId_fkey";

-- DropForeignKey
ALTER TABLE "userandnumber" DROP CONSTRAINT "userandnumber_userId_fkey";

-- DropIndex
DROP INDEX "phone_numbers_userId_key";

-- DropIndex
DROP INDEX "userandnumber_numberTitle_key";

-- AlterTable
ALTER TABLE "phone_numbers" DROP CONSTRAINT "phone_numbers_pkey",
DROP COLUMN "userId",
ADD COLUMN     "number" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "phone_numbers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "phone_numbers_id_seq";

-- AlterTable
ALTER TABLE "userandnumber" DROP CONSTRAINT "userandnumber_pkey",
DROP COLUMN "numberTitle",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "numberId" SET DATA TYPE TEXT,
ADD CONSTRAINT "userandnumber_pkey" PRIMARY KEY ("userId", "numberId");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "number_phone" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "users_number_phone_key" ON "users"("number_phone");

-- AddForeignKey
ALTER TABLE "userandnumber" ADD CONSTRAINT "userandnumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userandnumber" ADD CONSTRAINT "userandnumber_numberId_fkey" FOREIGN KEY ("numberId") REFERENCES "phone_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
