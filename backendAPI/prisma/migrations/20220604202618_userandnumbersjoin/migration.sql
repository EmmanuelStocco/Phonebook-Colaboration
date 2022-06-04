-- CreateTable
CREATE TABLE "userandnumber" (
    "userId" INTEGER NOT NULL,
    "numberId" INTEGER NOT NULL,

    CONSTRAINT "userandnumber_pkey" PRIMARY KEY ("userId","numberId")
);

-- AddForeignKey
ALTER TABLE "userandnumber" ADD CONSTRAINT "userandnumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userandnumber" ADD CONSTRAINT "userandnumber_numberId_fkey" FOREIGN KEY ("numberId") REFERENCES "phone_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
