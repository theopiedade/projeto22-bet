import { Prisma } from '@prisma/client';
import { prisma } from '../config';

async function create(data: Prisma.GamesUncheckedCreateInput) {
    return prisma.games.create({
      data,
    });
  }


  
  async function findAllGames() {
    return prisma.games.findMany();
  }

  async function findGamesById(id: number, select?: Prisma.GamesSelect) {
   
    const params: Prisma.GamesFindUniqueArgs = {
      where: {
        id,
      },
    };
  
    if (select) {
      params.select = select;
    }
  
    return prisma.games.findUnique(params);
  }

  async function finishGameById(id: number, homeTeamScore: number, awayTeamScore: number ) {
    const updatedGame = await prisma.games.update({
      where: { id: id },
      data: {
        homeTeamScore: homeTeamScore,
        awayTeamScore: awayTeamScore,
        isFinished: true,
      },
    });
    return updatedGame;
  }
  
  export const gamesRepository = {
    create,
    findAllGames,
    findGamesById,
    finishGameById
  };