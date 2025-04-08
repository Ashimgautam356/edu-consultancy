-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "address" TEXT;

-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "chatName" SET DEFAULT 'Untitled Chat';

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "address" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "address" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imgPublicId" TEXT,
ADD COLUMN     "imgUrl" TEXT;
