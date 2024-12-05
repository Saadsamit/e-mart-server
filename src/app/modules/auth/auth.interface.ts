import { userRole, userStatus } from '@prisma/client';

export type TUserRole = keyof typeof userRole;

export type TUserStatus = keyof typeof userStatus;

export interface TLogin {
  email: string;
  password: string;
}

export interface TUser extends TLogin {
  name: string;
  picture: string;
  role: TUserRole;
  status: TUserStatus;
}
