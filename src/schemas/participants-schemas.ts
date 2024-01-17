import Joi from 'joi';
import { CreateParticipantParams } from '@/services/participants-service';

export const createParticipantSchema = Joi.object<CreateParticipantParams>({
  name: Joi.string().required(),
  balance: Joi.number().min(1000).required(),
});
