import { Router } from 'express';

import { createParticipantSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { participantPost } from '@/controllers';

const participantsRouter = Router();

participantsRouter.post('/', validateBody(createParticipantSchema), participantPost);

export { participantsRouter };