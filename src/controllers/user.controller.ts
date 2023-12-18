import asyncMiddleware from '../middleware/asyncMiddleware';
import { CREATED, OK } from 'http-status';
import { Request, Response } from 'express';
import { userService } from '../services';

const signup = asyncMiddleware(async (req: Request, res: Response) => {
  const { firstName, lastName, role, email, password } = req.body;
  const token = await userService.signup(firstName, lastName, role, email, password);
  res.status(CREATED).json({
    status: 'success',
    message: 'Token has been created succesfuly',
    token
  });
});

const login = asyncMiddleware(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  res.status(CREATED).json({
    status: 'success',
    message: 'Token has been created succesfuly',
    token
  });
});

const getAllUsers = asyncMiddleware(async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(OK).json({
    status: 'success',
    message: 'Users has been listed successfully',
    users
  });
});

export default {
  signup,
  login,
  getAllUsers
};
