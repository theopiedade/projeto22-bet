import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.bets.deleteMany({});
  await prisma.games.deleteMany({});
  await prisma.participant.deleteMany({});
}