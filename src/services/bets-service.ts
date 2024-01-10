import { Bets } from '@prisma/client';
import { insufficientBalanceError, invalidGameId, invalidParticipantId } from '../errors';
import { betsRepository, participantsRepository, gamesRepository } from '../repositories';


export async function createBets({ 
    homeTeamScore, awayTeamScore, amountBet, gameId, participantId  }: CreateBetParams): Promise<Bets> {
  
  await validateAmountBet(amountBet, participantId);
  await validateGameId(gameId);
  await validateParticipantId(participantId);

    return betsRepository.create({
      homeTeamScore,
      awayTeamScore,
      amountBet,
      gameId,
      participantId
    });
  }
    
  async function getBets() {
    return betsRepository.findAllBets();
  }

  async function getBetById(id: number) {
    return betsRepository.findBetsById(id);
  }
  
  async function validateAmountBet(amountBet: number, participantId: number) {
    const participantAmount = await participantsRepository.findParticipantsById(participantId);

    if (participantAmount.balance < amountBet) {
      throw insufficientBalanceError();
    }
  }

  async function validateGameId(gameId: number) {
    const checkGameId = await gamesRepository.findGamesById(gameId);

    if (checkGameId && checkGameId != null) {
      throw invalidGameId();
    }
  }
 
  async function validateParticipantId(participantId: number) {
    const participant = await participantsRepository.findParticipantsById(participantId);

    if (participant && participant != null) {
      throw invalidParticipantId();
    }
  }


  
  export type CreateBetParams = Pick<Bets, 'homeTeamScore' | 'awayTeamScore' | 'amountBet' | 'gameId' | 'participantId' >;
  
  export const betsService = {
    createBets,
    getBets,
    getBetById,
    validateAmountBet
  };