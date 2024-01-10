import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { participantsService } from '../services';
import dayjs from 'dayjs';

export async function participantPost(req: Request, res: Response) {
  const { name, balance } = req.body;

  const participant = await participantsService.createParticipant({ name, balance });

  return res.status(httpStatus.CREATED).json({
    id: participant.id,
    createdAt:  dayjs(participant.createdAt).format('DD/MM/YYYY'),
    updatedAt: dayjs(participant.updatedAt).format('DD/MM/YYYY'),
    name: participant.name,
    balance: "R$"+(participant.balance/100).toFixed(2)
  });
}

export async function getParticipants(req: Request, res: Response) {
  const participants = await participantsService.getParticipants();

  const result = participants.map(participant => 
    ({
    id: participant.id,
    createdAt:  dayjs(participant.createdAt).format('DD/MM/YYYY'),
    updatedAt: dayjs(participant.updatedAt).format('DD/MM/YYYY'),
    name: participant.name,
    balance: "R$"+(participant.balance/100).toFixed(2)
    }))
    return res.status(httpStatus.OK).send(result);

}
