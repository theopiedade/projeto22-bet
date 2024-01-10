import { ApplicationError } from '@/protocols';

export function invalidParticipantId(): ApplicationError {
  return {
    name: 'InvalidParticipantId',
    message: 'Invalid participant id or it doesnt exists',
  };
}
