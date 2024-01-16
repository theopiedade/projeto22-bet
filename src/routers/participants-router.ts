import { Router } from 'express';

import { createParticipantSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { getParticipants, participantPost, getParticipantsById} from '@/controllers';

const participantsRouter = Router();

participantsRouter.post('/', validateBody(createParticipantSchema), participantPost);
participantsRouter.get('/', getParticipants);
participantsRouter.get('/:id', getParticipantsById);

export { participantsRouter };