import { Games } from '@prisma/client';
import { duplicatedTeamError } from '../errors';
import { gamesRepository } from '../repositories';


export async function createGames({ homeTeamName, awayTeamName }: CreateGameParams): Promise<Games> {
  
  await validateDiferentTeams(homeTeamName, awayTeamName);

    return gamesRepository.create({
      homeTeamName,
      awayTeamName
    });
  }
    
  async function getGames() {
    return gamesRepository.findAllGames();
  }

  async function getGamesById(id: number) {
    return gamesRepository.findGamesById(id);
  }
  
  async function validateDiferentTeams(homeTeamName: string, awayTeamName: string) {
    if (homeTeamName === awayTeamName) {
      throw duplicatedTeamError();
    }
  }
  
  export type CreateGameParams = Pick<Games, 'homeTeamName' | 'awayTeamName'>;
  
  export const gamesService = {
    createGames,
    getGames,
    getGamesById,
    validateDiferentTeams
  };