import Joi from 'joi';
import { CreateGameParams } from '@/services/games-service';

export const createGameSchema = Joi.object<CreateGameParams>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});