import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { betsService } from '../services';
import dayjs from 'dayjs';


export async function betsPost(req: Request, res: Response) {
    const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;
  
    const bet = await betsService.createBets({ homeTeamScore, awayTeamScore, amountBet, gameId, participantId});
  
    return res.status(httpStatus.CREATED).json({
      id: bet.id,
      createdAt:  dayjs(bet.createdAt).format('DD/MM/YYYY'),
      updatedAt: dayjs(bet.updatedAt).format('DD/MM/YYYY'),
      homeTeamScore: bet.homeTeamScore,
      awayTeamScore: bet.awayTeamScore,
      amountBet: bet.amountBet,
      gameId: bet.gameId,
      participantId: bet.participantId,
      status: bet.status,
      amountWon: bet.amountWon
    });
  }
  
export async function getBetsByGameId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const bets = await betsService.getBetsByGameId(id);

  
    const result = bets.map(bet => 
      ({
        id: bet.id,
        createdAt:  dayjs(bet.createdAt).format('DD/MM/YYYY'),
        updatedAt: dayjs(bet.updatedAt).format('DD/MM/YYYY'),
        homeTeamScore: bet.homeTeamScore,
        awayTeamScore: bet.awayTeamScore,
        amountBet: bet.amountBet,
        gameId: bet.gameId,
        participantId: bet.participantId,
        status: bet.status,
        amountWon: bet.amountWon
      }))
      return res.status(httpStatus.OK).send(result);
  
  }
