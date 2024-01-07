import { Participant } from '@prisma/client';
import { duplicatedEmailError } from '../errors';
import { participantsRepository } from '../repositories';

export async function createParticipant({ email, balance }: CreateParticipantParams): Promise<Participant> {

  await validateUniqueEmailOrFail(email);

  return participantRepository.create({
    email,
    balance,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await participantRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}


export type CreateParticipantParams = Pick<Participant, 'email' | 'balance'>;

export const participantsService = {
  createParticipant,
};
