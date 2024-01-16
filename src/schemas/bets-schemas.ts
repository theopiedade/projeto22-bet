import Joi from 'joi';
import { CreateBetParams } from '@/services/bets-service';

export const createBetSchema = Joi.object<CreateBetParams>({
  homeTeamScore: Joi.number().min(0).required(),
  awayTeamScore: Joi.number().min(0).required(),
  amountBet:Joi.number().required(),
  gameId:Joi.number().required(),
  participantId:Joi.number().required(),
});
