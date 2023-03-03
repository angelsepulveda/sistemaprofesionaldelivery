import { NextFunction,Request, Response } from 'express'
import httpStatus from 'http-status'

import DomainException from '../../../domain/DomainException'

export default function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof DomainException) {
    res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
  } else {
    next(err);
  }
}