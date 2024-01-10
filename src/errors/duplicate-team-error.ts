import { ApplicationError } from '@/protocols';

export function duplicatedTeamError(): ApplicationError {
  return {
    name: 'DuplicatedTeamError',
    message: 'The Teams playing must be different each other',
  };
}