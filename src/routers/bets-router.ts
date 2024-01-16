import { Router } from 'express';

import { createBetSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { betsPost, getBetsByGameId } from '@/controllers';

const betsRouter = Router();

betsRouter.post('/', validateBody(createBetSchema), betsPost);
betsRouter.get('/:id', getBetsByGameId );


export { betsRouter };