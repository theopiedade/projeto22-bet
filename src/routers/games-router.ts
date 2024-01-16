import { Router } from 'express';

import { createGameSchema, finishGameSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { gamePost, getGames, getGameById, finishGameById } from '@/controllers';

const gamesRouter = Router();

gamesRouter.post('/', validateBody(createGameSchema), gamePost);
gamesRouter.get('/', getGames);
gamesRouter.get('/:id', getGameById);
gamesRouter.post('/:id/finish', validateBody(finishGameSchema), finishGameById);

export { gamesRouter };