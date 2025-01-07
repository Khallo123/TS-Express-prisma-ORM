/*
  Warnings:

  - A unique constraint covering the columns `[phone_number,username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "phone_number" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_username_key" ON "users"("phone_number", "username");