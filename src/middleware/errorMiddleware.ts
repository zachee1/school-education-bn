import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/errorHandling';

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.name, message: err.message, status: 'failed' });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      error: httpStatus['500_NAME'],
      message: err.message,
      status: 'failed'
    });
  }
};
