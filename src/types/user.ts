import { UserRole } from '../models/User';
export type TUser = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: UserRole;
  invited?: boolean;
};
