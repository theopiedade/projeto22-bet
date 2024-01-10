import { Participant } from '@prisma/client';
import { duplicatedNameError } from '../errors';
import { participantsRepository } from '../repositories';

export async function createParticipant({ name, balance }: CreateParticipantParams): Promise<Participant> {

  await validateUniqueNameOrFail(name);

  return participantsRepository.create({
    name,
    balance,
  });
}

async function validateUniqueNameOrFail(name: string) {
  const userWithSameName = await participantsRepository.findByName(name);
  if (userWithSameName) {
    throw duplicatedNameError();
  }
}

async function getParticipants() {
  return participantsRepository.findParticipants();
}


export type CreateParticipantParams = Pick<Participant, 'name' | 'balance'>;

export const participantsService = {
  createParticipant,
  getParticipants
};
