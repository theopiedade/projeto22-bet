/*
  Warnings:

  - You are about to alter the column `amountBet` on the `bets` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "bets" ALTER COLUMN "amountBet" SET DATA TYPE INTEGER;
