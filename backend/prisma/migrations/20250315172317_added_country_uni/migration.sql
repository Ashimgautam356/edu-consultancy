-- CreateTable
CREATE TABLE "Countries" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universities" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Universities" ADD CONSTRAINT "Universities_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
