import { Prisma } from '@prisma/client';
import { prisma } from '../config';

async function create(data: Prisma.BetsUncheckedCreateInput) {
    return prisma.bets.create({
      data,
    });
  }
  
  async function findAllBets() {
    return prisma.bets.findMany();
  }

  async function findBetsById(id: number, select?: Prisma.BetsSelect) {
   
    const params: Prisma.BetsFindUniqueArgs = {
      where: {
        id,
      },
    };
  
    if (select) {
      params.select = select;
    }
  
    return prisma.bets.findUnique(params);
  }
  
  async function findBetsByGameId(gameId: number, select?: Prisma.BetsSelect) {
    const params: Prisma.BetsFindManyArgs= {
      where: {
        gameId,
      },
    };
  
    if (select) {
      params.select = select;
    }
  
    return prisma.bets.findMany(params);
  
  }


  export const betsRepository = {
    create,
    findAllBets,
    findBetsById,
    findBetsByGameId
  };