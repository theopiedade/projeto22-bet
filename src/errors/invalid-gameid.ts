import { ApplicationError } from '@/protocols';

export function invalidGameId(): ApplicationError {
  return {
    name: 'InvalidGameId',
    message: 'Invalid game id or it doesnt exists',
  };
}