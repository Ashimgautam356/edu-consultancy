/*
  Warnings:

  - A unique constraint covering the columns `[roomLink]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomLink` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "adminId" INTEGER NOT NULL,
ADD COLUMN     "roomLink" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Chat_roomLink_key" ON "Chat"("roomLink");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
