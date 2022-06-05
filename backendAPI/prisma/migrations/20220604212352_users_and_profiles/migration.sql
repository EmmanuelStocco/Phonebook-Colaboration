/*
  Warnings:

  - You are about to drop the `phone_numbers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userandnumber` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userandnumber" DROP CONSTRAINT "userandnumber_numberId_fkey";

-- DropForeignKey
ALTER TABLE "userandnumber" DROP CONSTRAINT "userandnumber_userId_fkey";

-- DropTable
DROP TABLE "phone_numbers";

-- DropTable
DROP TABLE "userandnumber";

-- CreateTable
CREATE TABLE "profile_photo" (
    "id" TEXT NOT NULL,
    "profile_photo" TEXT NOT NULL,
    "social_media_link" TEXT NOT NULL,

    CONSTRAINT "profile_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userandprofile" (
    "userId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "userandprofile_pkey" PRIMARY KEY ("userId","profileId")
);

-- AddForeignKey
ALTER TABLE "userandprofile" ADD CONSTRAINT "userandprofile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userandprofile" ADD CONSTRAINT "userandprofile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile_photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
