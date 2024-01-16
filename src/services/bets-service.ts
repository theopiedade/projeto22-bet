import { Bets } from '@prisma/client';
import { insufficientBalanceError, invalidGameId, invalidParticipantId } from '../errors';
import { betsRepository, participantsRepository } from '../repositories';
import { gamesService } from '../services';


export async function createBets({ 
    homeTeamScore, awayTeamScore, amountBet, gameId, participantId  }: CreateBetParams): Promise<Bets> {

  await validateParticipantId(participantId);    
  await validateAmountBet(amountBet, participantId);
  await gamesService.validateGameId(gameId);


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

  async function getBetsByGameId(id: number) {
    return betsRepository.findBetsByGameId(id);
  }
  
  async function validateAmountBet(amountBet: number, participantId: number) {
    const participant = await participantsRepository.findParticipantsById(participantId);

    if (participant.balance < amountBet) {
      throw insufficientBalanceError();
    }
  }


 
  async function validateParticipantId(participantId: number) {
    const participant = await participantsRepository.findParticipantsById(participantId);

    if (!participant || participant == null) {
      throw invalidParticipantId();
    }
  }


  
  export type CreateBetParams = Pick<Bets, 'homeTeamScore' | 'awayTeamScore' | 'amountBet' | 'gameId' | 'participantId' >;
  
  export const betsService = {
    createBets,
    getBets,
    getBetsByGameId,
    validateAmountBet
  };