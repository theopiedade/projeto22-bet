import { Router } from 'express';

import { createUserSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { participantsPost } from '@/controllers';

const participantsRouter = Router();

participantsRouter.post('/', validateBody(createParticipantSchema), participantsPost);

export { participantsRouter };