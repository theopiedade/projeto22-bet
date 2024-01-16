import { Router } from 'express';

import { createBetSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { betsPost } from '@/controllers';

const betsRouter = Router();

betsRouter.post('/', validateBody(createBetSchema), betsPost);


export { betsRouter };