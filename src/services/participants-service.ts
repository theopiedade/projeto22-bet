import { Participant } from '@prisma/client';
import { duplicatedEmailError } from '../errors';
import { participantsRepository } from '../repositories';

export async function createParticipant({ name, balance }: CreateParticipantParams): Promise<Participant> {

  await validateUniqueNameOrFail(name);

  return participantsRepository.create({
    name,
    balance,
  });
}

async function validateUniqueNameOrFail(name: string) {
  const userWithSameEmail = await participantsRepository.findByName(name);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}


export type CreateParticipantParams = Pick<Participant, 'name' | 'balance'>;

export const participantsService = {
  createParticipant,
};
