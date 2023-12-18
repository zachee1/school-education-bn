import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateInputs = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({ errors: [{ msg: error.message }] });
    }
  };
};

export default validateInputs;
