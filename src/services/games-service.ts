import { Games } from '@prisma/client';
import { duplicatedTeamError, invalidGameId, gameIsAlreadyFinished } from '../errors';
import { betsRepository, gamesRepository } from '../repositories';
import { betsService } from '.';


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

  async function validateGameId(gameId: number) {
    const checkGameId = await gamesRepository.findGamesById(gameId);

    if (!checkGameId || checkGameId == null) {
      throw invalidGameId();
    }
  }
  
  async function finishGameById(id: number, homeTeamScore: number, awayTeamScore: number) {
    await validateGameId(id);

    const game = await getGamesById(id);

    if (game.isFinished === true) throw gameIsAlreadyFinished();

    gamesRepository.finishGameById(id, homeTeamScore, awayTeamScore);

    checkBetScores(id, homeTeamScore, awayTeamScore)
  }

  async function checkBetScores(id: number, homeTeamScore: number, awayTeamScore: number) {
    
    const bets = await betsService.getBetsByGameId(id);

    let sumAllBetsAmount = 0;
    let sumAllWinnersBetsAmount = 0;
    
    bets.map(bet => 
      {
       sumAllBetsAmount+=bet.amountBet;
       if (bet.homeTeamScore == homeTeamScore || bet.awayTeamScore == awayTeamScore) 
        sumAllWinnersBetsAmount+=bet.amountBet;
      })
    
    bets.map(betCheck => 
        {
         if (betCheck.homeTeamScore == homeTeamScore || betCheck.awayTeamScore == awayTeamScore) {
          const amountWonCalc = (betCheck.amountBet/sumAllWinnersBetsAmount) * (sumAllBetsAmount) * (0.7);

          const amountWon = Math.floor(amountWonCalc);

          finishBet(betCheck.id, "WON",amountWon) 
         }
         else finishBet(betCheck.id, "LOST", 0);
        })
  }

  async function finishBet(id: number, status: string, amountWon: number) {
    betsRepository.updateBets(id, status, amountWon);
  }

  export type CreateGameParams = Pick<Games, 'homeTeamName' | 'awayTeamName'>;

  export type FinishGameParams = Pick<Games, 'homeTeamScore' | 'awayTeamScore'>;
  
  export const gamesService = {
    createGames,
    getGames,
    getGamesById,
    validateDiferentTeams,
    validateGameId,
    finishGameById
  };