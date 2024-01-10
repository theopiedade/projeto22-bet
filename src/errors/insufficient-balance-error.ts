import { ApplicationError } from '@/protocols';

export function insufficientBalanceError(): ApplicationError {
  return {
    name: 'InsufficientBalanceError',
    message: 'No balance sufficient for this bet value in the participant account',
  };
}
