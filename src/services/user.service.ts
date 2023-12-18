import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  BadRequestError,
  ConflictError,
  InternalServerError,
  AppError
} from '../utils/errorHandling';
import User, { IUser } from '../models/User';

// Define Payload type
interface Payload {
  userId: string;
  email: string;
  role: string;
}

const signup = async (
  firstName: string,
  lastName: string,
  role: string,
  email: string,
  password: string
): Promise<string | void> => {
  try {
    let user: IUser = await User.findOne({ email });

    if (user) {
      throw new ConflictError('User already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const userFields = {
      firstName,
      lastName,
      role,
      email,
      password: hashed
    };

    user = new User(userFields);
    await user.save();
    const payload: Payload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });
    return token;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    } else {
      throw new InternalServerError('Server Error');
    }
  }
};

const login = async (email: string, password: string): Promise<string | void> => {
  try {
    let user: IUser = await User.findOne({ email });

    if (!user) {
      throw new BadRequestError('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestError('Invalid Credentials');
    }

    const payload: Payload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    return token;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    } else {
      throw new InternalServerError('Server Error');
    }
  }
};

// get all users
const getAllUsers = async () => {
  const users: IUser[] = await User.find();
  return users;
};

export default {
  signup,
  login,
  getAllUsers
};
