import { Response, NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status';
import {
  UnauthorizedError,
  ForbidenError,
  InternalServerError,
  AppError
} from '../utils/errorHandling';
import jwt from 'jsonwebtoken';
import Request from '../types/Request';

type UserRole = 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const authenticated = (roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        throw new UnauthorizedError('Unauthorized. Token missing.');
      }

      const secretKey: string = process.env.JWT_SECRET || '';
      if (!secretKey) {
        throw new InternalServerError('JWT_SECRET_KEY environment variable is not defined.');
      }
      const decodedToken: any = jwt.verify(token, secretKey);
      if (roles.includes(decodedToken.role)) {
        req.user = decodedToken;
        next();
      } else {
        throw new ForbidenError('Access denied. Insufficient permissions.');
      }
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          status: 'failed',
          message: error.message
        });
      } else {
        return res.status(INTERNAL_SERVER_ERROR).json({
          status: 'failed',
          message: 'Internal Server Error'
        });
      }
    }
  };
};

export default authenticated;
