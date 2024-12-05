/*
  Warnings:

  - You are about to drop the `book` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('ADMIN', 'VENDOR', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('none', 'request', 'suspend', 'delete');

-- DropTable
DROP TABLE "book";

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "userRole" NOT NULL DEFAULT 'CUSTOMER',
    "status" "userStatus" NOT NULL DEFAULT 'none',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "VendorShop" (
    "vendorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorShop_pkey" PRIMARY KEY ("vendorId")
);

-- CreateTable
CREATE TABLE "VendorId" (
    "vendorId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "VendorId_pkey" PRIMARY KEY ("vendorId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VendorShop_email_key" ON "VendorShop"("email");

-- AddForeignKey
ALTER TABLE "VendorShop" ADD CONSTRAINT "VendorShop_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorId" ADD CONSTRAINT "VendorId_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorId" ADD CONSTRAINT "VendorId_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "VendorShop"("vendorId") ON DELETE RESTRICT ON UPDATE CASCADE;
