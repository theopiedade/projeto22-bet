import { ApplicationError } from '@/protocols';

export function gameIsAlreadyFinished(): ApplicationError {
  return {
    name: 'gameIsAlreadyFinished',
    message: 'Game is already finished',
  };
}