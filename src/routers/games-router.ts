import { Router } from 'express';

import { createGameSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { gamePost, getGames, getGameById } from '@/controllers';

const gamesRouter = Router();

gamesRouter.post('/', validateBody(createGameSchema), gamePost);
gamesRouter.get('/', getGames);
gamesRouter.get('/:id', getGameById);

export { gamesRouter };