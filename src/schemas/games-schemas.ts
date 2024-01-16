import Joi from 'joi';
import { CreateGameParams, FinishGameParams } from '@/services/games-service';

export const createGameSchema = Joi.object<CreateGameParams>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});

export const finishGameSchema = Joi.object<FinishGameParams>({
  homeTeamScore: Joi.number().min(0).required(),
  awayTeamScore: Joi.number().min(0).required(),
});