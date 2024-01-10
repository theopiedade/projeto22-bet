import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { gamesService } from '../services';
import dayjs from 'dayjs';


export async function gamePost(req: Request, res: Response) {
    const { homeTeamName, awayTeamName } = req.body;
  
    const game = await gamesService.createGames({ homeTeamName, awayTeamName });
  
    return res.status(httpStatus.CREATED).json({
      id: game.id,
      createdAt:  dayjs(game.createdAt).format('DD/MM/YYYY'),
      updatedAt: dayjs(game.updatedAt).format('DD/MM/YYYY'),
      homeTeamName: game.homeTeamName,
      awayTeamName: game.awayTeamName,
      homeTeamScore: game.homeTeamScore,
      awayTeamScore: game.awayTeamScore,
      isFinished: game.isFinished
    });
  }
  
export async function getGames(req: Request, res: Response) {
    const games = await gamesService.getGames();
  
    const result = games.map(game => 
      ({
        id: game.id,
        createdAt:  dayjs(game.createdAt).format('DD/MM/YYYY'),
        updatedAt: dayjs(game.updatedAt).format('DD/MM/YYYY'),
        homeTeamName: game.homeTeamName,
        awayTeamName: game.awayTeamName,
        homeTeamScore: game.homeTeamScore,
        awayTeamScore: game.awayTeamScore,
        isFinished: game.isFinished
      }))
      return res.status(httpStatus.OK).send(result);
  
  }

export async function getGameById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const game = await gamesService.getGamesById(id);

    return res.status(httpStatus.OK).json({
        id: game.id,
        createdAt:  dayjs(game.createdAt).format('DD/MM/YYYY'),
        updatedAt: dayjs(game.updatedAt).format('DD/MM/YYYY'),
        homeTeamName: game.homeTeamName,
        awayTeamName: game.awayTeamName,
        homeTeamScore: game.homeTeamScore,
        awayTeamScore: game.awayTeamScore,
        isFinished: game.isFinished
      });
}