/*
  Warnings:

  - A unique constraint covering the columns `[country]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Universities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Countries_country_key" ON "Countries"("country");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_name_key" ON "Universities"("name");
