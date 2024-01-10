import { Prisma } from '@prisma/client';
import { prisma } from '../config';

async function findByName(name: string, select?: Prisma.ParticipantSelect) {
  const params: Prisma.ParticipantFindUniqueArgs = {
    where: {
      name,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.participant.findUnique(params);
}

async function create(data: Prisma.ParticipantUncheckedCreateInput) {
  return prisma.participant.create({
    data,
  });
}

export const participantsRepository = {
  findByName,
  create,
};
