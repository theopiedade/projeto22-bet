import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { participantsService } from '../services';

export async function participantPost(req: Request, res: Response) {
  const { email, balance } = req.body;

  const user = await participantsService.createParticipant({ email, balance });

  return res.status(httpStatus.CREATED).json({
    id: user.id,
    email: user.email,
  });
}
