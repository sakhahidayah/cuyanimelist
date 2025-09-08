/*
  Warnings:

  - Added the required column `rating` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `rating` VARCHAR(191) NOT NULL;
